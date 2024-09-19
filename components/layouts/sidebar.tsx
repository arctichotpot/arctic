"use client";

import React, { useState } from "react";
import Logo from "./sidebar/logo";
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
    </aside>
  );
};

export default Sidebar;
