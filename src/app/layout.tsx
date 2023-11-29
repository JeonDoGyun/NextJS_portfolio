import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GNB from "@/app/components/GNB";
import Footer from "@/app/components/Footer";
import StartingSection from "./sections/StartingSection";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "프론트엔드 개발자 JeonDoGyun의 포트폴리오",
  icons: {
    icon: "favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <GNB />
        <div className="">
          <StartingSection>{children}</StartingSection>
        </div>
        <Footer />
      </body>
    </html>
  );
}
