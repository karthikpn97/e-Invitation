import React from 'react';
import { motion } from 'framer-motion';
import img3 from '../assets/image3.jpg';
import img4 from '../assets/image4.jpg';

const images = [
  img3,
  img4
];

const itemVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.7, ease: 'easeOut' } })
};

export default function Collage() {
  return (
    <section className="section">
      <div className="centered">
        <h2>Memories & Moments</h2>
        <div className="collage-grid">
          {images.map((src, i) => (
            <motion.div
              className="collage-item"
              key={src}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={itemVariant}
            >
              <img src={src} alt={`Memory ${i + 1}`} loading="lazy" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
