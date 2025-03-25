import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./navigation";

export const metadata: Metadata = {
  title: "Next App",
  description: "Awesome description here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
