import { navLinks } from '@/constants';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export const FloatingMenu = () => {
  const [active, setActive] = useState('#hero');
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className='fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-4 rounded-full border border-white/10 bg-neutral-900/40 p-3 backdrop-blur-xl shadow-xl shadow-black/20 lg:flex'>
      {navLinks.map((link) => {
        const Icon = link.icon;
        const isActive = active === link.link;

        return (
          <a
            href={link.link}
            key={link.label}
            onClick={() => setActive(link.link)}
            onMouseEnter={() => setHovered(link.label)}
            onMouseLeave={() => setHovered(null)}
            className={cn(
              'relative flex items-center justify-center rounded-full p-3 text-neutral-400 transition-all duration-300 hover:text-white',
              isActive && 'bg-primary text-white shadow-lg shadow-primary/20',
            )}
          >
            <Icon className='size-5 relative z-10' />

            {/* Tooltip Label */}
            <AnimatePresence>
              {hovered === link.label && (
                <motion.span
                  initial={{ opacity: 0, x: 20, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 10, scale: 0.9 }}
                  className='absolute right-full mr-4 rounded-lg border border-white/10 bg-neutral-900/80 px-3 py-1.5 text-sm font-medium text-white backdrop-blur-md whitespace-nowrap'
                >
                  {link.label}
                </motion.span>
              )}
            </AnimatePresence>

            {/* Active Indicator Pulse */}
            {isActive && (
              <motion.div
                layoutId='active-pill'
                className='absolute inset-0 rounded-full bg-primary'
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </a>
        );
      })}
    </div>
  );
};
