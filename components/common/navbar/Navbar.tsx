"use client";
import React, { useCallback, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Container from "../Container";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import CustomBtn from "../CustomBtn";
import { Headphones, Menu, User2 } from "lucide-react";
import MenuDrawer from "./MenuDrawer";
import Link from "next/link";

const Navbar = () => {
  const { scrollY } = useScroll();
  const headerColor = useTransform(scrollY, [0, 300], ["#0000", "#fff"]);
  const [menuDrawerVis, setMenuDrawerVis] = useState(false);

  const menuToggler = useCallback(() => {
    setMenuDrawerVis((prevState) => !prevState);
  }, []);

  return (
    <>
      <motion.header
        style={{ backgroundColor: headerColor }}
        className="w-full h-16 z-30 sticky top-0 "
      >
        <Container>
          <div className="flex items-center justify-between gap-5 w-full h-full">
            <div className="flex items-center justify-start gap-3 w-fit">
              <Menu
                size={24}
                className="text-primaryColor md:hidden cursor-pointer"
                onClick={menuToggler}
              />
              <Logo />
            </div>
            <div className="md:block hidden">
              <NavMenu />
            </div>
            <div className="flex items-center justify-start gap-2">
              <CustomBtn isPrimary={false}>
                <span className="md:block hidden">۰۲۱-۲۸۱۱۱۵۰۰ پشتیبانی</span>
                <Headphones size={18} />
              </CustomBtn>
              <CustomBtn>
                <Link href={"/auth"} className="flex items-center justify-center gap-2">
                  <span className="md:block hidden">ورود/ثبت‌نام</span>
                  <User2 size={18} />
                </Link>
              </CustomBtn>
            </div>
          </div>
        </Container>
      </motion.header>

      <AnimatePresence>
        {menuDrawerVis && <MenuDrawer menuTogglerHandler={menuToggler} />}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
