"use client";
import { SessionCtx } from "@/components/common/sessions/SessionProvider";
import { useContext } from "react";

const useSession = () => {
  const session = useContext(SessionCtx);

  return session;
};

export default useSession;
