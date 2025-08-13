import type { Metadata } from "next";
import "./globals.css";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Rafy & Rania – Wedding 2026",
  description: "Save the date",
  openGraph: {
    title: "Rafy & Rania – Wedding 2026",
    description: "Save the date",
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
