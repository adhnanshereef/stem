import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Stem",
  description:
    "Stem, created by Adhnan Shereef T, is a powerful app offering a wealth of knowledge in Science, Technology, Engineering, and Mathematics. Utilize our prompt-based chatbot and manual input options to effortlessly explore concepts, perform calculations, and find accurate solutions. Enhance your understanding and excel in STEM fields with ease",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Metadata */}
        <meta
          name="google-site-verification"
          content="EZc421c2qzZii6OLjRd8RwtD-tmx_aGNqK9xRILeam0"
        />
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
        <div className="by">
          <Link
            href="https://www.adhnan.me"
            target="_blank"
            className="gradient-text-A"
          >
            by <br />
            <i className="fa-brands fa-atlassian"></i>dhnan
          </Link>
        </div>
        {children}
      </body>
    </html>
  );
}
