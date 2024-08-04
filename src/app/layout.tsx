import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StoreProvider from "./StoreProvider";
import { EdgeStoreProvider } from "@/lib/edgestore";
import ToastMessageContainer from "@/components/ToastMessageContainer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Webease",
  description: "Your Tourist Partner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <EdgeStoreProvider>
        <html lang="en">
          <body>
            <Navbar />
            <main className={inter.className}>{children}</main>
            <ToastMessageContainer />
            <Footer />
          </body>
        </html>
      </EdgeStoreProvider>
    </StoreProvider>
  );
}
