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
    <section className="relative py-24 md:py-32 lg:py-40 px-6 md:px-8 bg-gradient-to-br from-[#0F172A] via-[#1A1A1A] to-[#0F172A]">
      <div ref={ref} className="max-w-4xl mx-auto">
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-white/50 text-center text-sm md:text-base mb-8"
        >
          메이크그로스가 뭔지, 2분이면 알 수 있습니다
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
            className="border-white/10 shadow-[0_8px_60px_rgba(0,0,0,0.3)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
