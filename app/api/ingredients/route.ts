import {prisma} from '@/prisma/prisma-client';
import {NextResponse} from 'next/server';

// в этом фале описываем ручки для /api/ingredients
export async function GET() {
  const ingredients = await prisma.ingredient.findMany();

  return NextResponse.json(ingredients);
}
