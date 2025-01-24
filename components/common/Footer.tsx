"use client";

import React from "react";
import Container from "./Container";
import Logo from "./navbar/Logo";
import samandehi from "@/public/samandehi.webp";
import enamad from "@/public/enamad.png";
import kasb from "@/public/kasb.svg";
import Image from "next/image";
import bazarIMg from "@/public/bazar_white_logo.webp";
import myketImg from "@/public/myket_white_logo.webp";
import googleplayIMg from "@/public/google_play.webp";
import { Headphones, Instagram, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-primaryColor/20">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-5 p-3">
          <div className="flex flex-col col-span-2 md:col-span-1 items-start justify-start gap-5">
            <Logo />
            <p className="text-lg">
              هومسا سامانه‌ای قابل اعتماد برای تمام افرادی است که به دنبال ثبت،
              پیداکردن و رزرو اقامتگاه در سراسر ایران به صورت آنلاین هستند.
            </p>
            <div className="flex items-center justify-center gap-5">
              <Image
                src={enamad}
                alt="enamad"
                priority
                className="w-20 h-full object-cover bg-white p-3 rounded-3xl shadow-sm"
              />
              <Image
                src={samandehi}
                alt="enamad"
                priority
                className="w-20 h-full object-cover bg-white p-3 rounded-3xl shadow-sm"
              />
              <Image
                src={kasb}
                alt="enamad"
                priority
                className="w-20 h-full object-cover bg-white p-3 rounded-3xl shadow-sm"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-5">
            <span>چگونه میزبان شوم؟</span>
            <span>قوانین و مقررات</span>
            <span>وبلاگ</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-5">
            <span>درباره هومسا</span>
            <span>تماس با ما</span>
            <span>سوالات متداول</span>
          </div>
          <div className="flex p-3 flex-col items-center col-span-2 md:col-span-1 justify-start gap-5">
            <div className="flex items-center justify-between p-5 rounded-xl w-full bg-primaryColor text-white font-medium shadow-[-15px_-15px_0] shadow-primaryColor/30">
              <div className="flex flex-col items-center justify-start gap-2">
                <span className="text-xl font-medium">پشتیبانی ۲۴ ساعته</span>
                <span className="text-3xl font-bold">۰۲۱-۲۸۱۱۱۵۰۰</span>
              </div>
              <Headphones
                size={24}
                className="h-full w-2/12 bg-white rounded-tl-md rounded-bl-md rounded-full text-primaryColor p-2"
              />
            </div>
            <span className="text-lg font-medium">شبکه های اجتماعی هومسا</span>
            <div className="flex items-center justify-center gap-2">
              <Mail
                size={36}
                className="bg-primaryColor p-1 rounded-full text-white"
              />
              <Instagram
                size={36}
                className="bg-primaryColor p-1 rounded-full text-white"
              />
              <Linkedin
                size={36}
                className="bg-primaryColor p-1 rounded-full text-white"
              />
              <Twitter
                size={36}
                className="bg-primaryColor p-1 rounded-full text-white"
              />
            </div>
          </div>
        </div>
      </Container>
      <div className="bg-accentColor/30 w-full p-2">
        <Container>
          <div className="flex flex-col overflow-hidden gap-5 md:flex-row items-center justify-between p-2">
            <h6 className="text-2xl font-medium">دانلود اپلیکیشن هومسا</h6>
            <div className="flex items-center justify-start gap-5">
              <Image src={bazarIMg} alt="bazar" priority className="max-w-28" />
              <Image src={myketImg} alt="bazar" priority className="max-w-28" />
              <Image
                src={googleplayIMg}
                alt="bazar"
                priority
                className="max-w-28"
              />
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
