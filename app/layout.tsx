import { Nunito } from 'next/font/google';

import './globals.css';
import { Providers } from '@/shared/components/shared/providers';

const nunito = Nunito({
  subsets: ['cyrillic'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900'],
});

// это наш самый главный лайаут. В нем есть только базовое представление. Все остальное будет рендериться уже во вложенных лайаутах
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link data-rh="true" rel="icon" href="/logo.png" />
      </head>
      <body className={nunito.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
