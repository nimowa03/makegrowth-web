"use client";

import { useState, useRef } from "react";
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
  clickToPlay?: boolean;
  posterSrc?: string;
}

export function BrowserMockup({
  url = "makegrowth.dev",
  title,
  imageSrc,
  videoSrc,
  placeholder,
  subtext,
  className,
  clickToPlay = false,
  posterSrc,
}: BrowserMockupProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  function handlePlayClick() {
    setIsPlaying(true);
    setTimeout(() => videoRef.current?.play(), 100);
  }

  const [isPaused, setIsPaused] = useState(false);

  function toggleMute() {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  }

  function togglePlay() {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPaused(false);
      } else {
        videoRef.current.pause();
        setIsPaused(true);
      }
    }
  }
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
        {videoSrc && clickToPlay && !isPlaying ? (
          <button
            onClick={handlePlayClick}
            className="w-full h-full flex flex-col items-center justify-center cursor-pointer group/play"
            aria-label="영상 재생"
          >
            {posterSrc ? (
              <Image
                src={posterSrc}
                alt="영상 썸네일"
                fill
                className="object-cover"
              />
            ) : null}
            <div className={`${posterSrc ? "absolute inset-0 bg-black/30" : ""} flex items-center justify-center w-full h-full`}>
              <Icon
                icon="solar:play-circle-bold"
                width={64}
                className="text-white/80 group-hover/play:text-white group-hover/play:scale-110 transition-all duration-500"
              />
            </div>
          </button>
        ) : videoSrc ? (
          <div className="relative w-full h-full">
            <video
              ref={videoRef}
              src={videoSrc}
              autoPlay={!clickToPlay}
              muted
              loop
              playsInline
              controls={clickToPlay}
              className="w-full h-full object-cover"
            />
            {!clickToPlay && (
              <div className="absolute bottom-4 right-4 flex items-center gap-2">
                <button
                  onClick={togglePlay}
                  className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white/80 hover:text-white hover:bg-black/70 transition-all duration-300 cursor-pointer"
                  aria-label={isPaused ? "재생" : "일시정지"}
                >
                  <Icon icon={isPaused ? "solar:play-bold" : "solar:pause-bold"} width={18} />
                </button>
                <button
                  onClick={toggleMute}
                  className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white/80 hover:text-white hover:bg-black/70 transition-all duration-300 cursor-pointer"
                  aria-label={isMuted ? "소리 켜기" : "소리 끄기"}
                >
                  <Icon icon={isMuted ? "solar:volume-cross-bold" : "solar:volume-loud-bold"} width={18} />
                </button>
              </div>
            )}
          </div>
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
