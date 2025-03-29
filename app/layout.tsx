import type { Metadata } from "next";
import "./globals.css";
import { AuroraBackground } from "@/components/backgrounds";

export const metadata: Metadata = {
  title: "Skyland AI",
  description: "AI-powered business automation",
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark [color-scheme:dark]">
      <body className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
        <AuroraBackground>
          <div className="relative z-10">
            {children}
          </div>
        </AuroraBackground>
      </body>
    </html>
  );
} 