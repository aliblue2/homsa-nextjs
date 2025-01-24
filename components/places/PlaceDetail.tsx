"use client";

import { Place, PlaceComment, PlaceFeatures } from "@/types/Place";
import React, { useCallback, useState } from "react";
import CustomBtn from "../common/CustomBtn";
import PlaceMap from "./PlaceMap";
import PlaceComments from "./PlaceComments";
import PlaceFeaturesSec from "./PlaceFeatures";
import { MapPinHouse, Minus, Plus, Users2 } from "lucide-react";

const PlaceDetail: React.FC<{
  place: Place;
  comments: PlaceComment[];
  features: PlaceFeatures;
}> = ({ place, comments, features }) => {
  const maxNum = 12;
  const [guestNumbers, setGuestNumbers] = useState(1);

  const changeGuestNumber = useCallback(
    (action: string) => {
      if (guestNumbers < maxNum && action == "add") {
        setGuestNumbers((prevNum) => prevNum + 1);
      }
      if (guestNumbers > 1 && action == "minus") {
        setGuestNumbers((prevNum) => prevNum - 1);
      }
    },
    [guestNumbers]
  );

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-5 p-5 ">
      <div className="flex flex-col col-span-1 md:col-span-3 items-start justify-start gap-5">
        <img
          src={place.Banner}
          alt={place.Name}
          className="w-full md:h-96 rounded-xl object-cover"
        />
        <h6 className="text-xl font-medium">اجاره : {place.Name}</h6>
        <div className="flex items-center justify-start gap-3">
          <MapPinHouse size={20} />
          <span>{place.City}</span>
          <span>{place.State}</span>
        </div>
        <PlaceFeaturesSec features={features} />
        <div>
          <h6 className="text-2xl text-accentColor mb-5 font-medium">
            توضیحات ویلا
          </h6>
          <p className="md:text-lg">{place.Description}</p>
        </div>
        <PlaceMap latitude={place.Latitude} longitude={place.Longitude} />
        <PlaceComments comments={comments} />
      </div>
      <div className="md:flex hidden bg-white h-fit sticky top-20 flex-col justify-start gap-5 shadow-md rounded-xl p-3">
        <span>شروع قمیت از</span>
        <h6 className="text-lg font-medium">
          {(+place.Price).toLocaleString("fa-IR") + "  تومان / هرشب"}
        </h6>
        <div className="flex w-full items-center justify-between border border-primaryColor p-3 rounded-md">
          <div className="flex items-center justify-start gap-2">
            <Users2 size={20} />
            <div className="flex flex-col items-start justify-start gap-2 h-full">
              <span className="text-sm font-medium">تعداد مسافران</span>
              <span className="text-xs font-medium">{guestNumbers} نفر</span>
            </div>
          </div>
          <div className="flex items-center justify-start gap-2">
            <Minus
              size={20}
              className="border rounded-md"
              onClick={() => changeGuestNumber("minus")}
            />
            {guestNumbers}
            <Plus
              size={20}
              className="border rounded-md"
              onClick={() => changeGuestNumber("add")}
            />
          </div>
        </div>
        <CustomBtn>ارسال درخواست رزرو</CustomBtn>
        <span className="text-xs font-medium">
          ارسال درخواست رزور برای شما هزینه ای ندارد.!
        </span>
      </div>
      <button className="w-full h-12 md:hidden flex items-center justify-center p-3 bg-gradient-to-r from-primaryColor text-lg to-accentColor text-white font-medium fixed bottom-0 left-0 rounded-t-2xl gap-5">
        رزور ویلا (رایگان)
        <span className="text-2xl">
          {(+place.Price).toLocaleString("fa-IR") + " تومان"}
        </span>
      </button>
    </div>
  );
};

export default PlaceDetail;
