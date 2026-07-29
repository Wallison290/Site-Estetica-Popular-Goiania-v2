import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://estetica-popular-goiania.vercel.app"),
  title: {
    default: "Estética Popular de Goiânia | Estética regenerativa em Goiânia",
    template: "%s | Estética Popular de Goiânia",
  },
  description:
    "Tratamentos estéticos, estética regenerativa e Pilates no Setor Sul, em Goiânia. Atendimento acolhedor, natural e acessível. Agende pelo WhatsApp.",
  keywords: [
    "clínica de estética em Goiânia",
    "estética regenerativa Goiânia",
    "tratamento corporal Goiânia",
    "botox Goiânia",
    "Pilates Goiânia",
    "Estética Popular de Goiânia",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Estética Popular de Goiânia",
    title: "Estética Popular de Goiânia",
    description:
      "Estética regenerativa, bem-estar e cuidado acessível no Setor Sul, em Goiânia.",
    images: [
      {
        url: "/assets/images/foto-hero-adriana.png",
        width: 783,
        height: 1376,
        alt: "Adriana Bezerra — Estética Popular de Goiânia",
      },
    ],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
