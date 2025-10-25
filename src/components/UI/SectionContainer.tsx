import React from "react";

const SectionContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full px-5 mt-5">
      <div className="flex flex-col bg-white rounded-md px-3 py-2">
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
