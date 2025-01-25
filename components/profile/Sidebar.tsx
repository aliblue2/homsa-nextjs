"use client";

import { NavItem } from "@/types/NavItem";
import React from "react";
import Link from "next/link";
import { LogOut } from "lucide-react";
import { usePathname } from "next/navigation";
import { LogoutUser } from "@/requests/auth/logout";

const Sidebar: React.FC<{ navItems: NavItem[] }> = ({ navItems }) => {
  const pathName = usePathname();

  return (
    <div className="bg-white shadow-md rounded-lg p-2 divide-y-2 divide-primaryColor/15">
      {navItems.map((item) => {
        return (
          <Link
            href={`/profile/${item.path}`}
            key={item.path}
            className={`${
              pathName.includes(item.path) &&
              "bg-primaryColor/10 text-accentColor"
            } flex items-center rounded-lg hover:bg-primaryColor/10 hover:text-accentColor justify-start gap-3 w-full p-2 transition-colors duration-300`}
          >
            {item.icon}
            {item.name}
          </Link>
        );
      })}
      <button
        onClick={() => LogoutUser()}
        className="flex items-center justify-start gap-3  text-errorColor w-full p-2 rounded-lg"
      >
        <LogOut size={20} />
        خروج از حساب
      </button>
    </div>
  );
};

export default Sidebar;
