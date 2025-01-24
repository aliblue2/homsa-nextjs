import { useRouter } from "next/navigation";
import React from "react";

const Login = () => {
  const router = useRouter();
  return (
    <>
      <div className="bg-white flex flex-col items-center justify-start gap-5 w-full md:max-w-[600px] p-5 shadow-lg rounded-2xl">
        <h6 className="text-2xl font-medium"> ورود به هومسا</h6>
        <form className="flex flex-col items-center justify-start gap-3 w-full">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@email.com"
            className="w-10/12 p-3 bg-gray-100 rounded-lg outline-none focus:outline-accentColor transition-all ease-in-out duration-300"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="رمز عبور شما"
            className="w-10/12 p-3 bg-gray-100 rounded-lg outline-none focus:outline-accentColor transition-all ease-in-out duration-300"
          />
          <input
            type="submit"
            value={"ورود"}
            className="w-10/12 p-3 bg-primaryColor text-white font-bold rounded-lg hover:bg-accentColor text-lg mt-3 cursor-pointer transition-colors duration-300"
          />
        </form>
      </div>
      <span
        className="text-accentColor cursor-pointer text-lg font-medium"
        onClick={() => {
          router.push("?mode=signup");
        }}
      >
        حساب کاربری ندارید؟‌ ثبت‌نام کنید
      </span>
    </>
  );
};

export default Login;
