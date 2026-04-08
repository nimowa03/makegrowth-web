import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "available" | "coming-soon" | "new" | "custom" | "included" | "addon";
  className?: string;
}

const badgeVariants = {
  available: "bg-[#F0F0F0] text-[#444]",
  "coming-soon": "bg-[#F0F0F0] text-[#666]",
  new: "bg-[#F0F0F0] text-[#444]",
  custom: "",
  included: "bg-[#1A1A1A] text-white",
  addon: "bg-[#F0F0F0] text-[#444]",
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
