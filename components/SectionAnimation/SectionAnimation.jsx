import React, { useEffect, useRef } from "react";
import s from './SectionAnimation.module.scss';

export default function SectionAnimation({ children, className, id, direction = "bottom", delay = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry], obs) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          el.classList.add(s.in);
        }, delay);
        obs.unobserve(el);
      }
    }, { threshold: 0.1, rootMargin: '0px 0px -10% 0px' });

    observer.observe(el);

    return () => observer.disconnect();
  }, [delay]);

  const directionClass = 
    direction === "left" ? s['reveal-left'] :
    direction === "right" ? s['reveal-right'] :
    s.reveal;

  return (
    <section ref={ref} className={`${directionClass} ${className || ''}`} id={id}>
      {children}
    </section>
  );
}
