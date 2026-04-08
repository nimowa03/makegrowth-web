import Link from "next/link";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "standard" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  showArrow?: boolean;
}

const variants = {
  primary:
    "bg-[#2A2A2F] text-white rounded-full font-semibold hover:bg-[#1A1A1F] hover:scale-[1.05] active:scale-[0.97] shadow-[0_1px_3px_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
  secondary:
    "bg-transparent border border-[#E0E0E0] text-[#1A1A1A] rounded-full font-semibold hover:border-[#2A2A2F]/40 hover:bg-[#F8F8F8] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
  standard:
    "bg-[#2A2A2F] text-white rounded-lg font-semibold hover:bg-[#1A1A1F] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
  ghost:
    "bg-transparent hover:bg-[#F8F8F8] rounded-lg font-medium transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
};

const sizes = {
  sm: "px-5 py-2 text-sm",
  md: "px-7 py-3 text-[15px]",
  lg: "px-8 py-4 text-base",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
  disabled = false,
  showArrow = false,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-3 group",
    variants[variant],
    sizes[size],
    disabled && "opacity-50 cursor-not-allowed",
    className
  );

  const content = (
    <>
      {children}
      {showArrow && (
        <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-300">
          <Icon icon="solar:arrow-right-linear" width={16} />
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  );
}
