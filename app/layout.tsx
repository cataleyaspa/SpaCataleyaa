import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cataleya | Estudio de Belleza",
  description: "Realza tu belleza y resalta tu confianza en nuestro spa especializado en belleza natural.",
  keywords: ["spa", "belleza", "Cataleya", "tratamientos faciales", "cuidado personal"],
  authors: [{ name: "Spa Cataleya" }],
  openGraph: {
    title: "Cataleya | Estudio de Belleza",
    description: "Descubre la mejor versión de ti en Spa Cataleya.",
    url: "https://spa-cataleyaa.vercel.app",
    siteName: "Spa Cataleya",
    type: "website",
  },
  icons: {
    icon: "/favicon.png", // 👈 aquí va tu logo
  },
  };



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
