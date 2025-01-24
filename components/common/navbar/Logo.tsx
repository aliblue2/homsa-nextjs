import Image from "next/image";
import React from "react";
import LogoImage from "@/public/logo.webp";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image
        src={LogoImage}
        alt="homsa"
        className="md:max-w-36 max-w-32"
        priority
      />
    </Link>
  );
};

export default Logo;
