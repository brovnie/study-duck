import Sidebar from "@/components/Dashboard/sidebar/Sidebar";
import TopBar from "@/components/Dashboard/TopBar";
import { JSX, ReactNode } from "react";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <div className="bg-amber-50 flex flex-row">
      <Sidebar />
      <main className="flex flex-col items-center justify-center w-full h-full">
        <TopBar />
        {children}
      </main>
    </div>
  );
}
