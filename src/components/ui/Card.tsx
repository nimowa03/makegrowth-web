import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  variant?: "light" | "dark" | "glass";
  className?: string;
  hover?: boolean;
  innerClassName?: string;
}

export function Card({
  children,
  className,
  hover = false,
  innerClassName,
}: CardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl p-6 border border-[#F0F0F0]",
        hover &&
          "hover:border-[#E0E0E0] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
        className
      )}
    >
      <div className={cn(innerClassName)}>
        {children}
      </div>
    </div>
  );
}
