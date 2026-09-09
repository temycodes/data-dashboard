import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./_lib/providers";
import ThemeRegistry from "./ThemeRegistry";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Data Dashboard",
  description: "A data dashboard web app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className='min-h-full flex'>
        <ThemeRegistry>
          <Providers>{children}</Providers>
        </ThemeRegistry>
      </body>
    </html>
  );
}

// themeregistry is needed to wrap the app with the AppRouterCacheProvider from MUI, which is required for the new app directory in Next.js 13. It ensures that the MUI styles are properly applied and cached across the app.
