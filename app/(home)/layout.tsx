import React from "react";
import Layout from "@/components/layouts/layout";

export default function HomePage({ children }: { children: React.ReactNode }) {
  return <Layout>{children}</Layout>;
}
