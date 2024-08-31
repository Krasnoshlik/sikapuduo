import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/ui/header";
import Footer from "./components/ui/footer";

const NotoSans = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sikapuduo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={NotoSans.className}>
      <Header/>
        {children}
      <Footer/>
      </body>
    </html>
  );
}
