"use client";
import Image from "next/image";
import React from "react";
import HeroImg from "@/public/hero.png";
import CustomBtn from "../common/CustomBtn";
import { ArrowLeft } from "lucide-react";
const Hero = () => {
  return (
    <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-5 p-2">
      <div className="flex flex-col items-start justify-center gap-5 col-span-1">
        <h6 className="text-4xl font-bold leading-normal">
          بهترین اقامتگاه‌ها یک کلیک با شما فاصله دارد.!
        </h6>
        <p className="font-medium text-xl">
          رزرو آسان ویلا و اقامتگاه‌ و کلبه های خاص در بهترین مناطق گردشگری
        </p>
        <div className="flex md:w-fit w-full items-center justify-start gap-1">
          <CustomBtn>مشاهده اقامتگاه‌ها</CustomBtn>
          <CustomBtn isPrimary={false}>
            <ArrowLeft size={20} />
          </CustomBtn>
        </div>
        <div className="flex items-center justify-between w-full divide-x-reverse divide-x-2">
          <div className="flex flex-col divide-primaryColor divide-y-4 items-center justify-center text-primaryColor px-4 py-1">
            <h6 className="text-2xl md:text-3xl font-medium">۲۳۵۶+</h6>
            <span className="font-medium text-base md:text-lg text-blackColor p-2">
              اقامتگاه‌
            </span>
          </div>
          <div className="flex flex-col divide-primaryColor divide-y-4 items-center justify-center text-primaryColor px-4 py-1">
            <h6 className="text-2xl md:text-3xl font-medium">۱۴۵۶+</h6>
            <span className="font-medium text-base md:text-lg text-blackColor p-2">
              میزبان
            </span>
          </div>
          <div className="flex flex-col divide-primaryColor divide-y-4 items-center justify-center text-primaryColor px-4 py-1">
            <h6 className="text-2xl md:text-3xl font-medium">۱۸۵۶+</h6>
            <span className="font-medium text-base md:text-lg text-blackColor p-2">
              کاربر فعال
            </span>
          </div>
        </div>
      </div>

      <div className="col-span-1 md:col-span-2 p-2 md:p-12">
        <Image src={HeroImg} alt="heroImage" className="w-full" />
      </div>
    </div>
  );
};

export default Hero;
