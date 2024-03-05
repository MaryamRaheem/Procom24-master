import { Inter } from "next/font/google";
import "../app.scss";
import Cursor from "@/components/ui/Cursor/Cursor";
import Navbar from "../Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PROCOM'24",
  description: "Legacy Meets Innovation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/assets/Plogoico.ico" />
      <body className={`${inter.className} bg-gray-950`}>
        <header>
          <Navbar />
        </header>
        {children}
        <Toaster />
        {/* <Transitions.H1></Transitions.H1> */}
        <Footer />
      </body>
    </html>
  );
}
