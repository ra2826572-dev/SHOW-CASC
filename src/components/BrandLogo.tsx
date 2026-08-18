import React from 'react';
import { SHOE_CASA_IMAGES } from '../assets/images';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
  variant?: 'emblem' | 'full';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  showText = true,
  className = '',
  variant = 'full'
}) => {
  const sizeMap = {
    sm: { imgSize: 'w-9 h-9', title: 'text-base sm:text-lg', sub: 'text-[8px]', track: 'tracking-[0.15em]' },
    md: { imgSize: 'w-11 h-11', title: 'text-lg sm:text-xl', sub: 'text-[9px]', track: 'tracking-[0.18em]' },
    lg: { imgSize: 'w-16 h-16', title: 'text-2xl sm:text-3xl', sub: 'text-[11px]', track: 'tracking-[0.2em]' },
    xl: { imgSize: 'w-24 h-24 sm:w-28 sm:h-28', title: 'text-3xl sm:text-4xl', sub: 'text-xs', track: 'tracking-[0.25em]' },
  };

  const config = sizeMap[size];

  if (variant === 'emblem') {
    return (
      <div className={`relative rounded-full p-0.5 bg-gradient-to-b from-[#e6ca65] via-[#a38029] to-[#42330e] shadow-lg shadow-black/60 shrink-0 ${config.imgSize} ${className}`}>
        <div className="w-full h-full rounded-full overflow-hidden bg-black flex items-center justify-center border border-[#1f1d18]">
          <img
            src={SHOE_CASA_IMAGES.officialLogo}
            alt="SHOE CASA Official Emblem - Grand Regent Mall Faisalabad"
            className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Golden Circular Seal Emblem */}
      <div className={`relative rounded-full p-0.5 bg-gradient-to-b from-[#e6ca65] via-[#a38029] to-[#42330e] shadow-md shrink-0 ${config.imgSize} group-hover:scale-105 transition-transform duration-300`}>
        <div className="w-full h-full rounded-full overflow-hidden bg-black flex items-center justify-center border border-[#1f1d18]">
          <img
            src={SHOE_CASA_IMAGES.officialLogo}
            alt="SHOE CASA Logo"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {showText && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5">
            <span className={`font-serif font-bold text-white group-hover:text-[#f5dfa2] transition-colors leading-tight ${config.title} ${config.track}`}>
              SHOE CASA
            </span>
          </div>
          <span className={`text-[#d4af37] font-sans font-semibold uppercase tracking-[0.2em] block ${config.sub}`}>
            L&apos;ARTSDU CUIR
          </span>
          <span className="text-[8px] sm:text-[9px] tracking-[0.15em] text-neutral-400 uppercase hidden sm:block">
            Grand Regent Mall • Faisalabad
          </span>
        </div>
      )}
    </div>
  );
};
