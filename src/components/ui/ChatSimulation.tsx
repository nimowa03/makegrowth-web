"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import type { ChatMessage } from "@/data/botDemo";
import { supanovaEase } from "@/lib/motionVariants";

interface ChatSimulationProps {
  messages: ChatMessage[];
  autoPlay?: boolean;
  loop?: boolean;
  onComplete?: () => void;
  className?: string;
}

/* ── Typing dots indicator ── */
function TypingDots() {
  return (
    <div className="flex items-start gap-2 px-4 py-1">
      <div className="w-7 h-7 rounded-full bg-[#1A1A1A] flex items-center justify-center shrink-0 mt-0.5">
        <Icon icon="solar:bot-minimalistic-bold" width={14} className="text-white/70" />
      </div>
      <div className="bg-[#182533] rounded-2xl rounded-tl-sm px-3 py-2.5 flex gap-1">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="w-[6px] h-[6px] rounded-full bg-white/40"
            animate={{ y: [0, -4, 0] }}
            transition={{
              duration: 0.5,
              delay: i * 0.15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}

/* ── Chat bubble ── */
function ChatBubble({
  message,
  index,
}: {
  message: ChatMessage;
  index: number;
}) {
  const isBot = message.role === "bot";

  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.35, ease: supanovaEase }}
      className={`flex items-start gap-2 px-4 py-1 ${
        isBot ? "" : "flex-row-reverse"
      }`}
    >
      {isBot && (
        <div className="w-7 h-7 rounded-full bg-[#1A1A1A] flex items-center justify-center shrink-0 mt-0.5">
          <Icon icon="solar:bot-minimalistic-bold" width={14} className="text-white/70" />
        </div>
      )}
      <div
        className={`max-w-[85%] rounded-2xl px-3 py-2 ${
          isBot
            ? "bg-[#182533] rounded-tl-sm"
            : "bg-[#2B5278] rounded-tr-sm"
        }`}
      >
        <p className="text-[12.5px] leading-[1.6] text-white/90 whitespace-pre-line">
          {message.text}
        </p>
      </div>
    </motion.div>
  );
}

/* ── Main component ── */
export function ChatSimulation({
  messages,
  autoPlay = true,
  loop = false,
  onComplete,
  className,
}: ChatSimulationProps) {
  const [visibleCount, setVisibleCount] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const clearTimers = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  /* Auto-scroll to bottom */
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [visibleCount, isTyping]);

  /* Message playback engine */
  useEffect(() => {
    if (!autoPlay || messages.length === 0) return;

    setVisibleCount(0);
    setIsTyping(false);

    let currentIndex = 0;

    function showNext() {
      if (currentIndex >= messages.length) {
        // All messages shown
        if (loop) {
          timeoutRef.current = setTimeout(() => {
            setVisibleCount(0);
            setIsTyping(false);
            currentIndex = 0;
            timeoutRef.current = setTimeout(showNext, 600);
          }, 3500);
        } else {
          onComplete?.();
        }
        return;
      }

      const msg = messages[currentIndex];
      const baseDelay = msg.delay ?? 800;

      if (msg.role === "bot") {
        // Show typing indicator first
        setIsTyping(true);
        timeoutRef.current = setTimeout(() => {
          setIsTyping(false);
          setVisibleCount((c) => c + 1);
          currentIndex++;
          timeoutRef.current = setTimeout(showNext, 500);
        }, Math.min(baseDelay, 1200));
      } else {
        // User messages appear after delay
        timeoutRef.current = setTimeout(() => {
          setVisibleCount((c) => c + 1);
          currentIndex++;
          timeoutRef.current = setTimeout(showNext, 600);
        }, baseDelay);
      }
    }

    // Start first message after initial delay
    timeoutRef.current = setTimeout(showNext, 400);

    return clearTimers;
  }, [messages, autoPlay, loop, onComplete, clearTimers]);

  const visibleMessages = messages.slice(0, visibleCount);

  return (
    <div
      ref={scrollRef}
      className={`h-full overflow-y-auto py-3 flex flex-col ${className ?? ""}`}
    >
      <AnimatePresence mode="popLayout">
        {visibleMessages.map((msg, i) => (
          <ChatBubble key={`${msg.role}-${i}`} message={msg} index={i} />
        ))}
      </AnimatePresence>
      {isTyping && <TypingDots />}
    </div>
  );
}
