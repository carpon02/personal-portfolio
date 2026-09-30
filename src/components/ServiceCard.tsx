import type { ServiceType } from '@/types';

export const ServiceCard = ({
  service,
  accentColor = 'green',
}: {
  service: ServiceType;
  accentColor?: 'green' | 'cyan';
}) => {
  const colorClasses =
    accentColor === 'cyan'
      ? {
          glow: 'bg-cyan-500/20 group-hover:bg-cyan-500/30',
          glowSecondary: 'bg-cyan-500/10 group-hover:bg-cyan-500/20',
          border: 'hover:border-cyan-500/50',
          line: 'via-cyan-500/50',
          shadow: 'group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]',
        }
      : {
          glow: 'bg-green-500/20 group-hover:bg-green-500/30',
          glowSecondary: 'bg-green-500/10 group-hover:bg-green-500/20',
          border: 'hover:border-green-500/50',
          line: 'via-green-500/50',
          shadow: 'group-hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]',
        };

  return (
    <div
      className={`relative p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 group ${colorClasses.border} hover:bg-neutral-900/80 overflow-hidden h-full flex flex-col justify-between`}
    >
      {/* Gradient Glow Effect */}
      <div
        className={`absolute -right-10 -top-10 w-24 h-24 sm:w-32 sm:h-32 ${colorClasses.glow} blur-3xl rounded-full transition-colors`}
      />
      <div
        className={`absolute -left-10 -bottom-10 w-24 h-24 sm:w-32 sm:h-32 ${colorClasses.glowSecondary} blur-3xl rounded-full transition-colors`}
      />

      <div className='relative z-10 flex items-center justify-between mb-6 sm:mb-8'>
        <div
          className={`w-12 h-12 sm:w-14 sm:h-14 grid place-content-center bg-white/5 rounded-xl border border-white/10 group-hover:scale-110 ${colorClasses.shadow} transition-all duration-300`}
        >
          {service.icon}
        </div>

        <span className='text-3xl sm:text-4xl font-black bg-gradient-to-b from-white/20 to-white/5 bg-clip-text text-transparent group-hover:from-white/40 group-hover:to-white/10 transition-all'>
          {service.projects}
        </span>
      </div>

      <div>
        <h3 className='relative z-10 text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white group-hover:pl-2 transition-all duration-300'>
          {service.title}
        </h3>
        <p className='relative z-10 text-neutral-400 text-sm leading-relaxed tracking-wide group-hover:text-neutral-300 transition-colors'>
          {service.desc}
        </p>
      </div>

      {/* Decorative Line */}
      <div
        className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent ${colorClasses.line} to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out`}
      />
    </div>
  );
};
