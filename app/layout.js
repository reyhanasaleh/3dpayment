import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import "@/app/globals.css";
import BootstrapClient from "@/app/bootstrap_client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "2D Payment",
  description: "2D Payment System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <BootstrapClient />
        <ToastContainer position="bottom-center" autoClose={3000} />
      </body>
    </html>
  );
}
