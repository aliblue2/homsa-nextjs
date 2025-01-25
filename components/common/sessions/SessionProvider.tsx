"use client";
import React, { createContext } from "react";

export const SessionCtx = createContext<string | undefined>(undefined);

const SessionProvider: React.FC<{
  children: React.ReactNode;
  session: string | undefined;
}> = ({ children, session }) => {
  return <SessionCtx.Provider value={session}>{children}</SessionCtx.Provider>;
};

export default SessionProvider;
