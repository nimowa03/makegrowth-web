import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  variant?: "light" | "dark" | "glass";
  className?: string;
  hover?: boolean;
  innerClassName?: string;
}

const outerVariants = {
  light: "bg-black/[0.02] ring-1 ring-black/[0.06] p-1.5 rounded-[2rem]",
  dark: "bg-white/[0.05] ring-1 ring-white/10 p-1.5 rounded-[2rem]",
  glass: "bg-white/[0.05] ring-1 ring-white/10 p-1.5 rounded-[2rem]",
};

const innerVariants = {
  light:
    "bg-white rounded-[calc(2rem-0.375rem)] p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_2px_8px_rgba(28,25,23,0.04)]",
  dark:
    "bg-white/[0.03] rounded-[calc(2rem-0.375rem)] p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]",
  glass:
    "bg-white/[0.03] backdrop-blur-2xl rounded-[calc(2rem-0.375rem)] p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]",
};

export function Card({
  children,
  variant = "light",
  className,
  hover = false,
  innerClassName,
}: CardProps) {
  return (
    <div
      className={cn(
        outerVariants[variant],
        hover &&
          "hover:ring-[#2A2A2F]/20 hover:scale-[1.01] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
        className
      )}
    >
      <div className={cn(innerVariants[variant], innerClassName)}>
        {children}
      </div>
    </div>
  );
}
