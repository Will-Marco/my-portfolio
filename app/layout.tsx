import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import "./globals.css";
import Navbar from "@/components/shared/navbar/Navbar";
import { Toaster } from "@/components/ui/toaster";
import NProgressProvider from "@/providers/nprogress-provider";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio",
  description:
    "Explore my portfolio to get a glimpse of my work and the passion I bring to each project. If you're looking for a dedicated and skilled web developer for your next venture, I would love to connect!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <NProgressProvider>
            <div className="flex flex-row relative">
              <Suspense>
                <Navbar />
              </Suspense>
              {children}
              <Toaster />
            </div>
          </NProgressProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
