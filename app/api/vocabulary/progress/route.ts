import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { wordId } = await req.json();
  if (!wordId) return NextResponse.json({ error: "wordId required" }, { status: 400 });

  await prisma.vocabWordProgress.upsert({
    where: { userId_wordId: { userId: session.user.id, wordId } },
    create: { userId: session.user.id, wordId },
    update: {},
  });

  return NextResponse.json({ ok: true });
}
