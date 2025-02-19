import type { Metadata } from "next";
import { Archivo_Black, Share_Tech } from "next/font/google";
import "./globals.css";

const archivoBlack = Archivo_Black({
  weight: ["400"],
  variable: "--font-head",
  subsets: ["latin"],
});

const shareTech = Share_Tech({
  weight: ["400"],
  variable: "--font-share-tech",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${archivoBlack.variable} ${shareTech.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
