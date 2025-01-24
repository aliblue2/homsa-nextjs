"use client";
import { motion } from "framer-motion";
import React from "react";

const CustomBtn: React.FC<{
  isPrimary?: boolean;
  children: React.ReactNode;
  onClickHandler?: () => void;
}> = ({ children, isPrimary = true, onClickHandler }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      transition={{
        type: "spring",
        bounce: 0.4,
        stiffness: 500,
      }}
      onClick={onClickHandler}
      className={`${
        isPrimary
          ? "bg-primaryColor hover:bg-accentColor text-white"
          : "bg-accentColor/20 hover:bg-accentColor text-accentColor hover:text-white"
      } rounded-full w-full font-medium flex items-center justify-center gap-3 p-2 md:px-4 py-2 md:w-fit transition-colors duration-300 text-sm md:text-base`}
    >
      {children}
    </motion.button>
  );
};

export default CustomBtn;
