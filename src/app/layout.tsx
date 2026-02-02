import type { Metadata } from "next";
import "./globals.css";
import { ClientBody } from "./ClientBody";

export const metadata: Metadata = {
  title: "Merivale Auto Centre",
  description: "Auto repair shop in Ottawa offering oil changes, brakes, tires, diagnostics, and more. Located at 1453 Merivale Road. Call 613-274-4444.",
  icons: {
    icon: "https://www.carko.ca/favicon/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
