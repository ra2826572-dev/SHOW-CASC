import React from 'react';
import { MapPin, Clock, Navigation, Phone, CheckCircle, Store, Sparkles } from 'lucide-react';
import { STORE_INFO } from '../data/storeInfo';
import { SHOE_CASA_IMAGES } from '../assets/images';

export const StoreExperience: React.FC = () => {
  return (
    <section id="store-experience-section" className="w-full py-16 sm:py-24 bg-[#0c0c0e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Gallery of Store Photography */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-2xl overflow-hidden bg-[#15141c] border border-[#2b2a36] shadow-2xl group">
              <div className="aspect-[16/10] w-full overflow-hidden bg-neutral-900">
                <img
                  src={SHOE_CASA_IMAGES.boutiqueStore}
                  alt="SHOE CASA Faisalabad Boutique Interior"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Floating Live Status Badge */}
              <div className="absolute top-4 left-4 bg-[#0c0c0e]/90 backdrop-blur-md border border-[#d4af37]/40 px-3.5 py-1.5 rounded-full text-xs text-[#f5dfa2] font-semibold flex items-center gap-2 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
                <span className="w-2 h-2 rounded-full bg-[#25D366] absolute left-3.5" />
                <span>Open Today • 11:00 AM – 11:00 PM</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#0c0c0e]/85 backdrop-blur-md border border-[#2d2c38] text-xs text-neutral-300 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Store className="w-4 h-4 text-[#d4af37]" />
                  <span className="font-semibold text-white">Regent Mall Boutique</span>
                </div>
                <span className="text-[#f5dfa2] text-[11px] font-medium">Chen One Road, Faisalabad</span>
              </div>
            </div>

            {/* Secondary Showcase Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden bg-[#14131a] border border-[#24232f] aspect-[16/10] relative group">
                <img
                  src={SHOE_CASA_IMAGES.monkStrap}
                  alt="SHOE CASA Display"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                  <span className="text-[11px] font-medium text-white">Hand-Finished Leather Gallery</span>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden bg-[#14131a] border border-[#24232f] aspect-[16/10] relative group">
                <img
                  src={SHOE_CASA_IMAGES.noroziBurgundy}
                  alt="SHOE CASA Fitting Lounge"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                  <span className="text-[11px] font-medium text-white">Traditional Heritage Sizing</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Store Details and Location Info */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full p-0.5 bg-gradient-to-b from-[#e6ca65] via-[#a38029] to-[#42330e] shadow-xl shrink-0 hidden sm:block">
                <img
                  src={SHOE_CASA_IMAGES.officialLogo}
                  alt="SHOE CASA Grand Regent Mall"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18171f] border border-[#d4af37]/30 text-[#f5dfa2] text-xs font-semibold uppercase tracking-widest mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>PHYSICAL STORE EXPERIENCE</span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                  VISIT OUR STORE
                </h2>
              </div>
            </div>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              Experience the {STORE_INFO.brandName} collection in person at our Faisalabad store. Explore our latest footwear and find the perfect pair for your style.
            </p>

            {/* Address Box */}
            <div className="space-y-4 p-5 sm:p-6 rounded-2xl bg-[#14131a] border border-[#262432]">
              
              {/* Location item */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-[#201e28] text-[#d4af37] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase font-bold text-[#b5b1a3] tracking-wider">Store Location</div>
                  <div className="text-sm sm:text-base font-semibold text-white mt-0.5">
                    {STORE_INFO.address}
                  </div>
                </div>
              </div>

              {/* Hours item */}
              <div className="flex items-start gap-3.5 pt-3 border-t border-[#1e1d27]">
                <div className="p-2.5 rounded-lg bg-[#201e28] text-[#d4af37] shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase font-bold text-[#b5b1a3] tracking-wider">Opening Hours</div>
                  <div className="text-sm sm:text-base font-semibold text-white mt-0.5">
                    {STORE_INFO.openingHours}
                  </div>
                  <div className="text-xs text-neutral-400">Open all 7 days of the week</div>
                </div>
              </div>

              {/* Contact item */}
              <div className="flex items-start gap-3.5 pt-3 border-t border-[#1e1d27]">
                <div className="p-2.5 rounded-lg bg-[#201e28] text-[#25D366] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase font-bold text-[#b5b1a3] tracking-wider">Phone / WhatsApp</div>
                  <div className="text-sm sm:text-base font-semibold text-white mt-0.5">
                    {STORE_INFO.phoneDisplay}
                  </div>
                </div>
              </div>

            </div>

            {/* In-store benefits list */}
            <div className="grid grid-cols-2 gap-2.5 text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#d4af37]" />
                <span>Complimentary Foot Sizing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#d4af37]" />
                <span>Instant In-Store Exchange</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#d4af37]" />
                <span>Leather Conditioning Care</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#d4af37]" />
                <span>Ample Regent Mall Parking</span>
              </div>
            </div>

            {/* Get Directions Button */}
            <div className="pt-2">
              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa820a] text-[#0c0c0e] font-bold text-sm uppercase tracking-wider hover:brightness-110 shadow-lg transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>GET DIRECTIONS</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
