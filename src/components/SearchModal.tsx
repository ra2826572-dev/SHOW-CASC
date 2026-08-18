import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Star, Sparkles } from 'lucide-react';
import { Product } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const searchResults = query.trim() === ''
    ? products.slice(0, 4) // Show featured initial picks
    : products.filter((p) => {
        const q = query.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.categoryLabel.toLowerCase().includes(q) ||
          p.material.toLowerCase().includes(q) ||
          p.gender.toLowerCase().includes(q)
        );
      });

  const popularKeywords = [
    'Loafers',
    'Formal',
    'Chappal',
    'Norozi',
    'Ladies Flats',
    'Brown Leather',
    'Peshawari',
    'Suede',
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-start justify-center p-4 sm:p-6 pt-16 sm:pt-24 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#121117] border border-[#2b2a38] rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-[#22212d] flex items-center gap-3">
          <Search className="w-5 h-5 text-[#d4af37] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search SHOE CASA footwear (e.g. Classic Loafers, Norozi, Ladies Chappal)..."
            className="w-full bg-transparent text-white text-sm sm:text-base focus:outline-none placeholder:text-neutral-500"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-neutral-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2.5 py-1 text-xs font-semibold uppercase text-neutral-400 hover:text-white rounded bg-[#1c1b25]"
          >
            Esc
          </button>
        </div>

        {/* Popular Keyword Chips */}
        <div className="px-5 py-3 bg-[#16151f] border-b border-[#22212d] flex items-center gap-2 overflow-x-auto no-scrollbar">
          <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider shrink-0">
            Popular:
          </span>
          {popularKeywords.map((kw) => (
            <button
              key={kw}
              onClick={() => setQuery(kw)}
              className="px-2.5 py-1 rounded-md bg-[#1f1e29] hover:bg-[#d4af37] hover:text-[#0c0c0e] text-neutral-300 text-xs font-medium shrink-0 transition-colors cursor-pointer"
            >
              {kw}
            </button>
          ))}
        </div>

        {/* Search Results */}
        <div className="p-5 max-h-96 overflow-y-auto space-y-3">
          <div className="text-xs text-neutral-400 font-semibold uppercase tracking-wider mb-2">
            {query.trim() === '' ? 'Featured Suggestions' : `Found ${searchResults.length} Results`}
          </div>

          {searchResults.length > 0 ? (
            searchResults.map((product) => (
              <div
                key={product.id}
                onClick={() => {
                  onSelectProduct(product);
                  onClose();
                }}
                className="flex items-center justify-between p-3 rounded-xl bg-[#171620] hover:bg-[#201f2b] border border-[#272533] hover:border-[#d4af37]/50 cursor-pointer transition-all group"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-14 h-14 rounded-lg object-cover bg-neutral-900 shrink-0 border border-[#2d2b3a]"
                  />
                  <div className="min-w-0">
                    <h4 className="font-serif text-sm font-bold text-white group-hover:text-[#f5dfa2] transition-colors truncate">
                      {product.name}
                    </h4>
                    <div className="text-[11px] text-neutral-400 flex items-center gap-2">
                      <span>{product.categoryLabel}</span>
                      <span>•</span>
                      <span className="flex items-center gap-0.5 text-[#f5dfa2]">
                        <Star className="w-3 h-3 fill-[#d4af37] text-[#d4af37]" />
                        {product.rating}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="text-right shrink-0 pl-3">
                  <div className="text-xs font-semibold text-[#f5dfa2]">
                    In Stock
                  </div>
                  <div className="text-[10px] text-[#d4af37] flex items-center justify-end gap-1 font-semibold group-hover:translate-x-0.5 transition-transform mt-0.5">
                    <span>View Pair</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-neutral-400 text-xs">
              No matching footwear found for &ldquo;{query}&rdquo;. Try another term.
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="p-3.5 bg-[#0e0d12] border-t border-[#1f1e29] text-center text-[11px] text-neutral-500">
          SHOE CASA • Regent Mall, Faisalabad Showroom &amp; Nationwide Delivery
        </div>

      </div>
    </div>
  );
};
