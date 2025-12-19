import "../globals.css";
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
  SignUpButton,
  ClerkProvider,
} from "@clerk/nextjs";

export const metadata = {
  title: "Sign In to eNearby",
  description: "Admin Dashboard for eNearby",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider signInFallbackRedirectUrl="/" signUpFallbackRedirectUrl="/">
      <div className="flex items-center justify-center min-h-screen">
        {children}
      </div>
    </ClerkProvider>
  );
}
