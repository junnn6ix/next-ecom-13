"use client";
import { useStoreModal } from "@/hooks/UseStoreModal";
import { useEffect } from "react";

const SetupPage = () => {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return (
    <main className="w-screen h-screen px-[5%]">
      <div></div>
    </main>
  );
};
export default SetupPage;
