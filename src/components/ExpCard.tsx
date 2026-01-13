import type { ExperienceType } from '@/types';

export const ExpCard = ({ experience }: { experience: ExperienceType }) => {
  return (
    <div className='group relative w-full rounded-2xl border border-white/10 bg-neutral-900/50 p-6 backdrop-blur-md transition-all duration-300 hover:border-primary/30 hover:bg-neutral-800/50 hover:shadow-lg hover:shadow-primary/5'>
      {/* Hover Gradient Effect */}
      <div className='absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100' />

      <div className='flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6'>
        {/* Timeline Dot & Line Indicator */}
        <div className='hidden sm:flex flex-col items-center'>
          <div className='flex size-10 items-center justify-center rounded-full bg-neutral-800/50 border border-white/5 group-hover:border-primary/20 group-hover:bg-primary/10 transition-colors duration-300'>
            <div className='size-2.5 rounded-full bg-neutral-500 group-hover:bg-primary transition-colors duration-300' />
          </div>
          {/* Decorative line could be added here if this was part of a continuous vertical list */}
        </div>

        <div className='flex-1 space-y-2'>
          <div className='flex flex-col justify-between gap-2 md:flex-row md:items-center'>
            <h3 className='text-xl font-semibold text-white group-hover:text-primary transition-colors duration-300'>
              {experience.title}
            </h3>
            <span className='shrink-0 w-fit rounded-full border border-white/5 bg-white/5 px-3 py-1 text-xs font-medium text-neutral-400 backdrop-blur-sm group-hover:border-primary/10 group-hover:text-primary/80 transition-colors duration-300'>
              {experience.year}
            </span>
          </div>

          <p className='text-sm font-medium text-neutral-300'>
            at <span className='text-primary/90'>{experience.institute}</span>
          </p>

          <p className='max-w-2xl text-sm leading-relaxed text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300'>
            {experience.desc}
          </p>
        </div>
      </div>
    </div>
  );
};
