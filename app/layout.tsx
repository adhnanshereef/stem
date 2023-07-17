import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Stem",
  description: "Science, Technology, Engineering, and Mathematics. By Adhnan Shereef T",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* <!-- Font Awesome --start */}
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossOrigin="anonymous"
        />
        <Script
          src="https://kit.fontawesome.com/74e5b95d58.js"
          crossOrigin="anonymous"
        ></Script>
        {/* <!-- Font Awesome --end */}
        {/* Icon */}
        <link rel="icon" href="/logo.svg" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        <nav className="nav">
          <Image
            src="/logo.svg"
            width={70}
            height={70}
            alt="Stem Logo"
            priority
          ></Image>
          <div className="nav-links">
            <Link href="/" title="Home">
              <i className="fa-solid fa-house"></i>
            </Link>
            <Link href="/manual" title="Manual">
              <i className="fa-regular fa-keyboard"></i>
            </Link>
            <Link href="/prompt" title="Prompt">
              <i className="fa-solid fa-terminal"></i>
            </Link>
          </div>
        </nav>
        {/* By Adhnan */}
        <Link
          href="https://www.adhnan.me"
          target="_blank"
          className="gradient-text-A by"
        >
          by <br />
          <i className="fa-brands fa-atlassian"></i>dhnan
        </Link>
        {children}
      </body>
    </html>
  );
}
