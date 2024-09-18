import { cn } from "@/lib/utils";
const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <main
      className={cn(
        "bg-zinc-50 dark:bg-zinc-900 transition-[margin-left] ease-in-out duration-300 flex-1 overflow-y-auto  p-6    w-full h-full"
      )}
    >
     <div className="w-full h-full  border bg-card text-card-foreground shadow rounded-lg border-none  p-4 ">
     {children}
     </div>
    </main>
  );
};

export default Container;
