import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFilesBackground from "@/components/FireFilesBackground";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Portfolio Matheus",
  description: "Portfolio de um dev fullstack",
  icons: {
    icon: "/icons/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={clsx(
          inter.variable,
          "bg-background text-foreground font-inter"
        )}
      >
        {children}
        <FireFilesBackground />
      </body>
    </html>
  );
}
