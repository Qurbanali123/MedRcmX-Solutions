import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "MedRCMx Solutions | Expert Medical Billing & Revenue Cycle Management",
  description:
    "MedRCMx Solutions provides comprehensive medical billing, coding, credentialing, and revenue cycle management services. Maximize your revenue with the #1 medical billing partner.",
  keywords:
    "medical billing, revenue cycle management, medical coding, credentialing, RCM, healthcare billing",
  openGraph: {
    title: "MedRCMx Solutions | Medical Billing Experts",
    description: "Transform your practice revenue with expert medical billing services.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&family=Fira+Code:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#091e35] text-white overflow-x-hidden">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
