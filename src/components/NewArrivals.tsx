import React, { useRef } from 'react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight } from 'lucide-react';

interface NewArrivalsProps {
  products: Product[];
  wishlistIds: string[];
  onToggleWishlist: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
  onViewAllProducts: () => void;
}

export const NewArrivals: React.FC<NewArrivalsProps> = ({
  products,
  wishlistIds,
  onToggleWishlist,
  onQuickView,
  onAddToCart,
  onSelectProduct,
  onViewAllProducts,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const newArrivalsList = products.filter((p) => p.isNewArrival || p.discountPercent).slice(0, 8);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="new-arrivals-section" className="w-full py-16 sm:py-24 bg-[#0f0e13] border-t border-[#1c1b22]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-[#d4af37] text-xs font-semibold uppercase tracking-widest mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FRESH FROM WORKSHOP</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              NEW ARRIVALS
            </h2>
            <p className="text-neutral-400 text-sm mt-1">
              Discover the latest styles from SHOE CASA.
            </p>
          </div>

          {/* Carousel Arrows & View All */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleScroll('left')}
              className="p-3 rounded-full bg-[#18171f] hover:bg-[#252430] text-neutral-300 hover:text-white border border-[#2b2a34] transition-colors cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="p-3 rounded-full bg-[#18171f] hover:bg-[#252430] text-neutral-300 hover:text-white border border-[#2b2a34] transition-colors cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <button
              onClick={onViewAllProducts}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#d4af37] hover:bg-[#f5dfa2] text-[#0c0c0e] font-bold text-xs uppercase tracking-wider transition-colors ml-2 cursor-pointer"
            >
              <span>VIEW ALL PRODUCTS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-5 sm:gap-6 overflow-x-auto pb-6 pt-1 no-scrollbar snap-x snap-mandatory scroll-smooth"
        >
          {newArrivalsList.map((product) => (
            <div
              key={product.id}
              className="w-[280px] sm:w-[320px] shrink-0 snap-start"
            >
              <ProductCard
                product={product}
                isWishlisted={wishlistIds.includes(product.id)}
                onToggleWishlist={onToggleWishlist}
                onQuickView={onQuickView}
                onAddToCart={onAddToCart}
                onSelectProduct={onSelectProduct}
              />
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="sm:hidden mt-4 text-center">
          <button
            onClick={onViewAllProducts}
            className="w-full py-3 rounded-lg bg-[#d4af37] text-[#0c0c0e] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <span>VIEW ALL PRODUCTS</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
