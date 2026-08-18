import React from 'react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';
import { Flame, ArrowRight, Award } from 'lucide-react';

interface BestSellersProps {
  products: Product[];
  wishlistIds: string[];
  onToggleWishlist: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
  onViewAllProducts: () => void;
}

export const BestSellers: React.FC<BestSellersProps> = ({
  products,
  wishlistIds,
  onToggleWishlist,
  onQuickView,
  onAddToCart,
  onSelectProduct,
  onViewAllProducts,
}) => {
  const bestSellersList = products.filter((p) => p.isBestSeller).slice(0, 4);

  return (
    <section id="best-sellers-section" className="w-full py-16 sm:py-24 bg-[#0c0c0e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#201710] border border-[#d4af37]/40 text-[#f5dfa2] text-xs font-semibold uppercase tracking-widest mb-3">
              <Flame className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>FAISALABAD FAVORITES</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              BEST SELLERS
            </h2>
            <p className="text-neutral-400 text-sm mt-1 max-w-xl">
              Our most celebrated pairs — tested and acclaimed by thousands of gentlemen and ladies across Pakistan.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-neutral-400">
            <Award className="w-4 h-4 text-[#d4af37]" />
            <span>Highest Customer Satisfaction Rating (4.9 / 5.0)</span>
          </div>
        </div>

        {/* 4 Column High-Impact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {bestSellersList.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isWishlisted={wishlistIds.includes(product.id)}
              onToggleWishlist={onToggleWishlist}
              onQuickView={onQuickView}
              onAddToCart={onAddToCart}
              onSelectProduct={onSelectProduct}
            />
          ))}
        </div>

        {/* Feature highlight banner */}
        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-[#17161f] via-[#1f1e28] to-[#17161f] border border-[#2c2a38] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="font-serif font-bold text-white text-base sm:text-lg">
              Looking for a custom size or specific colorway?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400">
              Speak directly with our master craftsmen at Regent Mall, Faisalabad for bespoke adjustments.
            </p>
          </div>
          <button
            onClick={onViewAllProducts}
            className="px-6 py-3 rounded-lg bg-[#d4af37] hover:bg-[#f5dfa2] text-[#0c0c0e] font-bold text-xs uppercase tracking-wider transition-colors shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <span>Explore All Styles</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
