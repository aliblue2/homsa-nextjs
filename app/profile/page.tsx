import { SwatchBook } from "lucide-react";

const Page = ({}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="bg-gradient-to-b from-primaryColor to-accentColor p-5 rounded-full">
        <SwatchBook size={128} className="text-white p-1" />
      </div>
      <h6 className="text-accentColor text-center font-medium text-2xl md:text-3xl">
        از منو برای دیدن رزرو ها استفاده کنید
      </h6>
    </div>
  );
};

export default Page;
