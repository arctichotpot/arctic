"use client";

import React from "react";
import Sidebar from "@/components/layouts/sidebar";
import Navbar from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer";
import Container from "./container";
import { menu } from "@/lib/site";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <Sidebar items={menu} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar />
        <Container>{children}</Container>
        <Footer />
      </div>
    </div>
  );
}
