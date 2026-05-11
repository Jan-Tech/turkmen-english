import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import questions from "@/lib/headway-beginner-questions";

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  return NextResponse.json({ questions });
}
