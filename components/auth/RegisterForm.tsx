"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function RegisterForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (password !== confirm) {
      setError("Parollar deň däl");
      return;
    }
    if (password.length < 4) {
      setError("Parol azyndan 4 nyşan bolmaly");
      return;
    }
    if (password.length > 25) {
      setError("Parol 25 nyşandan köp bolmaly däldir");
      return;
    }

    setLoading(true);

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, identifier, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error ?? "Hasap açmak başartmady");
      setLoading(false);
      return;
    }

    await signIn("credentials", { identifier, password, redirect: false });
    router.push("/dashboard");
    router.refresh();
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Hasap açyň</CardTitle>
        <CardDescription>Mugt hasap açyp, öwrenip başlaň</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Adyňyz</Label>
            <Input
              id="name"
              type="text"
              placeholder="Adyňyzy giriziň"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="identifier">Email ýa-da telefon belgisi</Label>
            <Input
              id="identifier"
              type="text"
              placeholder="email@mysal.com ýa-da +99361234567"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              required
            />
            <p className="text-xs text-gray-500">
              Türkmen telefon belgisi +993 bilen başlamaly (mysal: +99361234567)
            </p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Parol</Label>
            <Input
              id="password"
              type="password"
              placeholder="4–25 nyşan"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm">Paroly tassyklaň</Label>
            <Input
              id="confirm"
              type="password"
              placeholder="Paroly gaýtalaň"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              required
            />
          </div>
          {error && (
            <p className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded-md">{error}</p>
          )}
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Hasap açylýar..." : "Hasap aç"}
          </Button>
          <p className="text-center text-sm text-gray-600">
            Hasabyňyz barmy?{" "}
            <Link href="/login" className="text-blue-600 hover:underline font-medium">
              Giriş
            </Link>
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
