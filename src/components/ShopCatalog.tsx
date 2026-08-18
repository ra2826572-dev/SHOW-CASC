import React, { useState, useMemo } from 'react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';
import { 
  SlidersHorizontal, 
  Search, 
  X, 
  RotateCcw, 
  Sparkles,
  ChevronDown,
  ArrowLeft
} from 'lucide-react';
import { CATEGORIES_LIST } from '../data/products';

interface ShopCatalogProps {
  products: Product[];
  initialCategory?: string;
  initialGender?: 'all' | 'men' | 'women';
  wishlistIds: string[];
  onToggleWishlist: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
  onBackToHome: () => void;
  onOpenSizeGuide: () => void;
}

export const ShopCatalog: React.FC<ShopCatalogProps> = ({
  products,
  initialCategory,
  initialGender = 'all',
  wishlistIds,
  onToggleWishlist,
  onQuickView,
  onAddToCart,
  onSelectProduct,
  onBackToHome,
  onOpenSizeGuide,
}) => {
  const [selectedGender, setSelectedGender] = useState<'all' | 'men' | 'women'>(initialGender);
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || 'all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState<'featured' | 'rating' | 'newest'>('featured');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const availableSizes = [36, 37, 38, 39, 40, 41, 42, 43, 44, 45];

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        // Gender filter
        if (selectedGender !== 'all' && product.gender !== selectedGender) {
          return false;
        }

        // Category filter
        if (selectedCategory !== 'all' && product.category !== selectedCategory) {
          return false;
        }

        // Size filter
        if (selectedSize !== null && !product.sizes.includes(selectedSize)) {
          return false;
        }

        // Search query
        if (searchQuery.trim() !== '') {
          const q = searchQuery.toLowerCase();
          const matchName = product.name.toLowerCase().includes(q);
          const matchDesc = product.description.toLowerCase().includes(q);
          const matchCat = product.categoryLabel.toLowerCase().includes(q);
          const matchMat = product.material.toLowerCase().includes(q);
          if (!matchName && !matchDesc && !matchCat && !matchMat) {
            return false;
          }
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'newest') return (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0);
        return 0;
      });
  }, [products, selectedGender, selectedCategory, selectedSize, searchQuery, sortBy]);

  const handleResetFilters = () => {
    setSelectedGender('all');
    setSelectedCategory('all');
    setSearchQuery('');
    setSelectedSize(null);
    setSortBy('featured');
  };

  const hasActiveFilters = 
    selectedGender !== 'all' || 
    selectedCategory !== 'all' || 
    searchQuery.trim() !== '' || 
    selectedSize !== null || 
    sortBy !== 'featured';

  return (
    <div className="w-full min-h-screen bg-[#0c0c0e] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Breadcrumb & Title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#1f1e27]">
          <div>
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-[#d4af37] mb-2 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Homepage</span>
            </button>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              SHOE CASA FOOTWEAR CATALOG
            </h1>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Handcrafted in Pakistan • Faisalabad Regent Mall Showroom &amp; Nationwide Online Store
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenSizeGuide}
              className="px-4 py-2 rounded-lg bg-[#181720] hover:bg-[#23222d] text-[#f5dfa2] text-xs font-semibold uppercase tracking-wider border border-[#d4af37]/30 transition-colors"
            >
              Size Guide
            </button>

            <button
              onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
              className="lg:hidden px-4 py-2 rounded-lg bg-[#d4af37] text-[#0c0c0e] text-xs font-bold uppercase tracking-wider flex items-center gap-2"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filters ({filteredProducts.length})</span>
            </button>
          </div>
        </div>

        {/* Catalog Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
          
          {/* Left Sidebar Filters (Desktop & Mobile Drawer) */}
          <aside className={`lg:col-span-3 space-y-6 ${
            isMobileFilterOpen 
              ? 'block fixed inset-0 z-50 bg-[#0c0c0e]/95 backdrop-blur-xl p-6 overflow-y-auto' 
              : 'hidden lg:block'
          }`}>
            
            {/* Mobile Header with close button */}
            {isMobileFilterOpen && (
              <div className="flex items-center justify-between pb-4 border-b border-[#22212b] lg:hidden">
                <div className="font-serif font-bold text-lg text-white">Filter Footwear</div>
                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="p-2 text-neutral-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            )}

            {/* Filter Reset if active */}
            {hasActiveFilters && (
              <div className="flex items-center justify-between p-3 rounded-xl bg-[#17161f] border border-[#2b2a37]">
                <span className="text-xs text-neutral-300 font-medium">Filters Applied</span>
                <button
                  onClick={handleResetFilters}
                  className="text-xs text-[#d4af37] hover:underline flex items-center gap-1 font-semibold"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset All</span>
                </button>
              </div>
            )}

            {/* Search within catalog */}
            <div className="p-5 rounded-2xl bg-[#14131a] border border-[#23222e] space-y-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300">
                Search Catalog
              </label>
              <div className="relative">
                <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Loafers, Norozi, Flats..."
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-[#0c0c0e] border border-[#292835] text-white text-xs focus:outline-none focus:border-[#d4af37]"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Gender Collection Selector */}
            <div className="p-5 rounded-2xl bg-[#14131a] border border-[#23222e] space-y-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300">
                Department
              </label>
              <div className="grid grid-cols-3 gap-1.5">
                {(['all', 'men', 'women'] as const).map((g) => (
                  <button
                    key={g}
                    onClick={() => setSelectedGender(g)}
                    className={`py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                      selectedGender === g
                        ? 'bg-[#d4af37] text-[#0c0c0e] font-bold shadow'
                        : 'bg-[#1b1a23] text-neutral-300 hover:text-white hover:bg-[#23222e]'
                    }`}
                  >
                    {g === 'all' ? 'All' : g}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Filter List */}
            <div className="p-5 rounded-2xl bg-[#14131a] border border-[#23222e] space-y-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300">
                Category
              </label>
              <div className="space-y-1.5">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                    selectedCategory === 'all'
                      ? 'bg-[#1e1d27] text-[#d4af37] font-bold border border-[#d4af37]/30'
                      : 'text-neutral-400 hover:text-white hover:bg-[#181720]'
                  }`}
                >
                  <span>All Categories</span>
                  <span className="text-[10px] text-neutral-500">({products.length})</span>
                </button>

                {CATEGORIES_LIST.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      if (cat.gender === 'men') setSelectedGender('men');
                      if (cat.gender === 'women') setSelectedGender('women');
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                      selectedCategory === cat.id
                        ? 'bg-[#1e1d27] text-[#d4af37] font-bold border border-[#d4af37]/30'
                        : 'text-neutral-400 hover:text-white hover:bg-[#181720]'
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span className="text-[10px] text-neutral-500">({cat.count})</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Size Filter Pills */}
            <div className="p-5 rounded-2xl bg-[#14131a] border border-[#23222e] space-y-3">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300">
                  EU Size
                </label>
                {selectedSize !== null && (
                  <button
                    onClick={() => setSelectedSize(null)}
                    className="text-[10px] text-[#d4af37] hover:underline"
                  >
                    Clear Size
                  </button>
                )}
              </div>
              <div className="grid grid-cols-5 gap-1.5">
                {availableSizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(selectedSize === size ? null : size)}
                    className={`py-2 rounded-lg text-xs font-bold transition-all ${
                      selectedSize === size
                        ? 'bg-[#d4af37] text-[#0c0c0e]'
                        : 'bg-[#1c1b25] text-neutral-300 hover:bg-[#252432] hover:text-white border border-[#2b2a36]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Apply Button */}
            {isMobileFilterOpen && (
              <div className="pt-4">
                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="w-full py-3.5 rounded-xl bg-[#d4af37] text-[#0c0c0e] font-bold text-xs uppercase tracking-wider"
                >
                  Apply &amp; View {filteredProducts.length} Results
                </button>
              </div>
            )}

          </aside>

          {/* Right Column: Catalog Grid & Sorting Bar */}
          <main className="lg:col-span-9 space-y-6">
            
            {/* Top Bar with Sort Dropdown & Product Counter */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-[#14131a] border border-[#22212b]">
              <div className="text-xs text-neutral-300">
                Showing <strong className="text-[#f5dfa2]">{filteredProducts.length}</strong> styles available at SHOE CASA
              </div>

              {/* Sort By Dropdown */}
              <div className="flex items-center gap-2 self-end sm:self-auto text-xs">
                <span className="text-neutral-400">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-3 py-1.5 rounded-lg bg-[#0c0c0e] border border-[#2c2b38] text-white text-xs focus:outline-none focus:border-[#d4af37]"
                >
                  <option value="featured">Featured First</option>
                  <option value="rating">Customer Rating</option>
                  <option value="newest">Newest Additions</option>
                </select>
              </div>
            </div>

            {/* Products Grid or Empty State */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
                {filteredProducts.map((product) => (
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
            ) : (
              <div className="p-12 text-center rounded-2xl bg-[#14131a] border border-[#22212b] space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#1e1d27] text-[#d4af37] flex items-center justify-center mx-auto">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white">No footwear matches your filters</h3>
                <p className="text-xs sm:text-sm text-neutral-400 max-w-md mx-auto">
                  Try adjusting your search terms or clearing selected category and size filters to see more of our handcrafted pairs.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="px-6 py-2.5 rounded-lg bg-[#d4af37] text-[#0c0c0e] font-bold text-xs uppercase tracking-wider"
                >
                  Clear All Filters
                </button>
              </div>
            )}

          </main>

        </div>

      </div>
    </div>
  );
};
