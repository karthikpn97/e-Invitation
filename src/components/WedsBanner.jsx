import React from 'react';
import { INVITE } from '../config.js';
import { motion } from 'framer-motion';
import Heart from './Heart.jsx';

// Displays the union text and heart between hero and collage
export default function WedsBanner() {
  return (
    <section className="section weds-banner" aria-label="Union Banner" style={{ padding: '2.5rem 0 2rem' }}>
      <div className="centered" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}
        >
          <div className="unite-text weds-unite" style={{ color: 'var(--text-dark)', textShadow: 'none' }}>
            <span className="weds-name weds-groom" style={{ fontWeight: 600 }}>{INVITE.groomName}</span>
            <span className="weds-name weds-weds" aria-hidden="true">&nbsp;Weds&nbsp;</span>
            <span className="weds-name weds-bride" style={{ fontWeight: 600 }}>{INVITE.brideName}</span>
            <Heart />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
