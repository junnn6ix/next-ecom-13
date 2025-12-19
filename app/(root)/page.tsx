import { ClerkProvider } from "@clerk/clerk-react";
import { UserButton } from "@clerk/nextjs";

const SetupPage = () => {
  return (
    <main className="w-screen h-screen px-[5%]">
      <header className="flex items-center justify-between py-4">
        <h1 className="font-bold">LOGO</h1>
        <UserButton />
      </header>
    </main>
  );
};
export default SetupPage;
