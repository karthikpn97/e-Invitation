import React from 'react';
import { motion } from 'framer-motion';

export default function Heart({ size = 50 }) {
  return (
    <motion.div
      className="heart"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: [0, 1.15, 1], opacity: 1 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
    >
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ scale: 0.9 }}
        animate={{ scale: [0.9, 1.1, 1] }}
        transition={{ repeat: Infinity, repeatType: 'reverse', duration: 2.2 }}
      >
        <path
          d="M12 21s-1.45-1.32-3.2-2.92C6.4 15.6 3 12.55 3 8.75 3 6 5 4 7.5 4c1.54 0 3.04.99 3.78 2.17h.01C12.46 4.99 13.96 4 15.5 4 18 4 20 6 20 8.75c0 3.8-3.4 6.85-5.8 9.33C13.45 19.68 12 21 12 21z"
          fill="var(--accent)"
          stroke="var(--accent-alt)"
          strokeWidth="0.5"
        />
      </motion.svg>
    </motion.div>
  );
}
