import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import ScrollReveal from "./ScrollReveal";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
      <WhatsAppButton />
      <ScrollReveal />
    </div>
  );
};

export default Layout;
