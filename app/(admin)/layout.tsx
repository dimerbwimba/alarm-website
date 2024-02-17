import Providers from "@/components/layouts/providers"
import { getServerSession } from "next-auth";

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body>
       <Providers session={session}>
        {children}
        </Providers>
      </body>
    </html>
  )
}