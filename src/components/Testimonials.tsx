import { testimonials } from '@/constants';
import { fadeUp } from '@/lib/animations';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  QuoteIcon,
  SparkleIcon,
  StarIcon,
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

export const Testimonials = () => {
  const [curSlide, setCurSlide] = useState(0);

  const next = () =>
    setCurSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  const prev = () =>
    setCurSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ amount: 0.3, once: true }}
      variants={fadeUp}
      className='py-20 relative overflow-hidden'
      id='testimonials'
    >
      {/* Background decorations */}
      <div className='absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] -z-10' />
      <div className='absolute bottom-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] -z-10' />

      <div className='container mx-auto px-6'>
        <div className='flex flex-col items-center mb-16'>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6'
          >
            <SparkleIcon
              size={14}
              className='text-yellow-400'
            />
            <span className='text-sm font-medium bg-linear-to-r from-white to-white/60 bg-clip-text text-transparent'>
              Client Reviews
            </span>
          </motion.div>

          <h2 className='text-4xl md:text-5xl font-bold text-center mb-6 bg-linear-to-br from-white via-white/90 to-white/50 bg-clip-text text-transparent'>
            What Clients Say
          </h2>
          <p className='text-neutral-400 text-center max-w-lg'>
            Don't just take my word for it. Here's what people I've worked with
            have to say about my work.
          </p>
        </div>

        <div className='relative max-w-4xl mx-auto'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={curSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className='relative z-10'
            >
              <div className='p-1 rounded-3xl bg-linear-to-b from-white/10 to-white/5'>
                <div className='bg-neutral-900/80 backdrop-blur-xl border border-white/5 rounded-[22px] p-8 md:p-12 shadow-2xl relative overflow-hidden'>
                  {/* Decorative quote */}
                  <QuoteIcon className='absolute top-8 right-8 text-white/5 size-24 rotate-180' />

                  <div className='flex flex-col md:flex-row gap-10 items-center md:items-start relative z-10'>
                    <div className='shrink-0'>
                      <div className='size-24 md:size-32 rounded-full p-1 bg-linear-to-br from-purple-500/50 to-cyan-500/50'>
                        <img
                          src={testimonials[curSlide].image}
                          className='size-full rounded-full object-cover border-4 border-neutral-900'
                          alt={testimonials[curSlide].name}
                        />
                      </div>
                    </div>

                    <div className='flex-1 text-center md:text-left space-y-6'>
                      <div className='flex justify-center md:justify-start gap-1 text-yellow-400'>
                        {Array.from({ length: 5 }).map((_, index) => (
                          <StarIcon
                            key={index}
                            size={18}
                            fill='currentColor'
                            className='drop-shadow-lg'
                          />
                        ))}
                      </div>

                      <p className='text-lg md:text-xl text-neutral-300 leading-relaxed italic'>
                        "{testimonials[curSlide].text}"
                      </p>

                      <div>
                        <h3 className='text-xl font-bold text-white mb-1'>
                          {testimonials[curSlide].name}
                        </h3>
                        <div className='flex flex-col md:flex-row items-center md:items-start md:gap-3'>
                          <p className='text-sm text-cyan-400 font-medium'>
                            {testimonials[curSlide].role}
                          </p>
                          {testimonials[curSlide].link && (
                            <>
                              <span className='hidden md:block text-neutral-600'>
                                •
                              </span>
                              <a
                                href={testimonials[curSlide].link}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-sm text-neutral-500 hover:text-white transition-colors duration-300 border-b border-transparent hover:border-white/20'
                              >
                                View Project
                              </a>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className='absolute top-1/2 -translate-y-1/2 -left-4 md:-left-16 z-20 hidden md:block'>
            <button
              onClick={prev}
              className='size-12 flex items-center justify-center rounded-full border border-white/10 bg-neutral-900/50 backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all duration-300 group'
              aria-label='Previous testimonial'
            >
              <ChevronLeftIcon
                size={20}
                className='text-neutral-400 group-hover:text-white transition-colors'
              />
            </button>
          </div>

          <div className='absolute top-1/2 -translate-y-1/2 -right-4 md:-right-16 z-20 hidden md:block'>
            <button
              onClick={next}
              className='size-12 flex items-center justify-center rounded-full border border-white/10 bg-neutral-900/50 backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all duration-300 group'
              aria-label='Next testimonial'
            >
              <ChevronRightIcon
                size={20}
                className='text-neutral-400 group-hover:text-white transition-colors'
              />
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className='flex justify-center gap-4 mt-8 md:hidden'>
            <button
              onClick={prev}
              className='size-10 flex items-center justify-center rounded-full border border-white/10 bg-neutral-900/50 backdrop-blur-md hover:bg-neutral-800 transition'
            >
              <ChevronLeftIcon size={18} />
            </button>
            <button
              onClick={next}
              className='size-10 flex items-center justify-center rounded-full border border-white/10 bg-neutral-900/50 backdrop-blur-md hover:bg-neutral-800 transition'
            >
              <ChevronRightIcon size={18} />
            </button>
          </div>

          {/* Dots Indicators */}
          <div className='flex justify-center gap-2 mt-8'>
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurSlide(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === curSlide
                    ? 'w-8 bg-cyan-400'
                    : 'w-2 bg-neutral-700 hover:bg-neutral-600'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};
