"use client";
import { useUser } from "@clerk/nextjs";

export const WelcomeMsg = () => {
  const { user, isLoaded } = useUser();
  return (
    <div className="space-y-2 mb-4">
      <h2 className="text-2xl lg:text-4xl text-black font-medium ">
        Welcome Back {isLoaded ? ", " : ""}
        {user?.firstName} 👋
      </h2>
      <p className="text-sm lg:text-base text-violet-900">
        This is your Financial overview report
      </p>
    </div>
  );
};
