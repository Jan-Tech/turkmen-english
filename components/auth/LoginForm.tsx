"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function LoginForm() {
  const router = useRouter();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const result = await signIn("credentials", {
      identifier,
      password,
      redirect: false,
    });

    setLoading(false);

    if (result?.error) {
      setError("Email/telefon ýa-da parol nädogry");
    } else {
      router.push("/dashboard");
      router.refresh();
    }
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Hasaba giriş</CardTitle>
        <CardDescription>Email ýa-da telefon belgisi bilen giriň</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
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
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Parol</Label>
            <Input
              id="password"
              type="password"
              placeholder="Parolyňyzy giriziň"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && (
            <p className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded-md">{error}</p>
          )}
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Girilýär..." : "Giriş"}
          </Button>
          <p className="text-center text-sm text-gray-600">
            Hasabyňyz ýokmy?{" "}
            <Link href="/register" className="text-blue-600 hover:underline font-medium">
              Hasap açyň
            </Link>
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
