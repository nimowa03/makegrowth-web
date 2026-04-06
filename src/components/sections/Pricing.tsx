"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useInView } from "@/hooks/useInView";
import { pricingTiers } from "@/data/services";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Pricing() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <div ref={ref}>
      <div className="text-center mb-12">
        <span className="inline-block rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.15em] font-medium border border-[#E0E0E0] text-[#666] bg-transparent mb-4">
          Pricing
        </span>
        <h2 className="text-[#1A1A1A]">서비스 패키지</h2>
        <p className="mt-3 text-[#444444] max-w-lg mx-auto">
          비즈니스 규모와 니즈에 맞는 패키지를 선택하세요
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch"
      >
        {pricingTiers.map((tier, index) => {
          const isHighlighted = tier.highlight;

          return (
            <motion.div
              key={tier.name}
              variants={cardVariants}
              className={isHighlighted ? "scale-[1.03] relative z-10" : ""}
            >
              <Card
                variant="light"
                className={
                  isHighlighted ? "ring-[#1A1A1A]/20 ring-2" : ""
                }
                innerClassName="flex flex-col h-full"
              >
                {/* Highlight badge */}
                {isHighlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                    <Badge
                      variant="custom"
                      className="bg-[#1A1A1A] text-white text-xs px-3 py-1"
                    >
                      추천
                    </Badge>
                  </div>
                )}

                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-1 text-[#1A1A1A]">
                    {tier.name}
                  </h3>
                  <p className="text-sm text-[#444444]">{tier.target}</p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <span
                    className="text-2xl md:text-3xl font-extrabold text-[#1A1A1A]"
                    style={{ fontVariantNumeric: "tabular-nums" }}
                  >
                    {tier.price}
                  </span>
                </div>

                {/* Details */}
                <ul className="space-y-3 mb-8 flex-1">
                  <li className="flex items-start gap-2.5">
                    <Icon
                      icon="solar:check-circle-linear"
                      width={18}
                      className="text-[#666] mt-0.5 shrink-0"
                    />
                    <span className="text-sm text-[#444444]">
                      <span className="font-medium text-[#1A1A1A]">
                        형태:
                      </span>{" "}
                      {tier.format}
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Icon
                      icon="solar:check-circle-linear"
                      width={18}
                      className="text-[#666] mt-0.5 shrink-0"
                    />
                    <span className="text-sm text-[#444444]">
                      <span className="font-medium text-[#1A1A1A]">
                        기간:
                      </span>{" "}
                      {tier.duration}
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Icon
                      icon="solar:check-circle-linear"
                      width={18}
                      className="text-[#666] mt-0.5 shrink-0"
                    />
                    <span className="text-sm text-[#444444]">
                      <span className="font-medium text-[#1A1A1A]">
                        포함:
                      </span>{" "}
                      {tier.includes}
                    </span>
                  </li>
                </ul>

                {/* CTA */}
                {isHighlighted ? (
                  <Button
                    href="/seminar"
                    variant="primary"
                    size="lg"
                    showArrow
                    className="w-full text-center justify-center"
                  >
                    웨비나 신청하기
                  </Button>
                ) : (
                  <Button
                    href="/contact"
                    variant="secondary"
                    size="lg"
                    className="w-full text-center justify-center"
                  >
                    문의하기
                  </Button>
                )}
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
