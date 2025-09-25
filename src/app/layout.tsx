import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ReduxProviders } from "@/Providers/ReduxProviders";
import { Toaster } from "sonner";
import AOSWrapper from "@/utils/AOSWrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Ear Ali | Portfolio",
  description: "Showcasing my work, projects, and clients",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        <ReduxProviders>
          <AOSWrapper>{children}</AOSWrapper>
        </ReduxProviders>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
