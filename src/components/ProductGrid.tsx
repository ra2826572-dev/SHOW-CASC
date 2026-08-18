import React, { useState, useMemo } from 'react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';
import { Sparkles, ArrowRight, SlidersHorizontal } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
  wishlistIds: string[];
  onToggleWishlist: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
  onViewAllProducts: () => void;
}

type TabType = 'all' | 'men' | 'women' | 'loafers' | 'formal' | 'chappals' | 'bestsellers';

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  wishlistIds,
  onToggleWishlist,
  onQuickView,
  onAddToCart,
  onSelectProduct,
  onViewAllProducts,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('all');

  const filteredProducts = useMemo(() => {
    switch (activeTab) {
      case 'men':
        return products.filter((p) => p.gender === 'men');
      case 'women':
        return products.filter((p) => p.gender === 'women');
      case 'loafers':
        return products.filter((p) => p.category === 'men-loafers');
      case 'formal':
        return products.filter((p) => p.category === 'men-formal' || p.category === 'women-formal');
      case 'chappals':
        return products.filter((p) => p.category === 'men-chappal' || p.category === 'women-chappal');
      case 'bestsellers':
        return products.filter((p) => p.isBestSeller);
      case 'all':
      default:
        return products;
    }
  }, [activeTab, products]);

  const tabs: { id: TabType; label: string }[] = [
    { id: 'all', label: 'All Footwear' },
    { id: 'bestsellers', label: 'Best Sellers' },
    { id: 'men', label: 'Men\'s Line' },
    { id: 'women', label: 'Ladies Footwear' },
    { id: 'loafers', label: 'Loafers' },
    { id: 'formal', label: 'Formal Shoes' },
    { id: 'chappals', label: 'Chappals' },
  ];

  return (
    <section id="featured-products-section" className="w-full py-16 sm:py-24 bg-[#0c0c0e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18171f] border border-[#d4af37]/30 text-[#f5dfa2] text-xs font-semibold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>HANDCRAFTED PERFECTION</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              FEATURED PRODUCTS
            </h2>
            <p className="text-neutral-400 text-sm mt-2 max-w-xl">
              Impeccable calfskin, traditional artisanal lasts, and featherlight cushioning engineered for daily luxury in Pakistan.
            </p>
          </div>

          {/* Quick Action to View Entire Shop */}
          <button
            onClick={onViewAllProducts}
            className="flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#d4af37] hover:text-[#f5dfa2] self-start md:self-auto group cursor-pointer"
          >
            <span>EXPLORE FULL CATALOG</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium tracking-wide uppercase whitespace-nowrap transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-[#d4af37] to-[#aa820a] text-[#0c0c0e] font-bold shadow-lg'
                  : 'bg-[#15141b] text-neutral-300 hover:text-white hover:bg-[#1f1e28] border border-[#26252f]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          {filteredProducts.slice(0, 8).map((product) => (
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

        {/* Bottom Banner */}
        <div className="mt-12 text-center">
          <button
            onClick={onViewAllProducts}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#16151c] hover:bg-[#201f28] text-white font-semibold text-sm uppercase tracking-wider border border-[#302e3b] hover:border-[#d4af37] shadow-lg transition-all group cursor-pointer"
          >
            <SlidersHorizontal className="w-4 h-4 text-[#d4af37]" />
            <span>View All ({products.length}) Footwear Styles</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
