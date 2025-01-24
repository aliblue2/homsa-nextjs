"use client";
import React from "react";
import { motion } from "framer-motion";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import CustomBtn from "../CustomBtn";
import { Headphones, User2 } from "lucide-react";

const MenuDrawer: React.FC<{ menuTogglerHandler: () => void }> = ({
  menuTogglerHandler,
}) => {
  return (
    <motion.div
      onClick={menuTogglerHandler}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        type: "keyframes",
        ease: "easeInOut",
        duration: 0.5,
      }}
      className="fixed z-30 md:hidden top-0 left-0 w-full h-full bg-primaryColor/20 backdrop-blur-sm p-2"
    >
      <motion.div
        initial={{ opacity: 0, right: -200 }}
        animate={{ opacity: 1, right: 0 }}
        exit={{ opacity: 0, right: -200 }}
        transition={{
          type: "spring",
          bounce: 0.5,
          duration: 0.5,
        }}
        className="top-0 flex flex-col items-center justify-between relative shadow-xl right-0 w-[70%] bg-white h-full rounded-l-3xl rounded-md p-5"
      >
        <Logo />
        <NavMenu />
        <div className="flex flex-col items-center justify-start gap-2">
          <CustomBtn isPrimary={false}>
            <span>۰۲۱-۲۸۱۱۱۵۰۰ پشتیبانی</span>
            <Headphones size={18} />
          </CustomBtn>
          <CustomBtn>
            <span>ورود/ثبت‌نام</span>
            <User2 size={18} />
          </CustomBtn>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MenuDrawer;
