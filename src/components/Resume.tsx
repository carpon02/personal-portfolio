import { motion } from 'motion/react';
import { fadeUp, staggerContainer } from '../lib/animations';
import { SectionHeader } from './SectionHeader';
import { education, experience, tools } from '@/constants';
import { ExpCard } from '@/components/ExpCard';
import { ToolCard } from '@/components/ToolCard';

export const Resume = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ amount: 0.1, once: true }}
      variants={staggerContainer(0)}
      className='py-24 relative'
      id='resume'
    >
      <div className='container mx-auto px-4'>
        <SectionHeader
          title='My professional journey'
          subtitle='Resume'
        />

        <div className='mt-20 grid gap-16 lg:grid-cols-[1fr_2fr]'>
          {/* Left Column: Description */}
          <motion.div
            variants={fadeUp}
            className='space-y-8 sticky top-24 self-start'
          >
            <h2 className='text-4xl font-bold bg-linear-to-br from-white to-neutral-500 bg-clip-text text-transparent'>
              Education &<br />
              Experience
            </h2>
            <p className='text-neutral-400 leading-relaxed text-lg max-w-md'>
              A timeline of my academic background and professional career,
              highlighting the milestones that have shaped my skills in software
              engineering and digital commerce.
            </p>
          </motion.div>

          {/* Right Column: Cards */}
          <div className='relative pl-0 sm:pl-8'>
            {/* Vertical Timeline Line (Desktop only) */}
            <div className='absolute left-5 top-4 bottom-4 w-px bg-linear-to-b from-white/20 via-white/5 to-transparent hidden sm:block' />

            <motion.div
              variants={staggerContainer(0.2)}
              className='flex flex-col gap-10'
            >
              {/* Education Section */}
              <motion.div
                variants={staggerContainer(0.1)}
                className='flex flex-col gap-4'
              >
                <h3 className='text-xl font-semibold text-white/90 pl-4 border-l-2 border-primary/50'>
                  Education
                </h3>
                {education.map((edu, i) => (
                  <motion.div
                    variants={fadeUp}
                    key={`edu-${i}`}
                    className='relative z-10'
                  >
                    <ExpCard experience={edu} />
                  </motion.div>
                ))}
              </motion.div>

              {/* Experience Section */}
              <motion.div
                variants={staggerContainer(0.1)}
                className='flex flex-col gap-4 pt-6'
              >
                <h3 className='text-xl font-semibold text-white/90 pl-4 border-l-2 border-primary/50'>
                  Experience
                </h3>
                {experience.map((exp, i) => (
                  <motion.div
                    variants={fadeUp}
                    key={`exp-${i}`}
                    className='relative z-10'
                  >
                    <ExpCard experience={exp} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className='mt-32'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold bg-linear-to-b from-white to-white/60 bg-clip-text text-transparent mb-4'>
              My Tech Stack
            </h2>
            <p className='text-neutral-400'>
              The tools I use to bring ideas to life
            </p>
          </div>

          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: 0.2, once: true }}
            variants={staggerContainer(0.1)}
            className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'
          >
            {tools.map((tool, i) => (
              <motion.div
                variants={fadeUp}
                key={i}
              >
                <ToolCard tool={tool} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
