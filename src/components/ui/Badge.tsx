import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "available" | "coming-soon" | "new" | "custom";
  className?: string;
}

const badgeVariants = {
  available: "bg-[rgba(5,150,105,0.08)] text-[#059669]",
  "coming-soon": "bg-[rgba(217,119,6,0.08)] text-[#D97706]",
  new: "bg-accent/10 text-accent",
  custom: "",
};

export function Badge({ children, variant = "new", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block px-2.5 py-0.5 rounded-full text-[11px] font-medium",
        badgeVariants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
