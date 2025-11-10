import { Container, ProductForm } from '@/shared/components/shared';
import { prisma } from '@/prisma/prisma-client';
import { notFound } from 'next/navigation';

export default async function ProductPage({ params: { id } }: { params: { id: string } }) {
  // получаем конкретный продукт
  const product = await prisma.product.findFirst({
    // преобразовываем id в числовое значение
    where: { id: Number(id) },
    // включаем ингредиенты и категории в ответ
    include: {
      ingredients: true,
      category: {
        include: {
          products: {
            include: {
              items: true,
            },
          },
        },
      },
      items: true,
    },
  });

  // если продукта нет, то кидаем на страницу 404
  if (!product) {
    return notFound();
  }

  return (
    <Container className="flex flex-col my-10">
      <ProductForm product={product} />
    </Container>
  );
}
