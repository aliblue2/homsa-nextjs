import { NextPage } from "next";
import NotFoundImg from "@/public/404.svg";
import Image from "next/image";
import Link from "next/link";

const NotFound: NextPage = ({}) => {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col gap-5 p-5">
      <Image src={NotFoundImg} alt="notFound" className="max-w-[600px]" />
      <h6 className="text-lg font-medium">
        متاسفانه صفحه مورد نظر شما وجود ندارد.
      </h6>
      <Link
        href={"/"}
        className="bg-primaryColor text-white font-medium text-lg p-2 rounded-full hover:bg-accentColor transition-colors duration-300"
      >
        رفتن به صفحه اصلی هومسا
      </Link>
    </div>
  );
};

export default NotFound;
