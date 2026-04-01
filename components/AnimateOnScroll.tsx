"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

type Animation = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "fade";

interface AnimateOnScrollProps {
  children: ReactNode;
  animation?: Animation;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
  staggerChildren?: number;
}

export default function AnimateOnScroll({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 600,
  className = "",
  threshold = 0.15,
  once = true,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  const transforms: Record<Animation, string> = {
    "fade-up": "translate3d(0, 32px, 0)",
    "fade-down": "translate3d(0, -32px, 0)",
    "fade-left": "translate3d(32px, 0, 0)",
    "fade-right": "translate3d(-32px, 0, 0)",
    "zoom-in": "scale(0.95)",
    fade: "none",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "none" : transforms[animation],
        transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

interface StaggerProps {
  children: ReactNode;
  className?: string;
  animation?: Animation;
  stagger?: number;
  baseDelay?: number;
  duration?: number;
  threshold?: number;
}

export function StaggerChildren({
  children,
  className = "",
  animation = "fade-up",
  stagger = 100,
  baseDelay = 0,
  duration = 500,
  threshold = 0.1,
}: StaggerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const transforms: Record<Animation, string> = {
    "fade-up": "translate3d(0, 32px, 0)",
    "fade-down": "translate3d(0, -32px, 0)",
    "fade-left": "translate3d(32px, 0, 0)",
    "fade-right": "translate3d(-32px, 0, 0)",
    "zoom-in": "scale(0.95)",
    fade: "none",
  };

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children)
        ? children.map((child, i) => (
            <div
              key={i}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "none" : transforms[animation],
                transition: `opacity ${duration}ms ease-out ${baseDelay + i * stagger}ms, transform ${duration}ms ease-out ${baseDelay + i * stagger}ms`,
                willChange: "opacity, transform",
              }}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  );
}
