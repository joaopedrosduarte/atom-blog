import { poppins, roboto } from "@/utils/fonts";
import "../styles/globals.css";

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${roboto.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  )
}
