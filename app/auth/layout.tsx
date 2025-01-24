import React from "react";

const layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <section className="w-full h-full fixed top-0 left-0 bg-whiteColor z-30">
      {children}
    </section>
  );
};

export default layout;
