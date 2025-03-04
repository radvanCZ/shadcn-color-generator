import { Inter } from 'next/font/google';
import './globals.css';
import { ColorProvider } from '@/context/color-context';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'shadcn Color Schema Generator',
  description: 'Generate and visualize shadcn color schemas with OKLCH values',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ColorProvider>
          {children}
        </ColorProvider>
      </body>
    </html>
  );
}