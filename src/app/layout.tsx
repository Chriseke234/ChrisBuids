import type { Metadata } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ChrisBuilds | AI Web & Digital Product Builder",
  description: "I help founders turn ideas into scalable, conversion-focused products with high-impact digital experiences.",
  metadataBase: new URL("https://chrisbuilds.vercel.app"),
  openGraph: {
    title: "ChrisBuilds | AI Web & Digital Product Builder",
    description: "I help founders turn ideas into scalable, conversion-focused products.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChrisBuilds | AI Web & Digital Product Builder",
    description: "I help founders turn ideas into scalable, conversion-focused products.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="bg-[#0A0A0A] text-[#FFFFFF] min-h-full flex flex-col selection:bg-[#1E3AFF] selection:text-[#39FF6A]">
        {children}
      </body>
    </html>
  );
}
