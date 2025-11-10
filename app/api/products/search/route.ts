import {prisma} from '@/prisma/prisma-client';
import {NextRequest, NextResponse} from 'next/server';

// в этом фале описываем ручки для /api/products/search?query=
export async function GET(req: NextRequest) {
  // получаем параметры запроса
  const query = req.nextUrl.searchParams.get('query') || '';

  // находим продукты по параметрам поиска
  const products = await prisma.product.findMany({
    where: {
      // таким образом мы будем проверять на строгое соотвествие
      // name: query,
      // чтоб найти всех, у кого в названии встречается это слово, то указываем так:
      name: {
        contains: query,
        // укажем отсутствие чувствительности к регистру
        mode: 'insensitive',
      },
      // однако при работе с vercel может возникнуть проблема с поиском на русском языке (например при вводе находит не 2 товара, а один). эта проблема на стороне vercel
    },
    // количество, которое будем возвращать
    take: 5,
  });

  return NextResponse.json(products);
}
