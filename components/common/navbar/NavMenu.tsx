"use client";

import { NavItem } from "@/types/NavItem";
import { Building2, Hotel, HouseIcon, Tent } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";

export const navitems: NavItem[] = [
  {
    name: "خانه",
    path: "/",
    icon: <HouseIcon size={18} />,
  },
  {
    name: " کمپ‌ها",
    path: "/camps",
    icon: <Tent size={18} />,
  },
  {
    name: "آپارتمان",
    path: "/apartment",
    icon: <Building2 size={18} />,
  },
  {
    name: "هتل",
    path: "/hotel",
    icon: <Hotel size={18} />,
  },
];

const NavMenu = () => {
  const pathName = usePathname();

  return (
    <ul className="flex w-full md:w-5/12 md:flex-row flex-col items-center justify-between gap-5">
      {navitems.map((nav, i) => {
        return (
          <motion.li
            className={`relative w-full h-full p-2 rounded-full transition-all ease-in-out duration-300 ${
              !pathName.includes(nav.path) && "hover:bg-primaryColor/30"
            }`}
            key={nav.path + i}
          >
            <Link
              href={nav.path}
              className="flex items-center justify-center gap-2"
            >
              {nav.icon}
              {nav.name}
            </Link>
            {pathName.includes(nav.path) && (
              <motion.span
                layoutId="activePath"
                className="w-full h-full absolute bottom-0 left-0 bg-primaryColor/30 rounded-full "
              />
            )}
          </motion.li>
        );
      })}
    </ul>
  );
};

export default NavMenu;
