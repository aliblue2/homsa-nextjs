"use client";

import { UserLoginHandler } from "@/requests/auth/login";
import { useRouter } from "next/navigation";
import { useActionState } from "react";

const Login: React.FC = () => {
  const router = useRouter();

  const [state, action] = useActionState<string[] | undefined, FormData>(
    UserLoginHandler,
    []
  );

  return (
    <>
      <div className="bg-white flex flex-col items-center justify-start gap-5 w-full md:max-w-[600px] p-5 shadow-lg rounded-2xl">
        <h6 className="text-2xl font-medium"> ورود به هومسا</h6>
        <form
          action={action}
          className="flex flex-col items-center justify-start gap-3 w-full"
        >
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@email.com"
            className="w-full md:w-10/12 p-3 bg-gray-100 rounded-lg outline-none focus:outline-accentColor transition-all ease-in-out duration-300"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="رمز عبور شما"
            className="w-full md:w-10/12 p-3 bg-gray-100 rounded-lg outline-none focus:outline-accentColor transition-all ease-in-out duration-300"
          />
          {state &&
            state.map((errorItem, i) => {
              return (
                <span
                  key={errorItem + i}
                  className="text-errorColor text-start self-start mr-10 font-medium text-sm list-item"
                >
                  {errorItem}
                </span>
              );
            })}
          <input
            type="submit"
            value={"ورود"}
            className="w-full md:w-10/12 p-3 bg-primaryColor text-white font-bold rounded-lg hover:bg-accentColor text-lg mt-3 cursor-pointer transition-colors duration-300"
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
