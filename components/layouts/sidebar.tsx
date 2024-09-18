"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Logo from "./sidebar/Logo";
import { ChevronRight, ChevronLeft, Settings } from "lucide-react";
import { SidebarToggle } from "./sidebar/sidebar-toggle";

import Menu, { MenuItem } from "./sidebar/menu";

interface SidebarProps {
  items: MenuItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={`flex flex-col h-screen bg-background shadow-sm  border-r ease-in-out  px-2  relative ${
        isCollapsed ? "w-20" : "w-72"
      } transition-all duration-300`}
    >
      <SidebarToggle
        isOpen={isCollapsed}
        setIsOpen={(value: boolean) => setIsCollapsed(value)}
      ></SidebarToggle>
      <Logo isCollapsed={isCollapsed} />
      <Menu items={items} isCollapsed={isCollapsed}></Menu>
      {/* <div
        className={`
        h-14 border-t flex items-center  px-2
        ${isCollapsed ? "justify-center" : "justify-between"}
          `}
      >
        {!isCollapsed && (
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-accent hover:text-accent-foreground rounded-full"
          >
            <Settings size={24} />
          </Button>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="hover:bg-accent hover:text-accent-foreground rounded-full"
        >
          {isCollapsed ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
        </Button>
      </div> */}
    </aside>
  );
};

export default Sidebar;
