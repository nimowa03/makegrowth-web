"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function StickyBottomCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const heroCta = document.getElementById("hero-cta");
    const footer = document.querySelector("footer");
    if (!heroCta) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    const footerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(false);
      },
      { threshold: 0 }
    );

    observer.observe(heroCta);
    if (footer) footerObserver.observe(footer);

    return () => {
      observer.disconnect();
      footerObserver.disconnect();
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-[rgba(250,249,247,0.9)] backdrop-blur-lg border-t border-[rgba(28,25,23,0.06)] shadow-[0_-4px_12px_rgba(28,25,23,0.06)] lg:hidden"
        >
          <Button href="/seminar" className="w-full text-center">
            세미나 신청하기
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
