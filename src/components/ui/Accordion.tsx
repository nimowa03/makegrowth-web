"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  dark?: boolean;
}

function AccordionItem({ question, answer, isOpen, onToggle, dark }: AccordionItemProps) {
  return (
    <div className={cn("border-b", dark ? "border-white/10" : "border-[rgba(28,25,23,0.06)]")}>
      <button
        className="w-full flex items-center justify-between py-5 text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className={cn("font-medium text-[15px]", dark ? "text-white" : "text-[#1C1917]")}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <Icon
            icon="solar:alt-arrow-down-linear"
            width={20}
            className={cn("shrink-0 ml-4", dark ? "text-[#A8A29E]" : "text-[#57534E]")}
          />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className={cn("pb-5 text-sm leading-relaxed", dark ? "text-[#A8A29E]" : "text-[#57534E]")}>
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface AccordionProps {
  items: { question: string; answer: string }[];
  dark?: boolean;
}

export function Accordion({ items, dark }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          dark={dark}
        />
      ))}
    </div>
  );
}
