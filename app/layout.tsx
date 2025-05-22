import { GlobalContext } from "@/context";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Image Gallery",
  description: "Image Gallery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <GlobalContext>{children}</GlobalContext>
      </body>
    </html>
  );
}
