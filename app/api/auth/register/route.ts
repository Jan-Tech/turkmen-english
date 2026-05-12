import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { prisma } from "@/lib/db";

const phoneRegex = /^\+993[0-9]{8}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const schema = z.object({
  name: z.string().min(2, "Adyňyz azyndan 2 harp bolmaly"),
  identifier: z.string().refine(
    (v) => emailRegex.test(v) || phoneRegex.test(v),
    "Email ýa-da +993 bilen başlanýan Türkmen telefon belgisi girizin"
  ),
  password: z.string().min(4, "Parol azyndan 4 nyşan bolmaly").max(25, "Parol 25 nyşandan köp bolmaly däldir"),
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  const result = schema.safeParse(body);
  if (!result.success) {
    return NextResponse.json({ error: result.error.issues[0].message }, { status: 400 });
  }

  const { name, identifier, password } = result.data;
  const isPhone = phoneRegex.test(identifier);

  const existing = isPhone
    ? await prisma.user.findUnique({ where: { phone: identifier } })
    : await prisma.user.findUnique({ where: { email: identifier } });

  if (existing) {
    return NextResponse.json(
      { error: isPhone ? "Bu telefon belgisi eýýäm hasaba alnan" : "Bu email eýýäm hasaba alnan" },
      { status: 409 }
    );
  }

  const passwordHash = await bcrypt.hash(password, 12);

  await prisma.user.create({
    data: {
      name,
      email: isPhone ? null : identifier,
      phone: isPhone ? identifier : null,
      passwordHash,
    },
  });

  return NextResponse.json({ ok: true }, { status: 201 });
}
