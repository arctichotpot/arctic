import { cn } from "@/lib/utils";

 const Footer = () => {
  return (
    <footer
      className={cn(
        "bg-zinc-100 dark:bg-zinc-800 transition-[margin-left] ease-in-out duration-300 p-4 text-center text-sm text-zinc-500 dark:text-zinc-400"
      )}
    >
      © 2023 Your Company. All rights reserved.
    </footer>
  );
};

export default Footer