import type { Metadata } from "next";
import { Header } from "@/components";
import "./globals.css";

export const metadata: Metadata = {
  title: "Уборка в Алматы",
  description: "Закажите уборку квартиры или офиса в Алматы на нашем сайте",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`font-museo antialiased`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
