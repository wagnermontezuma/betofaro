import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Senador Beto Faro | Representante do Pará no Senado Federal",
  description: "Site oficial do Senador Beto Faro (PT-PA). Conheça a trajetória, projetos e iniciativas do representante do Pará no Senado Federal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable}`}>
      <body className="min-h-screen bg-pt-white text-pt-dark antialiased">
        {children}
      </body>
    </html>
  );
}
