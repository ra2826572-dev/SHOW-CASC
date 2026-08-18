import React from 'react';
import { Crown, Sparkles, Tag, MessageCircle, CheckCircle2 } from 'lucide-react';
import { STORE_INFO } from '../data/storeInfo';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: Crown,
      title: 'Premium Quality',
      description: 'Carefully selected footwear with attention to quality, authentic hides, and long-lasting soles.',
      detail: '100% Genuine Leather & Hand-Burnished Details',
    },
    {
      icon: Sparkles,
      title: 'Exclusive Designs',
      description: 'Stylish designs for modern customers, bridging heritage elegance with contemporary poise.',
      detail: 'Tailored silhouettes for work, weddings & daily wear',
    },
    {
      icon: Tag,
      title: 'Affordable Prices',
      description: 'Premium-looking footwear at competitive prices without middleman markups.',
      detail: 'Direct workshop-to-customer pricing in PKR',
    },
    {
      icon: MessageCircle,
      title: 'Easy Ordering',
      description: 'Simple online ordering and instant direct WhatsApp support for sizing and questions.',
      detail: `Direct assistance at ${STORE_INFO.phoneDisplay}`,
    },
  ];

  return (
    <section id="why-choose-us-section" className="w-full py-16 sm:py-24 bg-[#0a0a0c] border-y border-[#18171f] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181720] border border-[#d4af37]/30 text-[#f5dfa2] text-xs font-semibold uppercase tracking-widest mb-3">
            <Crown className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>THE SHOE CASA PROMISE</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            WHY CHOOSE SHOE CASA
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-2">
            Elevating Pakistani footwear standards from our boutique in Regent Mall, Faisalabad.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group relative p-6 sm:p-7 rounded-2xl bg-[#121117] border border-[#23212c] hover:border-[#d4af37]/60 hover:bg-[#16151f] shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Circle */}
                  <div className="w-13 h-13 rounded-xl bg-gradient-to-br from-[#1d1b26] to-[#14131b] border border-[#2f2d3c] group-hover:border-[#d4af37]/50 flex items-center justify-center text-[#d4af37] mb-5 group-hover:scale-110 transition-transform shadow-inner">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#f5dfa2] transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-neutral-400 mt-2.5 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Sub-detail pill */}
                <div className="pt-5 mt-4 border-t border-[#1d1c25] flex items-center gap-2 text-[11px] font-medium text-[#c4c0b4]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                  <span>{feature.detail}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
