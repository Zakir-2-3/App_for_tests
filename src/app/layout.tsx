import type { Metadata } from "next";

import { Montserrat } from "next/font/google";

import "@/styles/reset.css";
import "@/styles/globals.scss";

const montserrat = Montserrat({
  weight: ["400", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Тест",
  description: "Пройти тест",
  icons: "/favicon.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={montserrat.className}>
        <main className="main">{children}</main>
      </body>
    </html>
  );
}
