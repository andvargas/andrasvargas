import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const montserrat = localFont({ src: "./fonts/MontserratBold.ttf", variable: "--font-heading", weight: "700", display: "swap" });
const ysabeau = localFont({ src: "./fonts/YsabeauRegular.ttf", variable: "--font-body", weight: "400", display: "swap" });

export const metadata: Metadata = {
  title: "Andras Vargas | Fractional Operations Engineer",
  description: "Practical improvements to workflows, CRM and connected software for growing UK service businesses. Work directly with Andras V.",
  robots: { index: true, follow: true, nocache: true },
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-GB"><body className={`${montserrat.variable} ${ysabeau.variable} antialiased`}>{children}</body></html>;
}
