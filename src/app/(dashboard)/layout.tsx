import { Header } from "@/components/header";

interface DashbaordLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashbaordLayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
