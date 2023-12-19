"use client";
import React, { useRef, useEffect, useState, ReactNode } from "react";

const AnimateOnScrollContainer = ({ children }: { children: ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`${
        isVisible ? "animate-scroll-show" : "animate-scroll-hidden"
      }`}
    >
      {children}
    </div>
  );
};

export default AnimateOnScrollContainer;
