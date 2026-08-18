import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Truck, RotateCcw, MessageCircle } from 'lucide-react';
import { STORE_INFO } from '../data/storeInfo';
import { SHOE_CASA_IMAGES } from '../assets/images';

interface HeroProps {
  onShopCollection: () => void;
  onExploreNewArrivals: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onShopCollection,
  onExploreNewArrivals,
}) => {
  return (
    <section id="hero-section" className="relative w-full overflow-hidden bg-[#0c0c0e] py-8 sm:py-12 lg:py-16">
      {/* Subtle Background Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4af37]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-24 right-0 w-96 h-96 bg-[#8c6d1f]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Copy */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18171d] border border-[#d4af37]/40 text-[#f5dfa2] text-xs sm:text-sm font-medium shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>HANDCRAFTED LUXURY FOOTWEAR • FAISALABAD</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]">
                STEP INTO <br className="hidden sm:inline" />
                <span className="gold-gradient-text">YOUR STYLE</span>
              </h1>
              <p className="font-serif italic text-lg sm:text-xl text-[#d0cbc0] max-w-xl mx-auto lg:mx-0 pt-2 font-normal">
                {STORE_INFO.heroSubheading}
              </p>
            </div>

            {/* Description Paragraph */}
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-lg mx-auto lg:mx-0">
              Discover {STORE_INFO.brandName}&apos;s signature collection of handcrafted men&apos;s formal shoes, classic loafers, artisanal chappals, and elegant ladies footwear. Tailored with premium leathers at Regent Mall, Faisalabad.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <button
                id="hero-shop-collection-btn"
                onClick={onShopCollection}
                className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-gradient-to-r from-[#d4af37] to-[#aa820a] text-[#0c0c0e] font-bold text-sm uppercase tracking-wider hover:brightness-110 shadow-lg hover:shadow-[#d4af37]/20 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>SHOP COLLECTION</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-explore-new-arrivals-btn"
                onClick={onExploreNewArrivals}
                className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-[#18171f] hover:bg-[#23222b] text-neutral-200 hover:text-white font-semibold text-sm uppercase tracking-wider border border-[#33313d] hover:border-[#d4af37]/60 transition-all cursor-pointer"
              >
                EXPLORE NEW ARRIVALS
              </button>
            </div>

            {/* WhatsApp Quick Order Callout */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-3 text-xs text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              <span>Instant order & size assistance available on WhatsApp:</span>
              <a
                href={`https://wa.me/${STORE_INFO.whatsappInternational}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25D366] hover:underline font-semibold flex items-center gap-1"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                {STORE_INFO.phoneDisplay}
              </a>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-[#1e1d24] text-center">
              <div className="p-3 rounded-lg bg-[#141318] border border-[#212028]">
                <ShieldCheck className="w-5 h-5 text-[#d4af37] mx-auto mb-1" />
                <div className="text-[11px] sm:text-xs font-semibold text-neutral-200">100% Genuine</div>
                <div className="text-[10px] text-neutral-500">Pure Leather</div>
              </div>
              <div className="p-3 rounded-lg bg-[#141318] border border-[#212028]">
                <Truck className="w-5 h-5 text-[#d4af37] mx-auto mb-1" />
                <div className="text-[11px] sm:text-xs font-semibold text-neutral-200">Nationwide</div>
                <div className="text-[10px] text-neutral-500">Fast Delivery</div>
              </div>
              <div className="p-3 rounded-lg bg-[#141318] border border-[#212028]">
                <RotateCcw className="w-5 h-5 text-[#d4af37] mx-auto mb-1" />
                <div className="text-[11px] sm:text-xs font-semibold text-neutral-200">Easy Exchange</div>
                <div className="text-[10px] text-neutral-500">Regent Mall Store</div>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Hero Imagery with Luxury Framing */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Gold Border Frame */}
              <div className="absolute -inset-2.5 rounded-2xl bg-gradient-to-tr from-[#d4af37]/30 via-transparent to-[#d4af37]/20 blur-sm pointer-events-none" />

              {/* Main Visual Card */}
              <div className="relative rounded-2xl overflow-hidden bg-[#15141b] border border-[#33313d] shadow-2xl group">
                <div className="aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-neutral-900">
                  <img
                    src={SHOE_CASA_IMAGES.horsebitBlack}
                    alt="SHOE CASA Handcrafted Footwear Collection"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Editorial Overlay Pill */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0c0c0e]/90 backdrop-blur-md border border-[#2e2d37] flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#d4af37] block">
                      ARTISANAL COLLECTION
                    </span>
                    <span className="text-sm sm:text-base font-serif font-semibold text-white">
                      Classic Hand-Burnished Loafers
                    </span>
                    <span className="text-xs text-[#25D366] font-medium block">
                      Handcrafted in Faisalabad
                    </span>
                  </div>
                  <button
                    onClick={onShopCollection}
                    className="px-4 py-2 bg-[#d4af37] text-[#0c0c0e] font-bold text-xs rounded-lg uppercase tracking-wider hover:bg-[#f5dfa2] transition-colors shrink-0 cursor-pointer"
                  >
                    View Pair
                  </button>
                </div>

                {/* Floating Official Seal & Boutique Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-[#0c0c0e]/90 backdrop-blur-md border border-[#d4af37]/60 pl-1.5 pr-3 py-1 rounded-full text-[11px] text-[#f5dfa2] font-medium shadow-xl">
                  <img
                    src={SHOE_CASA_IMAGES.officialLogo}
                    alt="SHOE CASA Official Emblem"
                    className="w-7 h-7 rounded-full object-cover border border-[#d4af37]/50"
                  />
                  <span>Grand Regent Mall Boutique</span>
                </div>

                <div className="absolute top-4 right-4 bg-[#0c0c0e]/85 backdrop-blur-md border border-[#d4af37]/40 px-3 py-1.5 rounded-full text-[11px] text-[#f5dfa2] font-medium flex items-center gap-1.5 shadow-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
                  Faisalabad
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
