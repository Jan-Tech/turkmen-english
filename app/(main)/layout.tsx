import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import Navbar from "@/components/layout/Navbar";

export default async function MainLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (!session?.user) redirect("/login");

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar userName={session.user.name ?? "Okuwçy"} />
      <main className="max-w-6xl mx-auto px-4 py-6">{children}</main>
    </div>
  );
}
