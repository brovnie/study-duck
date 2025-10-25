"use client";
import Sidebar from "@/components/Dashboard/sidebar/Sidebar";
import TopBar from "@/components/Dashboard/TopBar";
import Logo from "@/components/icons/Logo";
import React, { JSX, ReactNode, useEffect } from "react";

const PageWrapper = ({ children }: { children: ReactNode }): JSX.Element => {
  const [isMobile, setIsMobile] = React.useState<boolean | null>(null);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? (
    <div className="flex flex-col items-center justify-center h-screen">
      <Logo />
      <p>This application works best on desktop</p>
    </div>
  ) : (
    <div className="bg-amber-50 flex flex-row">
      <Sidebar />
      <main className="flex flex-col flex-1items-center justify-center w-full h-full">
        <TopBar />
        {children}
      </main>
    </div>
  );
};

export default PageWrapper;
