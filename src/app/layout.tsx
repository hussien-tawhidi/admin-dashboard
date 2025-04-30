import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SideBar from "@/components/side-bar/SideBar";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "پنل مدیریت سایت",
  description: "این پنل مدیریت در کتایخانه nextjs  ساخته شده",
  icons: {
    icon: "/logo.ico", // Path to the favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' dir='rtl'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <div className='text-light bg-lighter dark:bg-darker lg:flex dark:text-light'>
            <div className='flex'>
              <SideBar />
            </div>
            <div className='lg:mt-20 w-full min-h-[100vh]'>{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
