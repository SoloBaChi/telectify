import type { Metadata } from "next";
import "./globals.css";
import "./styles/custome.css";
import "./styles/home.css";
import "./styles/features.css";
import "./styles/about.css";
import "./styles/barchart.css";
import "./styles/next-pay.css";

export const metadata: Metadata = {
  title: "Telectify",
  description: "Real time energy monitoring app",
  icons: "/assets/images/charity-icon.svg",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
