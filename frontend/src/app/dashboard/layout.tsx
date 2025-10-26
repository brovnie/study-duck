import React, { JSX, ReactNode } from "react";
import PageWrapper from "./page-wrapper";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return <PageWrapper>{children}</PageWrapper>;
}
