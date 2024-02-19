import AuthProvider from "@/components/layouts/providers";
import "./../globals.css";
import "./../style.css"

export const metadata = {
  title: 'Alarm | Admin',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
