"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { ChevronRight, ChevronDown, LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DropdownMenuArrow } from "@radix-ui/react-dropdown-menu";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export interface MenuItem {
  title: string;
  icon?: LucideIcon;
  href: string;
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

  const isActive = pathname.includes(item.href);

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
                {item.icon && <item.icon />}
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
            <span className="w-[20px] block">{item.icon && <item.icon />}</span>
            <span className="ml-2">{item.title}</span>
          </a>
        </Button>
      )}
    </>
  );

  if (isCollapsed) {
    return (
      <>
        <DropdownMenu>
          <TooltipProvider disableHoverableContent>
            <Tooltip delayDuration={100}>
              <TooltipTrigger asChild>
                <DropdownMenuTrigger asChild>
                  <Link href={item.href}>
                    <Button
                      variant={isActive ? "secondary" : "ghost"}
                      className="w-full justify-start h-10 mb-1"
                    >
                      <div className="w-full items-center flex justify-between">
                        <div className="flex items-center">
                          <span className={cn(isOpen === false ? "" : "mr-4")}>
                            {item.icon ? (
                              <item.icon />
                            ) : (
                              <span className="overflow-ellipsis overflow-hidden whitespace-nowrap w-[20px]">
                                {item.title}
                              </span>
                            )}
                          </span>
                        </div>
                      </div>
                    </Button>
                  </Link>
                </DropdownMenuTrigger>
              </TooltipTrigger>
              <TooltipContent side="right" align="start">
                {item.title}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {item.children && (
            <DropdownMenuContent side="right" align="start" sideOffset={25}>
              <DropdownMenuLabel className="max-w-[190px] truncate">
                {item.title}
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              {item.children?.map(({ href, title }, index) => (
                <DropdownMenuItem key={index} asChild>
                  <Link className="cursor-pointer" href={href}>
                    <p className="max-w-[180px] truncate">{title}</p>
                  </Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuArrow className="fill-border" />
            </DropdownMenuContent>
          )}
        </DropdownMenu>
      </>
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
