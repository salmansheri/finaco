"use client";

import { useNewAccount } from "@/hooks/use-new-account";
import { Button } from "./ui/button";

export const DashboardClient = () => {
  const { onOpen } = useNewAccount();

  return (
    <>
      <Button onClick={onOpen}>Add New Account</Button>
    </>
  );
};
