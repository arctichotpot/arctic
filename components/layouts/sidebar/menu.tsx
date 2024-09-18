"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronRight, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export interface MenuItem {
  title: string;
  icon?: React.ReactNode;
  href?: string;
  children?: MenuItem[];
}

interface MenuProps {
  items: MenuItem[];
  isCollapsed: boolean;
}

const MenuItem = ({
  item,
  isCollapsed,
  depth = 0,
}: {
  item: MenuItem;
  isCollapsed: boolean;
  depth?: number;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const paddingLeft = depth * 12 + 16;
  const pathname = usePathname();
  const isActive = item.href === pathname;

  useEffect(() => {
    if (isCollapsed) {
      setIsOpen(false);
    }
  }, [isCollapsed]);

  const MenuContent = () => (
    <>
      {item.children ? (
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              className="w-full justify-between text-left hover:bg-accent hover:text-accent-foreground px-6 py-3 my-1  rounded-lg"
              style={{ paddingLeft: `${paddingLeft + 8}px` }}
            >
              <span className="flex items-center">
                {item.icon}
                <span className="ml-2 font-medium">{item.title}</span>
              </span>
              {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            {item.children.map((child, index) => (
              <MenuItem
                key={index}
                item={child}
                isCollapsed={isCollapsed}
                depth={depth + 1}
              />
            ))}
          </CollapsibleContent>
        </Collapsible>
      ) : (
        <Button
          variant={isActive ? "secondary" : "ghost"}
          className={`
              w-full justify-start text-left 
              hover:bg-accent hover:text-accent-foreground 
              px-6  my-1  rounded-lg
              transition-all duration-200
              ${isActive ? "bg-accent text-accent-foreground" : ""}
            `}
          asChild
          style={{ paddingLeft: `${paddingLeft + 8}px` }}
        >
          <a href={item.href}>
            <span className="w-[20px] block">{item.icon}</span>

            <span className="ml-2">{item.title}</span>
          </a>
        </Button>
      )}
    </>
  );

  if (isCollapsed) {
    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost" className="w-full p-2 justify-center">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>{item.icon}</TooltipTrigger>
                <TooltipContent side="right" align="center">
                  {item.title}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-56 p-0" align="start" side="right">
          <MenuItem item={item} isCollapsed={false} depth={0} />
        </PopoverContent>
      </Popover>
    );
  }

  return <MenuContent />;
};

const Menu = ({ items, isCollapsed }: MenuProps) => {
  return (
    <ScrollArea className="flex-1">
      <nav className="py-4">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <MenuItem item={item} isCollapsed={isCollapsed} />
          </React.Fragment>
        ))}
      </nav>
    </ScrollArea>
  );
};

export default Menu;
