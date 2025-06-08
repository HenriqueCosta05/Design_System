import { Html, Head, Main, NextScript } from "next/document";
import { Inter } from "next/font/google";

export default function Document() {
  const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
  });
  return (
    <Html lang="en" className={inter.variable}>
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
