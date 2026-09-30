import { fadeUp } from '@/lib/animations';
import type { ProjectType } from '@/types';
import { motion } from 'motion/react';
import { ArrowUpRight, Github } from 'lucide-react';

export const ProjectCard = ({
  imgSrc,
  projectLink,
  tags,
  title,
  category,
  description,
}: ProjectType) => {
  const isGithub = projectLink.includes('github.com');
  const categoryLabel = category === 'fullstack' ? 'Full Stack' : 'Shopify';
  const categoryColor =
    category === 'fullstack'
      ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
      : 'bg-green-500/10 text-green-400 border-green-500/20';

  return (
    <motion.div
      variants={fadeUp}
      className='relative p-4 rounded-2xl border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-800/50 transition-all duration-300 group hover:border-neutral-700 hover:-translate-y-1'
    >
      {/* Category Badge */}
      <div
        className={`absolute top-6 left-6 z-20 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-lg border backdrop-blur-md ${categoryColor}`}
      >
        {categoryLabel}
      </div>

      <div className='aspect-video rounded-lg mb-4 overflow-hidden bg-neutral-800 relative'>
        <img
          src={imgSrc}
          alt={title}
          className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
        />
        {/* Hover overlay with description */}
        <div className='absolute inset-0 bg-black/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center p-6'>
          <p className='text-sm text-neutral-300 text-center leading-relaxed'>
            {description}
          </p>
        </div>
      </div>

      <div className='flex items-start justify-between gap-4'>
        <div>
          <h3 className='text-xl font-bold mb-2 group-hover:text-white transition-colors'>
            {title}
          </h3>
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
          {isGithub ? <Github size={20} /> : <ArrowUpRight size={20} />}
        </a>
      </div>
    </motion.div>
  );
};
