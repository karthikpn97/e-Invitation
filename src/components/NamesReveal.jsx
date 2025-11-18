import React, { useState, useEffect, useRef } from 'react';
import { INVITE } from '../config.js';
import { motion } from 'framer-motion';
// Heart removed from this component; shown in separate banner now.

const groomVariants = {
  offscreen: { opacity: 0, x: -200 },
  onscreen: { opacity: 1, x: 0, transition: { type: 'spring', bounce: 0.25, duration: 1.1 } }
};
const brideVariants = {
  offscreen: { opacity: 0, x: 200 },
  onscreen: { opacity: 1, x: 0, transition: { type: 'spring', bounce: 0.25, duration: 1.1 } }
};

// embedded: when true, renders without outer section wrapper (for hero integration)
export default function NamesReveal({ embedded = false }) {
  const [groomDone, setGroomDone] = useState(false);
  const [brideDone, setBrideDone] = useState(false);
  const [cycle, setCycle] = useState(0); // increments each time section enters viewport
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // trigger new cycle to re-run animations
            setCycle((c) => c + 1);
          }
        });
      },
      { threshold: 0.6 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Reset completion flags whenever cycle changes so the heart reveal waits again
  useEffect(() => {
    setGroomDone(false);
    setBrideDone(false);
  }, [cycle]);

  const bothVisible = groomDone && brideDone;

  const WrapperTag = embedded ? 'div' : 'section';
  const wrapperProps = embedded
    ? { className: 'names-wrapper', style: { width: '100%' } }
    : { className: 'section names-wrapper' };

  return (
    <WrapperTag {...wrapperProps} ref={containerRef}>
      <div className={embedded ? 'names-container' : 'centered names-container'}>
        <motion.h2
          key={`groom-${cycle}`}
          className="name groom"
          initial="offscreen"
          animate="onscreen"
          variants={groomVariants}
          onAnimationComplete={() => setGroomDone(true)}
        >
          {INVITE.groomName}
        </motion.h2>
        <motion.h2
          key={`bride-${cycle}`}
          className="name bride"
          initial="offscreen"
          animate="onscreen"
          variants={brideVariants}
          onAnimationComplete={() => setBrideDone(true)}
        >
          {INVITE.brideName}
        </motion.h2>
      </div>
      {/* Unite text removed; displayed in separate WedsBanner component between sections */}
    </WrapperTag>
  );
}
