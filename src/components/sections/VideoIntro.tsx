"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { BrowserMockup } from "@/components/ui/BrowserMockup";
import { fadeInUp, scaleUp } from "@/lib/motionVariants";

const HAS_VIDEO = true;
const HAS_GIFS = false;
const VIDEO_SRC = "/videos/makegrowth-intro.mp4";
const POSTER_SRC = "/videos/intro-thumbnail.jpg";

export function VideoIntro() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  if (!HAS_VIDEO && !HAS_GIFS) return null;

  return (
    <section className="relative py-16 md:py-24 lg:py-28 px-6 md:px-8 bg-gradient-to-br from-[#0F172A] via-[#1A1A1A] to-[#0F172A]">
      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-white/60 text-center text-lg md:text-xl font-semibold mb-3"
        >
          이 영상 하나로 충분합니다
        </motion.p>
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-white/60 text-center text-base mb-10"
        >
          외주 없이 돌아가는 구조, 직접 확인하세요
        </motion.p>

        <motion.div
          variants={scaleUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <BrowserMockup
            videoSrc={VIDEO_SRC}
            posterSrc={POSTER_SRC}
            clickToPlay
            url="makegrowth.dev"
            className="border-white/10 shadow-[0_12px_80px_rgba(0,0,0,0.4)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
