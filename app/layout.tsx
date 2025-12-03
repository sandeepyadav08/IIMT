import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WordPressStyles from "@/components/WordPressStyles";
import "./globals.css";
import "./wordpress-styles.css";

export const metadata: Metadata = {
  title: "IIM Trichy",
  description:
    "Indian Institute of Management Tiruchirappalli - Excellence in Management Education",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <WordPressStyles />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
