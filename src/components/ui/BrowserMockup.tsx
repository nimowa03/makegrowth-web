"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

interface BrowserMockupProps {
  url?: string;
  title?: string;
  imageSrc?: string;
  videoSrc?: string;
  placeholder?: string;
  subtext?: string;
  className?: string;
}

export function BrowserMockup({
  url = "makegrowth.co",
  title,
  imageSrc,
  videoSrc,
  placeholder,
  subtext,
  className,
}: BrowserMockupProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-[#E0E0E0] bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)] overflow-hidden group hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] transition-shadow duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
        className
      )}
    >
      {/* Browser chrome */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#FAFAFA] border-b border-[#E0E0E0]">
        {/* Traffic lights */}
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#E0E0E0]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#E0E0E0]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#E0E0E0]" />
        </div>

        {/* URL bar */}
        <div className="flex-1 mx-4 max-w-sm">
          <div className="flex items-center gap-1.5 bg-[#F0F0F0] rounded-md px-3 py-1">
            <Icon
              icon="solar:lock-linear"
              width={12}
              className="text-[#CCCCCC] shrink-0"
            />
            <span className="text-[11px] text-[#999] truncate">{url}</span>
          </div>
        </div>

        {/* Spacer */}
        <div className="w-[52px]" />
      </div>

      {/* Content area */}
      <div className="aspect-video bg-[#F8F8F8] relative">
        {videoSrc ? (
          <video
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        ) : imageSrc ? (
          <Image
            src={imageSrc}
            alt={title || "시연 화면"}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center">
            <Icon
              icon="solar:play-circle-linear"
              width={56}
              className="text-[#CCCCCC] mb-3 group-hover:text-[#999] group-hover:scale-110 transition-all duration-500"
            />
            {placeholder && (
              <p className="text-[#999] text-sm font-medium">{placeholder}</p>
            )}
            {subtext && (
              <p className="text-[#CCCCCC] text-xs mt-1">{subtext}</p>
            )}
          </div>
        )}
      </div>

      {/* Optional title bar */}
      {title && (
        <div className="px-4 py-2.5 border-t border-[#E0E0E0] bg-[#FAFAFA]">
          <p className="text-xs text-[#999] truncate">{title}</p>
        </div>
      )}
    </div>
  );
}
