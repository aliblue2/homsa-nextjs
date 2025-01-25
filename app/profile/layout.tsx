import Container from "@/components/common/Container";
import Sidebar from "@/components/profile/Sidebar";
import { NavItem } from "@/types/NavItem";
import { Briefcase, Heart, HousePlus, User2, Wallet } from "lucide-react";
import React from "react";

const navItems: NavItem[] = [
  {
    name: "رزرو های من",
    path: "reservation",
    icon: <Briefcase size={20} />,
  },
  {
    name: "مورد علاقه ها",
    path: "favorites",
    icon: <Heart size={20} />,
  },
  {
    name: "اطلاعات حساب",
    path: "user-info",
    icon: <User2 size={20} />,
  },
  {
    name: "کیف پول",
    path: "wallet",
    icon: <Wallet size={20} />,
  },
  {
    name: "میزبان شوید",
    path: "owner",
    icon: <HousePlus size={20} />,
  },
];

const layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <section className="p-5">
      <Container>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-5">
          <div className="col-span-1">
            <Sidebar navItems={navItems} />
          </div>
          <div className="col-span-1 md:col-span-4">{children}</div>
        </div>
      </Container>
    </section>
  );
};

export default layout;
