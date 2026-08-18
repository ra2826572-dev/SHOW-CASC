import React from 'react';
import { 
  X, 
  Trash2, 
  Heart, 
  ShoppingBag, 
  MessageCircle, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { Product } from '../types';
import { generateProductWhatsAppLink } from '../utils/whatsapp';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistProducts: Product[];
  onRemoveFromWishlist: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
  onClearWishlist: () => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistProducts,
  onRemoveFromWishlist,
  onAddToCart,
  onSelectProduct,
  onClearWishlist,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#111016] border-l border-[#272533] shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-5 border-b border-[#23212e] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-[#d4af37] fill-[#d4af37]" />
              <h3 className="font-serif text-lg font-bold text-white">
                Saved Wishlist ({wishlistProducts.length})
              </h3>
            </div>
            <div className="flex items-center gap-2">
              {wishlistProducts.length > 0 && (
                <button
                  onClick={onClearWishlist}
                  className="text-xs text-neutral-400 hover:text-red-400 underline mr-2"
                >
                  Clear
                </button>
              )}
              <button
                onClick={onClose}
                className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-[#1f1e29]"
                aria-label="Close wishlist"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {wishlistProducts.length > 0 ? (
              wishlistProducts.map((product) => {
                const waUrl = generateProductWhatsAppLink({
                  product,
                  size: product.sizes[0] || 42,
                  color: product.colors[0] || { name: 'Standard', hex: '#000' },
                  quantity: 1,
                });

                return (
                  <div
                    key={product.id}
                    className="p-4 rounded-xl bg-[#16151e] border border-[#262432] space-y-3"
                  >
                    <div className="flex gap-3.5">
                      <div 
                        onClick={() => {
                          onClose();
                          onSelectProduct(product);
                        }}
                        className="w-18 h-18 rounded-lg overflow-hidden bg-neutral-900 shrink-0 cursor-pointer border border-[#2e2d3b]"
                      >
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-1">
                          <h4 
                            onClick={() => {
                              onClose();
                              onSelectProduct(product);
                            }}
                            className="font-serif text-sm font-bold text-white hover:text-[#f5dfa2] cursor-pointer truncate"
                          >
                            {product.name}
                          </h4>
                          <button
                            onClick={() => onRemoveFromWishlist(product)}
                            className="text-neutral-500 hover:text-red-400 p-0.5"
                            title="Remove"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="text-[11px] text-neutral-400 mt-0.5">
                          {product.categoryLabel}
                        </div>

                        <div className="text-xs font-semibold text-[#f5dfa2] mt-1.5 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
                          In Stock • Regent Mall
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 pt-2 border-t border-[#201f28]">
                      <button
                        onClick={() => {
                          onAddToCart(product);
                        }}
                        className="flex-1 py-2 px-3 rounded-lg bg-[#d4af37] hover:bg-[#f5dfa2] text-[#0c0c0e] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Move to Bag</span>
                      </button>

                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center transition-colors"
                        title="Order on WhatsApp"
                      >
                        <MessageCircle className="w-4 h-4 fill-current" />
                      </a>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#181720] text-[#d4af37] flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-lg font-bold text-white">Your Wishlist is Empty</h4>
                <p className="text-xs text-neutral-400 max-w-xs mx-auto">
                  Click the heart icon on any footwear pair to save it for later review or instant WhatsApp order.
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-lg bg-[#d4af37] text-[#0c0c0e] font-bold text-xs uppercase tracking-wider"
                >
                  Explore Collection
                </button>
              </div>
            )}
          </div>

          {/* Footer */}
          {wishlistProducts.length > 0 && (
            <div className="p-4 bg-[#14131a] border-t border-[#23212e] text-center text-xs text-neutral-400">
              <span className="flex items-center justify-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                All pairs handcrafted in Pakistan
              </span>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
