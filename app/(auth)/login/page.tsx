import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import React from "react";
import SignInButton from "@/app/components/SignInButton";
import { auth } from "@/utils/auth";
import { redirect } from "next/navigation";

async function Login() {
  const session = await auth();

  if (session) {
    return redirect("/home");
  }

  return (
    <div className="mt-24 rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:px-14">
      <form action="/api/auth/signin" method="post" className="mb-2">
        <h1 className="text-2xl font-semibold text-white">Sign In</h1>
        <div className=" flex flex-col gap-4 mt-5">
          <Input
            type="email"
            name="email"
            placeholder="Email"
            className="bg-[#333] placeholder:text-sm placeholder:text-gray-400 w-full inline-block"
          />
          <Button
            type="submit"
            className="w-full bg-[#e50914]"
            variant={"destructive"}
          >
            Login
          </Button>
        </div>
      </form>
      <span className="text-neutral-400 text-sm">
        Don&apos;t have an account?{" "}
        <Link className="text-white hover:underline" href={"/sign-up"}>
          Register now!
        </Link>
      </span>
      <div className="flex w-full justify-center items-center gap-x-3 mt-6">
        <SignInButton provider="github" icon={<FaGithub size={24} />} />
        <SignInButton provider="google" icon={<FcGoogle size={24} />} />
      </div>
    </div>
  );
}

export default Login;
