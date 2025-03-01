import type { Metadata } from "next";

import { Nunito } from "next/font/google";

import "@/styles/reset.css";
import "@/styles/globals.scss";

const nunito = Nunito({
  weight: ["400", "600", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Тесты",
  description: "Пройти тесты",
  icons: "/favicon.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={nunito.className}>
        <main className="main">{children}</main>
      </body>
    </html>
  );
}
