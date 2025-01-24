"use client";

import CustomBtn from "@/components/common/CustomBtn";
import Logo from "@/components/common/navbar/Logo";
import React from "react";

const Error: React.FC<{
  error: Error & { digest: string };
  reset: () => void;
}> = ({ error, reset }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-5 h-dvh">
      <Logo />
      <h1 className="text-xl font-medium">مشکلی پیش آمده است.!</h1>
      <span>{error.message}</span>
      <CustomBtn onClickHandler={() => reset()}>تلاش مجدد</CustomBtn>
    </div>
  );
};

export default Error;
