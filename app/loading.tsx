"use client"

import Logo from "@/components/common/navbar/Logo";
import { Loader2 } from "lucide-react";
import { NextPage } from "next";

const Loading: NextPage = ({}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 text-primaryColor fixed top-0 left-0 w-full h-dvh bg-white">
      <Logo />
      <Loader2 className="animate-spin" size={64} />
    </div>
  );
};

export default Loading;
