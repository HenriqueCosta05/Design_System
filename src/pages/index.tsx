import { Inter } from "next/font/google";
import { Navbar } from "../components";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export default function Home() {
  return (
    <Navbar
      navItems={[
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
      ]}
      isOpen={false}
      toggleNavbar={() => { }}
      isAuthenticated={false}
    />
  )
}
