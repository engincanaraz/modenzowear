import { Toaster } from '@/components/ui/toaster';

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
}
