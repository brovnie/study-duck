import React, { JSX, ReactNode } from "react";
import PageWrapper from "./page-wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Study Duck - place where you can study",
  description:
    "Join real-time video study sessions, stay accountable, earn points, and unlock new study partners along the way.",
};

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return <PageWrapper>{children}</PageWrapper>;
}
