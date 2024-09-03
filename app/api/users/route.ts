import { prisma } from '@/prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';

// в этом фале описываем ручки для /api/users
export async function GET() {
  // получем всех юзеров
  const users = await prisma.user.findMany();

  return NextResponse.json(users);
}

// создаем какого-то юзера с полями, которые мы передале в теле запроса
export async function POST(req: NextRequest) {
  const data = await req.json();

  const user = await prisma.user.create({
    data,
  });

  return NextResponse.json(user);
}
