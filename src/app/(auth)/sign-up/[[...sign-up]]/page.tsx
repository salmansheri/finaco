import { SignUp, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full lg:flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-4 pt-16">
          <h1 className="font-bold text-3xl text-[#2E2A47]">Welcome Back!</h1>
          <p className="text-violet-600">
            Log in or create account to get back to your dashboard!
          </p>
        </div>
        <div className="flex items-center justify-center mt-8">
          <ClerkLoaded>
            <SignUp />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="animate-spin text-violet-600 " />
          </ClerkLoading>
        </div>
      </div>
      <div className="h-full hidden lg:flex items-center justify-center">
        <Image
          className="object-cover"
          src="/finaco-removebg.png"
          height={500}
          width={500}
          alt="logo"
        />
      </div>
    </div>
  );
}
