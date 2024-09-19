import { Home, Settings, FileText, ChartBar, Table2 } from "lucide-react";

export const title = "shadcn/ui template";
export const description = "shadcn/ui template";

export const menu = [
  {
    title: "Dashboard",
    icon: Home,
    href: "/dashboard",
  },
  {
    title: "Charts",
    icon: ChartBar,
    href: "/charts",
  },
  {
    title: "Table",
    icon: Table2,
    href: "/table",
  },
  {
    title: "Reports",
    icon: FileText,
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
