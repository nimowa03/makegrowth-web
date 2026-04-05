"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface UseTypewriterOptions {
  texts: string[];
  resolution: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
  resolutionDuration?: number;
}

export function useTypewriter({
  texts,
  resolution,
  typeSpeed = 50,
  deleteSpeed = 30,
  pauseDuration = 2000,
  resolutionDuration = 5000,
}: UseTypewriterOptions) {
  const [displayText, setDisplayText] = useState("");
  const [isResolution, setIsResolution] = useState(false);
  const [isTyping, setIsTyping] = useState(true);
  const indexRef = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout>(undefined);

  const typeText = useCallback(
    (text: string, charIndex: number, onComplete: () => void) => {
      if (charIndex <= text.length) {
        setDisplayText(text.slice(0, charIndex));
        timeoutRef.current = setTimeout(
          () => typeText(text, charIndex + 1, onComplete),
          typeSpeed
        );
      } else {
        timeoutRef.current = setTimeout(onComplete, pauseDuration);
      }
    },
    [typeSpeed, pauseDuration]
  );

  const deleteText = useCallback(
    (text: string, charIndex: number, onComplete: () => void) => {
      if (charIndex >= 0) {
        setDisplayText(text.slice(0, charIndex));
        timeoutRef.current = setTimeout(
          () => deleteText(text, charIndex - 1, onComplete),
          deleteSpeed
        );
      } else {
        onComplete();
      }
    },
    [deleteSpeed]
  );

  const runCycle = useCallback(() => {
    const currentText = texts[indexRef.current];
    setIsResolution(false);
    setIsTyping(true);

    typeText(currentText, 0, () => {
      setIsTyping(false);
      deleteText(currentText, currentText.length, () => {
        indexRef.current = (indexRef.current + 1) % texts.length;

        if (indexRef.current === 0) {
          setIsResolution(true);
          setDisplayText(resolution);
          timeoutRef.current = setTimeout(runCycle, resolutionDuration);
        } else {
          runCycle();
        }
      });
    });
  }, [texts, resolution, resolutionDuration, typeText, deleteText]);

  useEffect(() => {
    runCycle();
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [runCycle]);

  return { displayText, isResolution, isTyping };
}
