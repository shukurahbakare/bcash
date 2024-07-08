import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/global.scss";
import Navbar from "@/components/common/nav";
import Footer from "@/components/common/footer";
import PartnersSection from "@/components/common/partners";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BCash App",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />  
        {children}
        <PartnersSection />
        <Footer />
        
        </body>
    </html>
  );
}
