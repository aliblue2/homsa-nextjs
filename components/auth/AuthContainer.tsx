"use client";
import { useSearchParams } from "next/navigation";
import React from "react";
import Signup from "./Signup";
import Login from "./Login";
import Logo from "../common/navbar/Logo";

const AuthContainer: React.FC = () => {
  const searchParams = useSearchParams();

  const mode = searchParams.get("mode") || "signup";

  return (
    <div className="flex flex-col gap-8 items-center justify-center p-5 w-full h-full">
        <Logo />
      {mode === "signup" ? <Signup /> : <Login />}
    </div>
  );
};

export default AuthContainer;
