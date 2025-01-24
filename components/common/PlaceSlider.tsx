"use client";
import { Place } from "@/types/Place";
import { Heart, Percent, PlayCircle } from "lucide-react";
import React, { useCallback } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import CustomBtn from "./CustomBtn";
import { useRouter } from "next/navigation";

const PlaceSlider: React.FC<{ places: Place[] }> = ({ places }) => {
  const router = useRouter();

  const openPlaceHandler = useCallback(
    (placeId: number) => {
      router.push(`/places/${placeId.toString()}`);
    },
    [router]
  );

  return (
    <div className="bg-gradient-to-br from-primaryColor to-accentColor p-5 rounded-[30px] my-5">
      <Swiper
        modules={[Pagination]}
        slidesPerView={1.7}
        spaceBetween={15}
        breakpoints={{
          640: {
            slidesPerView: 2.5,
          },
          768: {
            slidesPerView: 3.5,
          },
          1024: {
            slidesPerView: 4.5,
          },
        }}
      >
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center min-h-80 rounded-3xl rounded-l-[90px] p-3 gap-3 bg-gradient-to-b from-primaryColor to-whiteColor">
            <Percent size={64} />
            <h6 className="text-xl md:text-2xl text-center font-medium">
              تخفیف های لحظه آخری
            </h6>
            <CustomBtn isPrimary={false}>
              <span>مشاهده همه</span>
            </CustomBtn>
          </div>
        </SwiperSlide>
        {places.map((place) => {
          return (
            <SwiperSlide key={place.Id}>
              <div
                onClick={() => openPlaceHandler(place.Id)}
                className="min-h-80 cursor-pointer bg-white rounded-3xl shadow-md gap-5 p-1 overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={place.Banner}
                    alt={place.Name}
                    className="rounded-2xl rounded-b-3xl object-cover h-44 w-full"
                  />
                  <span className="text-errorColor bg-errorColorLight flex items-center justify-center gap-2 absolute bottom-2 left-2 text-xs md:text-sm px-2 py-1 rounded-full font-medium">
                    ویدیو اقامتگاه
                    <PlayCircle size={20} />
                  </span>
                </div>
                <div className="flex flex-col p-1 items-start justify-start gap-1">
                  <h6 className="md:text-lg font-medium mt-2 line-clamp-1">
                    {place.Name}
                  </h6>
                  <div className="flex text-gray-500 items-center justify-start gap-2">
                    <span className="text-xs md:text-sm">{place.City}</span>,
                    <span className="text-xs md:text-sm">{place.State}</span>
                  </div>
                  <div className="flex items-center justify-start gap-2">
                    <h5 className="text-xl md:text-lg font-medium text-accentColor">
                      {(+place.Price).toLocaleString("fa-IR")}
                    </h5>
                    <span className="font-medium text-sm md:text-base text-gray-700">
                      تومان | هرشب
                    </span>
                  </div>
                  <button className="bg-primaryColor/15 absolute bottom-3 left-2 p-2 rounded-full text-primaryColor">
                    <Heart size={20} />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default PlaceSlider;
