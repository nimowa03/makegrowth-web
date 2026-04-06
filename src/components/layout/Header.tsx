"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollHeader } from "@/hooks/useScrollHeader";
import { mainNav } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isScrolled = useScrollHeader();

  return (
    <>
      <header
        className={cn(
          "fixed top-4 left-1/2 -translate-x-1/2 w-max z-50 rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          isScrolled
            ? "bg-[rgba(255,255,255,0.9)] backdrop-blur-xl border border-[#E0E0E0] shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
            : "bg-[rgba(255,255,255,0.8)] backdrop-blur-xl border border-[#E0E0E0]"
        )}
      >
        <div className="flex items-center gap-1 py-2 px-2 pl-5">
          <Link
            href="/"
            className="font-bold text-lg text-[#1A1A1A] transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] mr-4"
          >
            메이크그로스
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[#666] hover:text-[#1A1A1A] transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            className="lg:hidden p-2 ml-2"
            onClick={() => setMobileOpen(true)}
            aria-label="메뉴 열기"
          >
            <Icon
              icon="solar:hamburger-menu-linear"
              width={24}
              className="text-[#1A1A1A]"
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-[#000000]/90 backdrop-blur-3xl z-50 lg:hidden"
          >
            <div className="flex flex-col h-full px-8 py-8">
              <div className="flex items-center justify-between mb-12">
                <Link
                  href="/"
                  className="font-bold text-lg text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  메이크그로스
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="닫기"
                  className="p-2"
                >
                  <Icon icon="solar:close-circle-linear" width={28} className="text-white/70" />
                </button>
              </div>

              <nav className="flex flex-col gap-2 flex-1">
                {mainNav.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      href={item.href}
                      className="text-white text-2xl font-semibold py-3 block hover:text-[#999] transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
