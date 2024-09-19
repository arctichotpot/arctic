import React from "react";
import { title } from "@/lib/site";
import Image from "next/image";
import appLogo from "@/assets/app_logo.png";

const Logo: React.FC<{ isCollapsed: boolean }> = ({ isCollapsed }) => (
  <div
    className={`flex items-center ease-in-out ${
      isCollapsed ? "justify-center" : "justify-start px-4"
    } h-14`}
  >
    <Image
      src={appLogo}
      alt={title}
      className="w-8 h-8 rounded-full ease-in-out  border-2"
    />
    {!isCollapsed && (
      <span className="text-lg font-bold ease-in-out ml-2">{title}</span>
    )}
  </div>
);
export default Logo;
