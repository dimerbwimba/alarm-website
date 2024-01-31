import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBarAlarm from "./_components/navbar";
import FooterAlarm from "./_components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alarm RDC",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBarAlarm/>
        <div className="md:pt-20 pt-10">
          {children}
        </div>
        <FooterAlarm/>
      </body>
    </html>
  );
}
