import { fadeUp } from '@/lib/animations';
import type { ProjectType } from '@/types';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export const ProjectCard = ({
  imgSrc,
  projectLink,
  tags,
  title,
}: ProjectType) => {
  return (
    <motion.div
      variants={fadeUp}
      className='relative p-4 rounded-2xl border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-800/50 transition-colors group'
    >
      <div className='aspect-video rounded-lg mb-4 overflow-hidden bg-neutral-800'>
        <img
          src={imgSrc}
          alt={title}
          className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
        />
      </div>

      <div className='flex items-start justify-between gap-4'>
        <div>
          <h3 className='text-xl font-bold mb-2'>{title}</h3>
          <div className='flex flex-wrap gap-2'>
            {tags.map((tag, i) => (
              <span
                key={i}
                className='px-2 py-1 text-xs font-medium text-neutral-400 bg-neutral-800/80 rounded-md'
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <a
          href={projectLink}
          target='_blank'
          rel='noopener noreferrer'
          className='p-2 rounded-full bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-white transition-colors shrink-0'
          aria-label={`Visit ${title}`}
        >
          <ArrowUpRight size={20} />
        </a>
      </div>
    </motion.div>
  );
};
