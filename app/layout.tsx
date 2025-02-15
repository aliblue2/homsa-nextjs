import type { Metadata } from "next";
import "./globals.css";
import ClientOnly from "@/components/common/ClientOnly";
import Navbar from "@/components/common/navbar/Navbar";
import Footer from "@/components/common/Footer";
import SessionProvider from "@/components/common/sessions/SessionProvider";
import { GetSessions } from "@/utils/auth/storage";

export const metadata: Metadata = {
  title: "هومسا |‌رزور و اجاره ویلا در سراسر کشور | پشتیبانی ۲۴ ساعته",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await GetSessions("token");

  return (
    <html lang="fa" dir="rtl">
      <body
        suppressHydrationWarning={true}
        className="bg-whiteColor text-blackColor"
      >
        <SessionProvider session={session}>
          <ClientOnly>
            <Navbar />
          </ClientOnly>
          {children}
          <ClientOnly>
            <Footer />
          </ClientOnly>
        </SessionProvider>
      </body>
    </html>
  );
}
