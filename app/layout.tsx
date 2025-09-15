import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import { Inter } from "next/font/google"
import { Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Лидер Бетон - Производство и доставка бетона всех марок в Каневской | Бетонный завод",
  description:
    "Бетон с доставкой от производителя в Каневской. Марки М100, М150, М200, М250, М300, М350. Товарный бетон для фундамента, стяжки, строительства. Работаем по ГОСТу. Цена бетона с доставкой по Каневской и окрестностям до 90 км.",
  keywords:
    "бетон каневская, бетонный завод каневская, купить бетон каневская, бетон с доставкой, бетон от производителя, товарный бетон, бетон М100, бетон М150, бетон М200, бетон М250, бетон М300, бетон М350, бетон для фундамента, марка бетона для фундамента, цена бетона с доставкой, заказать щебень, как рассчитать объем бетона, строительные растворы, тощий бетон, бетон для стяжки",
  authors: [{ name: "Лидер Бетон" }],
  creator: "Лидер Бетон",
  publisher: "Лидер Бетон",
  robots: "index, follow",
  openGraph: {
    title: "Лидер Бетон - Бетонный завод в Каневской | Доставка бетона всех марок",
    description:
      "Производство и доставка качественного бетона в Каневской. Марки М100-М350. Собственный автопарк миксеров. Работаем по ГОСТу с 2008 года.",
    url: "https://lider-beton.vercel.app",
    siteName: "Лидер Бетон",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/images/concrete-plant.png",
        width: 1200,
        height: 630,
        alt: "Бетонный завод Лидер Бетон в Каневской",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Лидер Бетон - Бетонный завод в Каневской",
    description: "Производство и доставка бетона всех марок. Работаем по ГОСТу.",
    images: ["/images/concrete-plant.png"],
  },
  alternates: {
    canonical: "https://lider-beton.vercel.app",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`font-sans ${inter.variable} ${montserrat.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Suspense fallback={null}>{children}</Suspense>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
