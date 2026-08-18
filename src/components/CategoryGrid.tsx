import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SHOE_CASA_IMAGES } from '../assets/images';

interface CategoryGridProps {
  onSelectCategory: (categoryId: string, gender?: 'all' | 'men' | 'women') => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ onSelectCategory }) => {
  const [activeTab, setActiveTab] = useState<'men' | 'women' | 'featured'>('men');

  const menCategories = [
    {
      id: 'men-formal',
      title: 'Formal Shoes',
      subtitle: 'Oxfords, Derbys & Wholecuts',
      image: SHOE_CASA_IMAGES.captoeOxford,
      tag: 'Executive Class',
      gender: 'men' as const,
    },
    {
      id: 'men-loafers',
      title: 'Loafers',
      subtitle: 'Penny, Tassel & Suede Loafers',
      image: SHOE_CASA_IMAGES.horsebitBlack,
      tag: 'Signature Choice',
      gender: 'men' as const,
    },
    {
      id: 'men-chappal',
      title: 'Chappals',
      subtitle: 'Peshawari, Norozi & Kaptaan',
      image: SHOE_CASA_IMAGES.noroziBurgundy,
      tag: 'Traditional Heritage',
      gender: 'men' as const,
    },
    {
      id: 'men-casual',
      title: 'Casual Shoes',
      subtitle: 'Woven Slip-ons & Loafers',
      image: SHOE_CASA_IMAGES.wovenTan,
      tag: 'Everyday Comfort',
      gender: 'men' as const,
    },
    {
      id: 'men-sandals',
      title: 'Sandals & Monks',
      subtitle: 'Double Buckle & Comfort Leather',
      image: SHOE_CASA_IMAGES.monkStrap,
      tag: 'Artisan Finish',
      gender: 'men' as const,
    },
  ];

  const womenCategories = [
    {
      id: 'women-chappal',
      title: 'Ladies Chappals',
      subtitle: 'Artisan Kolhapuri & Padded Slides',
      image: SHOE_CASA_IMAGES.womenShowcase,
      tag: 'Customer Favorite',
      gender: 'women' as const,
    },
    {
      id: 'women-flats',
      title: 'Flats & Slides',
      subtitle: 'Handmade Slippers & Casual Flats',
      image: SHOE_CASA_IMAGES.womenShowcase,
      tag: 'Festive & Daily',
      gender: 'women' as const,
    },
    {
      id: 'women-sandals',
      title: 'Sandals',
      subtitle: 'Hand-Crafted Festive Sandals',
      image: SHOE_CASA_IMAGES.womenShowcase,
      tag: 'Occasion Ready',
      gender: 'women' as const,
    },
    {
      id: 'women-formal',
      title: 'Formal Footwear',
      subtitle: 'Tailored Leather Shoes',
      image: SHOE_CASA_IMAGES.womenShowcase,
      tag: 'Boutique Collection',
      gender: 'women' as const,
    },
  ];

  const featuredCollections = [
    {
      id: 'new-arrivals',
      title: 'New Arrivals',
      subtitle: 'Latest Seasonal Designs from SHOE CASA',
      image: SHOE_CASA_IMAGES.suedeNavy,
      tag: 'Fresh Drops',
      gender: 'all' as const,
    },
    {
      id: 'best-sellers',
      title: 'Best Sellers',
      subtitle: 'Most Loved Pairs in Faisalabad',
      image: SHOE_CASA_IMAGES.tasselBox,
      tag: 'High Demand',
      gender: 'all' as const,
    },
    {
      id: 'premium-collection',
      title: 'Regent Mall Boutique',
      subtitle: 'Handcrafted Heritage in Faisalabad',
      image: SHOE_CASA_IMAGES.boutiqueStore,
      tag: 'Flagship Showroom',
      gender: 'all' as const,
    },
  ];

  const currentList = 
    activeTab === 'men' 
      ? menCategories 
      : activeTab === 'women' 
      ? womenCategories 
      : featuredCollections;

  return (
    <section id="shop-by-category-section" className="w-full py-14 sm:py-20 bg-[#0f0e13] border-y border-[#1c1b22]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-[#d4af37] text-xs font-semibold uppercase tracking-widest mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CURATED FOR EVERY OCCASION</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              SHOP BY CATEGORY
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm mt-1 max-w-lg">
              Explore handpicked men&apos;s handcrafted formals, traditional chappals, and graceful ladies footwear.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center p-1.5 bg-[#17161e] rounded-xl border border-[#2b2a34] self-start md:self-auto">
            <button
              id="category-tab-men"
              onClick={() => setActiveTab('men')}
              className={`px-4 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'men'
                  ? 'bg-gradient-to-r from-[#d4af37] to-[#aa820a] text-[#0c0c0e] shadow-md'
                  : 'text-neutral-300 hover:text-white hover:bg-[#201f29]'
              }`}
            >
              MEN
            </button>
            <button
              id="category-tab-women"
              onClick={() => setActiveTab('women')}
              className={`px-4 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'women'
                  ? 'bg-gradient-to-r from-[#d4af37] to-[#aa820a] text-[#0c0c0e] shadow-md'
                  : 'text-neutral-300 hover:text-white hover:bg-[#201f29]'
              }`}
            >
              WOMEN
            </button>
            <button
              id="category-tab-featured"
              onClick={() => setActiveTab('featured')}
              className={`px-4 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'featured'
                  ? 'bg-gradient-to-r from-[#d4af37] to-[#aa820a] text-[#0c0c0e] shadow-md'
                  : 'text-neutral-300 hover:text-white hover:bg-[#201f29]'
              }`}
            >
              FEATURED
            </button>
          </div>
        </div>

        {/* Category Cards Grid */}
        <div className={`grid gap-4 sm:gap-6 ${
          activeTab === 'featured' 
            ? 'grid-cols-1 md:grid-cols-3' 
            : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'
        }`}>
          {currentList.map((category) => (
            <div
              key={category.id}
              className="group relative rounded-2xl overflow-hidden bg-[#15141b] border border-[#262530] hover:border-[#d4af37]/60 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Background Image Container */}
              <div className="relative aspect-[4/3] sm:aspect-square w-full overflow-hidden bg-neutral-900">
                <img
                  src={category.image}
                  alt={category.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out brightness-95 group-hover:brightness-105"
                />
                
                {/* Subtle Gradient Shade */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/30 to-transparent" />

                {/* Badge Tag */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#0c0c0e]/85 backdrop-blur-md border border-[#33313e] text-[10px] uppercase font-bold tracking-wider text-[#f5dfa2]">
                  {category.tag}
                </div>
              </div>

              {/* Card Bottom Meta & Button */}
              <div className="p-4 sm:p-5 bg-[#131218] flex flex-col justify-between flex-1 border-t border-[#22212a]">
                <div>
                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#f5dfa2] transition-colors leading-snug">
                    {category.title}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1 line-clamp-1">
                    {category.subtitle}
                  </p>
                </div>

                <div className="pt-4 mt-auto">
                  <button
                    onClick={() => onSelectCategory(category.id, category.gender)}
                    className="w-full py-2.5 px-3 rounded-lg bg-[#1c1b24] hover:bg-[#d4af37] text-neutral-200 hover:text-[#0c0c0e] font-semibold text-xs uppercase tracking-wider border border-[#2f2e3a] hover:border-[#d4af37] transition-all flex items-center justify-center gap-1.5 group/btn cursor-pointer"
                  >
                    <span>SHOP NOW</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
