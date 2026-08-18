import React from 'react';
import { ShoppingBag, MessageCircle, ArrowRight, Truck, Sparkles } from 'lucide-react';
import { STORE_INFO } from '../data/storeInfo';

interface OnlineOrderingCtaProps {
  onShopNow: () => void;
}

export const OnlineOrderingCta: React.FC<OnlineOrderingCtaProps> = ({ onShopNow }) => {
  const whatsappUrl = `https://wa.me/${STORE_INFO.whatsappInternational}?text=${encodeURIComponent(
    `Hello SHOE CASA, I would like to place an online order for your footwear collection. Please guide me.`
  )}`;

  return (
    <section id="online-ordering-cta-section" className="w-full py-16 sm:py-24 bg-[#0a0a0c] border-y border-[#18171f] relative overflow-hidden">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#d4af37]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181720] border border-[#d4af37]/40 text-[#f5dfa2] text-xs font-semibold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>FAST DELIVERY ACROSS ALL CITIES IN PAKISTAN</span>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight max-w-3xl mx-auto">
          YOUR NEXT FAVORITE PAIR IS <br />
          <span className="gold-gradient-text">JUST A CLICK AWAY</span>
        </h2>

        <p className="text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Browse our collection and order your favorite footwear with ease.
        </p>

        {/* Highlight Perks */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-neutral-400 py-2">
          <div className="flex items-center gap-2">
            <Truck className="w-4 h-4 text-[#d4af37]" />
            <span>Express Nationwide Delivery</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
            <span>Cash on Delivery (COD) Available</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
            <span>Same-Day Faisalabad Dispatch</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onShopNow}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa820a] text-[#0c0c0e] font-bold text-sm uppercase tracking-wider hover:brightness-110 shadow-xl transition-all flex items-center justify-center gap-2 group cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>SHOP NOW</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm uppercase tracking-wider shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>ORDER ON WHATSAPP</span>
          </a>
        </div>

        <p className="text-[11px] text-neutral-500 pt-2">
          WhatsApp Helpline: <strong className="text-neutral-300">{STORE_INFO.phoneDisplay}</strong> (11:00 AM – 11:00 PM)
        </p>

      </div>
    </section>
  );
};
