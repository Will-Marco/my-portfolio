import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./navbar/Navbar";
import { ThemeProvider } from "@/providers/theme-provider";
import "./globals.css";

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
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
