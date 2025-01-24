"use client";

import React from "react";

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="max-w-[1300px]  mx-auto w-full h-full px-4 py-2">
      {children}
    </div>
  );
};

export default Container;
