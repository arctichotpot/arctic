"use client";

import React from "react";
import Sidebar from "@/components/layouts/sidebar";
import Navbar from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer";
import Container from "./container";
import { Home, Settings, FileText } from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const sidebarItems = [
    {
      title: "About",
      icon: <Home size={20} />,
      href: "/about",
    },
    {
      title: "Table",
      icon: <Settings size={20} />,
      href: "/table",
    },
    {
      title: "Test",
      href: "/test",
    },
    {
      title: "Reports",
      icon: <FileText size={20} />,
      href: "/reports",
      children: [
        {
          title: "Monthly",
          href: "/reports/monthly",
        },
        {
          title: "Quarterly",
          href: "/reports/quarterly",
        },
      ],
    },
  ];

  return (
    <div className="flex h-screen">
      <Sidebar items={sidebarItems} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar />
        <Container>{children}</Container>
        <Footer />
      </div>
    </div>
  );
}
