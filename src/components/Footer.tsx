import React from 'react';
import { 
  Instagram, 
  Facebook, 
  Video, 
  MapPin, 
  Phone, 
  Clock, 
  ShieldCheck, 
  Sparkles,
  ArrowUp
} from 'lucide-react';
import { STORE_INFO } from '../data/storeInfo';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onNavigate: (view: string, filterCategory?: string, gender?: 'all' | 'men' | 'women') => void;
  onOpenSizeGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenSizeGuide }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="w-full bg-[#08080a] border-t border-[#1a1922] text-neutral-300">
      
      {/* Upper Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Brand Col (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo size="lg" />

            <p className="text-xs sm:text-sm text-[#d4af37] font-serif font-medium tracking-wide">
              {STORE_INFO.tagline}
            </p>

            <p className="text-xs text-neutral-400 leading-relaxed">
              {STORE_INFO.description}
            </p>

            {/* Store Quick Coordinates */}
            <div className="pt-2 space-y-2 text-xs text-neutral-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>{STORE_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>WhatsApp: {STORE_INFO.phoneDisplay}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>Open Daily: 11:00 AM – 11:00 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links Col (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-[0.2em] text-white">
              QUICK LINKS
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#d4af37] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('shop')}
                  className="hover:text-[#d4af37] transition-colors"
                >
                  Shop All Footwear
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('shop', undefined, 'men')}
                  className="hover:text-[#d4af37] transition-colors"
                >
                  Men&apos;s Collection
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('shop', undefined, 'women')}
                  className="hover:text-[#d4af37] transition-colors"
                >
                  Women&apos;s Collection
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('home');
                    setTimeout(() => {
                      document.getElementById('new-arrivals-section')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="hover:text-[#d4af37] transition-colors"
                >
                  New Arrivals
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('home');
                    setTimeout(() => {
                      document.getElementById('best-sellers-section')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="hover:text-[#d4af37] transition-colors"
                >
                  Best Sellers
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('home');
                    setTimeout(() => {
                      document.getElementById('store-experience-section')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="hover:text-[#d4af37] transition-colors"
                >
                  About Us (Regent Mall)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('home');
                    setTimeout(() => {
                      document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="hover:text-[#d4af37] transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Care Col (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-[0.2em] text-white">
              CUSTOMER CARE
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <button
                  onClick={() => {
                    onNavigate('home');
                    setTimeout(() => {
                      document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="hover:text-[#d4af37] transition-colors"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <a
                  href={`https://wa.me/${STORE_INFO.whatsappInternational}?text=${encodeURIComponent('Hello SHOE CASA, I would like to inquire about shipping and delivery timelines.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#d4af37] transition-colors"
                >
                  Shipping Information
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${STORE_INFO.whatsappInternational}?text=${encodeURIComponent('Hello SHOE CASA, I would like to inquire about exchange/return policy.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#d4af37] transition-colors"
                >
                  Returns &amp; Exchanges
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenSizeGuide}
                  className="hover:text-[#d4af37] text-left transition-colors flex items-center gap-1.5 text-[#f5dfa2]"
                >
                  <span>Size Guide &amp; Fit Chart</span>
                  <Sparkles className="w-3 h-3 text-[#d4af37]" />
                </button>
              </li>
              <li>
                <a
                  href={`https://wa.me/${STORE_INFO.whatsappInternational}?text=${encodeURIComponent('Hello SHOE CASA, I have some questions about shoe maintenance and sizes.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#d4af37] transition-colors"
                >
                  Frequently Asked Questions (FAQs)
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us Col (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-[0.2em] text-white">
              FOLLOW US
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <a
                  href={STORE_INFO.social.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-neutral-400 hover:text-white group"
                >
                  <div className="p-2 rounded-lg bg-[#14131b] border border-[#262432] group-hover:border-[#d4af37] group-hover:text-[#d4af37] transition-colors">
                    <Instagram className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="block font-medium text-white group-hover:text-[#d4af37] transition-colors">Instagram</span>
                    <span className="text-[10px] text-neutral-500">{STORE_INFO.social.instagram.handle}</span>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href={STORE_INFO.social.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-neutral-400 hover:text-white group"
                >
                  <div className="p-2 rounded-lg bg-[#14131b] border border-[#262432] group-hover:border-[#d4af37] group-hover:text-[#d4af37] transition-colors">
                    <Facebook className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="block font-medium text-white group-hover:text-[#d4af37] transition-colors">Facebook</span>
                    <span className="text-[10px] text-neutral-500">SHOE CASA | Faisalabad</span>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href={STORE_INFO.social.tiktok.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-neutral-400 hover:text-white group"
                >
                  <div className="p-2 rounded-lg bg-[#14131b] border border-[#262432] group-hover:border-[#d4af37] group-hover:text-[#d4af37] transition-colors">
                    <Video className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="block font-medium text-white group-hover:text-[#d4af37] transition-colors">TikTok</span>
                    <span className="text-[10px] text-neutral-500">{STORE_INFO.social.tiktok.handle}</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar & Copyright */}
      <div className="border-t border-[#181720] bg-[#050507] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 text-center sm:text-left">
          <div>
            &copy; 2026 SHOE CASA. All Rights Reserved. • Faisalabad, Pakistan
          </div>

          <div className="flex items-center gap-4 text-neutral-400">
            <span className="flex items-center gap-1.5 text-xs text-[#f5dfa2]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
              Authentic Handcrafted Leather
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#15141c] hover:bg-[#d4af37] hover:text-[#0c0c0e] text-neutral-400 transition-colors ml-2"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
};
