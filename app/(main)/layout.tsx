import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./../globals.css";
import "./../style.css"
import NavBarAlarm from "../_components/navbar";
import FooterAlarm from "../_components/footer";
import FloatingChat from "../_components/flowting-chat";

const roboto = Nunito({
  weight: '400',
  subsets: ['latin'],
})
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
      <body className={roboto.className}>
        <NavBarAlarm/>
        <div className="">
          {children}
        </div>
        <FooterAlarm/>
        <FloatingChat/>
      </body>
    </html>
  );
}
