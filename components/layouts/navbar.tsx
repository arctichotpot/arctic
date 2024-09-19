"use client";

import React from "react";
import { Search } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toogle";
import UserNav from "./user-nav";

const Navbar: React.FC = () => {
  return (
    <header className="  z-10 w-full border-b  bg-background/95 shadow-sm backdrop-blur">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end h-14">
          {/* <div className="relative mr-4">
            <input
              type="text"
              placeholder="搜索..."
              className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
          </div> */}
          <ThemeToggle className="mr-4" />
          <UserNav />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
