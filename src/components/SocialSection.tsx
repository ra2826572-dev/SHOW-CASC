import React from 'react';
import { Instagram, Facebook, Video, ArrowUpRight, Sparkles } from 'lucide-react';
import { STORE_INFO } from '../data/storeInfo';

export const SocialSection: React.FC = () => {
  const socialChannels = [
    {
      platform: 'Instagram',
      handle: STORE_INFO.social.instagram.handle,
      description: 'New design releases, behind-the-scenes leathercraft, and styling inspiration.',
      url: STORE_INFO.social.instagram.url,
      icon: Instagram,
      accentColor: 'hover:border-pink-500/50 hover:bg-pink-950/10',
      badge: 'Official Instagram',
    },
    {
      platform: 'Facebook',
      handle: STORE_INFO.social.facebook.name,
      description: 'Store announcements, customer reviews, and Faisalabad community updates.',
      url: STORE_INFO.social.facebook.url,
      icon: Facebook,
      accentColor: 'hover:border-blue-500/50 hover:bg-blue-950/10',
      badge: 'Official Facebook',
    },
    {
      platform: 'TikTok',
      handle: STORE_INFO.social.tiktok.handle,
      description: 'Footwear unboxings, craftsmanship tests, and try-on showcases.',
      url: STORE_INFO.social.tiktok.url,
      icon: Video,
      accentColor: 'hover:border-emerald-500/50 hover:bg-emerald-950/10',
      badge: 'Official TikTok',
    },
  ];

  return (
    <section id="social-media-section" className="w-full py-16 sm:py-24 bg-[#0c0c0e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181720] border border-[#d4af37]/30 text-[#f5dfa2] text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>JOIN OUR COMMUNITY</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            FOLLOW SHOE CASA
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-2">
            Stay connected with our latest footwear arrivals and exclusive showroom moments in Faisalabad.
          </p>
        </div>

        {/* Social Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {socialChannels.map((channel, idx) => {
            const Icon = channel.icon;
            return (
              <a
                key={idx}
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-6 sm:p-8 rounded-2xl bg-[#14131a] border border-[#262432] ${channel.accentColor} shadow-lg transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#1d1b26] border border-[#302e3e] flex items-center justify-center text-[#d4af37] group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#b5b1a3] px-2.5 py-1 rounded-md bg-[#191822] border border-[#2a2938]">
                      {channel.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-[#f5dfa2] transition-colors">
                    {channel.handle}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed">
                    {channel.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#1e1d27] flex items-center justify-between text-xs font-bold text-[#d4af37] group-hover:text-white uppercase tracking-wider">
                  <span>Visit {channel.platform}</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
};
