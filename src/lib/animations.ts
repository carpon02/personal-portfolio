/**
 * @copyright 2025 Mukhtar Digital Services
 * @license Apache-2.0
 */

import type { Variants } from 'framer-motion';

// Container variant for staggering children
export const staggerContainer = (delay = 0): Variants => ({
  hidden: {},
  visible: {
    transition: {
      delayChildren: delay, // 👈 add per-section control
      staggerChildren: 0.4,
    },
  },
});

// Child item fade-up animation
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Fade in from left
export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

// Fade in from right
export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

// Scale up with fade
export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

// Glow pulse for decorative elements
export const glowPulse: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: [0.3, 0.6, 0.3],
    transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
  },
};