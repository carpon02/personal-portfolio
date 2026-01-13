import { Button } from '@/components/ui/button';
import { socialLinks } from '@/constants';
import { motion } from 'motion/react';

export const Profile = () => {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className='lg:sticky lg:top-8 w-full lg:w-96 rounded-3xl border border-white/10 bg-neutral-900/50 p-8 backdrop-blur-xl shadow-2xl shadow-black/10 m-6 lg:m-0'
    >
      <div className='flex flex-col gap-6'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-4xl font-bold bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent'>
            Mukhtar
          </h1>
          <p className='text-sm font-medium text-neutral-400'>
            MERN Stack Developer & Shopify Developer
          </p>
        </div>

        <div className='relative group overflow-hidden rounded-2xl border border-white/5'>
          <img
            src='/profile.png'
            alt='Mukhtar'
            className='aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
        </div>

        <div className='space-y-4'>
          <div className='space-y-1'>
            <p className='text-xs font-semibold uppercase tracking-wider text-neutral-500'>
              Specialization
            </p>
            <p className='text-base text-neutral-200'>
              MERN Stack Developer & Shopify Developer
            </p>
          </div>

          <div className='space-y-1'>
            <p className='text-xs font-semibold uppercase tracking-wider text-neutral-500'>
              Based in
            </p>
            <p className='text-base text-neutral-200'>Nigeria, Ibadan</p>
          </div>
        </div>

        <div className='flex flex-wrap gap-3'>
          {socialLinks.map((social, i) => {
            const Icon = social.icon;
            return (
              <a
                href={social.link}
                key={i}
                className='group flex items-center justify-center rounded-full border border-white/5 bg-white/5 p-3 text-neutral-400 transition-all duration-300 hover:border-primary/20 hover:bg-primary/10 hover:text-primary'
              >
                <Icon
                  size={20}
                  className='transition-transform group-hover:scale-110'
                />
              </a>
            );
          })}
        </div>

        <Button
          className='w-full rounded-xl bg-primary py-6 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] hover:shadow-primary/30 active:scale-[0.98]'
          size='lg'
        >
          Let's Work!
        </Button>
      </div>
    </motion.aside>
  );
};
