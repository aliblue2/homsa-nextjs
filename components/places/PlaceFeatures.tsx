import { PlaceFeatures } from "@/types/Place";
import { BedDouble, ForkKnifeCrossed, House, Toilet } from "lucide-react";
import React from "react";

const PlaceFeaturesSec: React.FC<{ features: PlaceFeatures }> = ({
  features,
}) => {
  return (
    <>
      <div className="gap-5 border-y-2 w-full py-5">
        <h6 className="text-2xl font-medium text-accentColor">امکانات ویلا</h6>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 py-5">
          <div className="flex items-center justify-start gap-5">
            <House size={20} />
            <div className="flex flex-col items-start justify-start gap-2">
              <h5 className="text-lg font-medium">فضای ویلا</h5>
              <h6>
                {features.Space.toLocaleString("fa-IR")} متر زیربنا ۵ پله{" "}
              </h6>
            </div>
          </div>
          <div className="flex items-center justify-start gap-5">
            <Toilet size={24} />
            <div className="flex flex-col items-start justify-start gap-2">
              <h5 className="text-lg font-medium">سرویس بهداشتی</h5>
              <h6>
                {features.Bathrooms.toLocaleString("fa-IR")} سرویس بهداشتی
              </h6>
            </div>
          </div>
          <div className="flex items-center justify-start gap-5">
            <BedDouble size={24} />
            <div className="flex flex-col items-start justify-start gap-2">
              <h5 className="text-lg font-medium">اتاق خواب</h5>
              <h6>
                {features.Bedrooms.toLocaleString("fa-IR")} با ۲ تخت
              </h6>
            </div>
          </div>
          <div className="flex items-center justify-start gap-5">
            <ForkKnifeCrossed size={24} />
            <div className="flex flex-col items-start justify-start gap-2">
              <h5 className="text-lg font-medium">آشپزخانه</h5>
              <h6>
                {features.Kitchen.toLocaleString("fa-IR")} به همراه گاز و یخچال
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceFeaturesSec;
