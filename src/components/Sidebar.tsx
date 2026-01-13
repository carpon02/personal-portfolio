import { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';
import { MenuIcon } from 'lucide-react';
import { navLinks, socialLinks } from '@/constants';
import { cn } from '@/lib/utils';

export const Sidebar = () => {
  const [active, setActive] = useState('#hero');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Sheet
        open={isOpen}
        onOpenChange={setIsOpen}
      >
        <SheetTrigger asChild>
          <Button
            variant='ghost'
            size='icon'
            className='fixed right-4 top-4 z-50 rounded-full border border-white/10 bg-neutral-900/50 text-white backdrop-blur-md transition-all hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/20 lg:hidden'
          >
            <MenuIcon size={24} />
          </Button>
        </SheetTrigger>
        <SheetContent
          side='right'
          className='w-80 border-l border-white/10 bg-neutral-900/90 p-0 text-white backdrop-blur-xl sm:w-96'
        >
          <div className='flex h-full flex-col px-8 py-10'>
            <SheetTitle className='mb-8 text-2xl font-bold text-white'>
              Menu
            </SheetTitle>

            <nav className='flex flex-col gap-6'>
              {navLinks.map((link, i) => {
                const Icon = link.icon;
                const isActive = active === link.link;

                return (
                  <motion.a
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    href={link.link}
                    key={link.label}
                    onClick={() => {
                      setActive(link.link);
                      setIsOpen(false);
                    }}
                    className={cn(
                      'group flex items-center gap-4 rounded-xl py-2 text-lg font-medium text-neutral-400 transition-colors duration-300 hover:text-white',
                      isActive && 'text-primary',
                    )}
                  >
                    <div
                      className={cn(
                        'flex size-10 items-center justify-center rounded-lg border border-white/5 bg-white/5 transition-colors group-hover:border-white/10 group-hover:bg-white/10',
                        isActive &&
                          'border-primary/20 bg-primary/10 text-primary',
                      )}
                    >
                      <Icon size={20} />
                    </div>
                    <span>{link.label}</span>
                  </motion.a>
                );
              })}
            </nav>

            <div className='mt-auto'>
              <p className='mb-4 text-sm font-medium text-neutral-500 uppercase tracking-wider'>
                Socials
              </p>

              <div className='flex gap-4'>
                {socialLinks.map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + i * 0.05 }}
                      href={social.link}
                      key={i}
                      className='flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-neutral-400 transition-all duration-300 hover:border-primary/30 hover:bg-primary/10 hover:text-primary hover:scale-110'
                    >
                      <Icon size={18} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};
