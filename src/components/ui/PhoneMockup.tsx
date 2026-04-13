"use client";

import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface PhoneMockupProps {
  children: ReactNode;
  botName?: string;
  className?: string;
  showStatusBar?: boolean;
}

export function PhoneMockup({
  children,
  botName = "MakeGrowth Bot",
  className,
  showStatusBar = true,
}: PhoneMockupProps) {
  return (
    <div
      className={cn(
        "relative mx-auto w-[280px] sm:w-[300px] md:w-[320px] max-w-full",
        className
      )}
    >
      {/* Glow effect behind phone */}
      <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-[#1A1A1A]/[0.04] blur-3xl scale-110" />

      {/* Phone frame */}
      <div className="rounded-[2.5rem] border border-[#333] bg-[#000] p-[6px] shadow-[0_8px_60px_rgba(0,0,0,0.12)]">
        <div className="rounded-[2.2rem] overflow-hidden bg-[#0E1621]">
          {/* Dynamic Island */}
          <div className="flex justify-center pt-2 pb-0 bg-[#0E1621]">
            <div className="w-[90px] h-[24px] rounded-full bg-[#000]" />
          </div>

          {/* Status bar */}
          {showStatusBar && (
            <div className="flex items-center justify-between px-6 py-1.5 bg-[#0E1621]">
              <span className="text-[11px] text-white/60 font-medium tabular-nums">
                9:41
              </span>
              <div className="flex items-center gap-1">
                <Icon
                  icon="solar:smartphone-signal-bold"
                  width={12}
                  className="text-white/60"
                />
                <Icon
                  icon="solar:wi-fi-router-bold"
                  width={12}
                  className="text-white/60"
                />
                <Icon
                  icon="solar:battery-full-bold"
                  width={14}
                  className="text-white/60"
                />
              </div>
            </div>
          )}

          {/* Telegram header */}
          <div className="flex items-center gap-3 px-4 py-2.5 bg-[#17212B] border-b border-white/[0.06]">
            {/* Back arrow */}
            <Icon
              icon="solar:arrow-left-linear"
              width={20}
              className="text-[#6AB2F2] shrink-0"
            />
            {/* Bot avatar */}
            <div className="w-9 h-9 rounded-full bg-[#1A1A1A] flex items-center justify-center shrink-0">
              <Icon icon="solar:bot-minimalistic-bold" width={18} className="text-white/70" />
            </div>
            {/* Bot info */}
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-semibold text-white truncate">
                {botName}
              </p>
              <p className="text-[11px] text-[#6AB2F2]">online</p>
            </div>
            {/* Action icons */}
            <div className="flex items-center gap-3">
              <Icon
                icon="solar:phone-linear"
                width={18}
                className="text-[#6AB2F2]"
              />
              <Icon
                icon="solar:menu-dots-bold"
                width={18}
                className="text-[#6AB2F2]"
              />
            </div>
          </div>

          {/* Chat area */}
          <div className="h-[380px] overflow-hidden bg-[#0E1621] relative">
            {children}
          </div>

          {/* Input bar */}
          <div className="flex items-center gap-2 px-3 py-2.5 bg-[#17212B] border-t border-white/[0.06]">
            <Icon
              icon="solar:smile-circle-linear"
              width={22}
              className="text-[#6AB2F2] shrink-0"
            />
            <div className="flex-1 bg-[#242F3D] rounded-full px-3 py-1.5">
              <span className="text-[13px] text-white/30">
                메시지를 입력하세요...
              </span>
            </div>
            <Icon
              icon="solar:microphone-3-linear"
              width={22}
              className="text-[#6AB2F2] shrink-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
