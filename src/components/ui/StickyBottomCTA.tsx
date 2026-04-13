"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function StickyBottomCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > window.innerHeight);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-xl border-t border-[#E0E0E0] px-4 sm:px-6 py-3 md:py-4"
        >
          <div className="max-w-content mx-auto flex items-center justify-between gap-4">
            <p className="text-[#1A1A1A] text-sm md:text-base font-semibold hidden sm:block" style={{ wordBreak: "keep-all" }}>
              내 셀러 루틴, AI로 얼마나 줄일 수 있을까?
            </p>
            <Button href="/diagnosis" size="sm" showArrow>
              무료 진단하기
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
