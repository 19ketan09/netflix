"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function SignInButton({
  provider,
  icon,
}: {
  provider: string;
  icon: React.ReactNode;
}) {
  return (
    <Button onClick={() => signIn(provider)} size={"icon"} variant={"outline"}>
      {icon}
    </Button>
  );
}
