import { BinocularsIcon } from "lucide-react";
import { NextPage } from "next";

const Page: NextPage = ({}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="bg-gradient-to-b from-primaryColor to-accentColor p-5 rounded-full">
        <BinocularsIcon size={128} className="text-white" />
      </div>
      <h6 className="text-accentColor text-center font-medium text-2xl md:text-3xl">
        هیچ رزوری ندارید.!
      </h6>
    </div>
  );
};

export default Page;
