import "./globals.css";
import { Inter } from "next/font/google";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";
import { ModalProvider } from "@/providers/ModalProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Dashboard",
  description: "Admin Dashboard for eNearby",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.variable} antialiased`}>
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

// https://www.youtube.com/watch?v=5miHyP6lExg&t=3385s
