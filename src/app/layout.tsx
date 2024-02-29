import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "magnified marketing | Magnifying Your Success",
  description: "Amplify Your Brand with Magnified Marketing. Your Trusted Media Marketing Agency for Artists, Musicians, Influencers, Models, and More! Let our expert team boost your online presence, engage your audience, and unleash your creative potential. Elevate your brand to new heights today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
