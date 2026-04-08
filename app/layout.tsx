import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Skyland AI Systems — Intelligenta AI-lösningar för svenska företag",
  description:
    "Vi bygger skräddarsydda AI-system som automatiserar processer, förstärker kundupplevelser och driver tillväxt. Baserade i Malmö, levererar i hela Norden.",
  keywords: [
    "AI",
    "artificiell intelligens",
    "automation",
    "maskininlärning",
    "Sverige",
    "Malmö",
    "AI-konsult",
    "processautomation",
  ],
  openGraph: {
    title: "Skyland AI Systems",
    description:
      "Intelligenta AI-lösningar som driver affärsvärde. Automatisera, optimera och väx med skräddarsyddteknologi.",
    type: "website",
    locale: "sv_SE",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sv" className="dark">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
