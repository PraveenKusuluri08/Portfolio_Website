'use client';

import dynamic from 'next/dynamic';
import ThemeProvider from '@/lib/hooks/use-theme';

// Dynamically import Cursor to avoid SSR issues (it uses document API)
const Cursor = dynamic(() => import('@/components/ui/Cursor'), {
  ssr: false,
});

type Props = {
  children: React.ReactNode;
};

export default function ClientLayout({ children }: Props) {
  return (
    <>
      <Cursor className="hidden dark:lg:block" />
      <ThemeProvider>{children}</ThemeProvider>
    </>
  );
}
