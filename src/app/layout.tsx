import type { Metadata } from "next";
import "./globals.css";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Rania & Rafy – 01.08.2026",
  description: "Wedding homepage with countdown and video.",
  openGraph: {
    title: "Rania & Rafy – 1 August 2026",
    description: "Wedding homepage with countdown and video.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          {/* <Header /> */}
          {children}
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
