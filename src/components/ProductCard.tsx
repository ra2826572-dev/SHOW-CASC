import React from 'react';
import { Heart, Eye, ShoppingBag, Star, MessageCircle, Sparkles } from 'lucide-react';
import { Product } from '../types';
import { generateProductWhatsAppLink } from '../utils/whatsapp';

interface ProductCardProps {
  product: Product;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isWishlisted,
  onToggleWishlist,
  onQuickView,
  onAddToCart,
  onSelectProduct,
}) => {
  const directWhatsAppUrl = generateProductWhatsAppLink({
    product,
    size: product.sizes[0] || 42,
    color: product.colors[0] || { name: 'Standard', hex: '#000' },
    quantity: 1,
  });

  return (
    <div 
      id={`product-card-${product.id}`}
      className="group relative rounded-2xl overflow-hidden bg-[#131217] border border-[#23222a] hover:border-[#d4af37]/60 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
    >
      {/* Top Media Container */}
      <div className="relative aspect-square w-full overflow-hidden bg-[#18171f] cursor-pointer" onClick={() => onSelectProduct(product)}>
        <img
          src={product.images[0]}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
        />

        {/* Secondary image preview on hover if available */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} alternate angle`}
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"
          />
        )}

        {/* Badges Overlay */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.isBestSeller && (
            <span className="px-2.5 py-0.5 rounded bg-[#d4af37] text-[#0c0c0e] font-extrabold text-[10px] uppercase tracking-wider shadow-md">
              BEST SELLER
            </span>
          )}
          {product.isNewArrival && (
            <span className="px-2.5 py-0.5 rounded bg-[#1e1e24] text-[#f5dfa2] border border-[#d4af37]/40 font-bold text-[10px] uppercase tracking-wider shadow-md">
              NEW ARRIVAL
            </span>
          )}
          {product.isLimited && (
            <span className="px-2.5 py-0.5 rounded bg-neutral-900 text-amber-300 font-semibold text-[10px] uppercase tracking-wider">
              HANDCRAFTED
            </span>
          )}
        </div>

        {/* Action Buttons Floating On Top Right */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
          {/* Wishlist Heart */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleWishlist(product);
            }}
            className={`p-2 rounded-full backdrop-blur-md transition-all shadow-md ${
              isWishlisted
                ? 'bg-[#d4af37] text-[#0c0c0e]'
                : 'bg-[#0c0c0e]/75 text-neutral-300 hover:text-white hover:bg-[#0c0c0e]'
            }`}
            aria-label="Toggle wishlist"
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
          </button>

          {/* Quick View Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="p-2 rounded-full bg-[#0c0c0e]/75 backdrop-blur-md text-neutral-300 hover:text-[#f5dfa2] hover:bg-[#0c0c0e] transition-all shadow-md opacity-90 group-hover:opacity-100"
            aria-label="Quick preview product"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Fast-Action Bar on Hover */}
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 flex items-center gap-2 z-10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
            className="flex-1 py-2.5 px-3 rounded-lg bg-[#d4af37] hover:bg-[#f5dfa2] text-[#0c0c0e] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-lg transition-colors cursor-pointer"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Add to Bag</span>
          </button>

          <a
            href={directWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="p-2.5 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-lg transition-colors cursor-pointer"
            title="Order via WhatsApp"
            aria-label="Order on WhatsApp"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
          </a>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 bg-[#131217]">
        <div>
          {/* Category & Rating Row */}
          <div className="flex items-center justify-between gap-2 text-xs mb-1.5">
            <span className="text-[11px] font-medium tracking-wide uppercase text-[#b5b1a3]">
              {product.categoryLabel}
            </span>
            <div className="flex items-center gap-1 text-[#f5dfa2]">
              <Star className="w-3.5 h-3.5 fill-[#d4af37] text-[#d4af37]" />
              <span className="text-xs font-semibold">{product.rating}</span>
              <span className="text-[10px] text-neutral-500">({product.reviewCount})</span>
            </div>
          </div>

          {/* Product Name */}
          <h3 
            onClick={() => onSelectProduct(product)}
            className="font-serif text-base sm:text-lg font-bold text-white group-hover:text-[#f5dfa2] transition-colors cursor-pointer line-clamp-1"
          >
            {product.name}
          </h3>

          {/* Short Description */}
          <p className="text-xs text-neutral-400 mt-1 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Color swatches preview */}
          {product.colors && product.colors.length > 0 && (
            <div className="flex items-center gap-1.5 mt-2.5">
              {product.colors.map((col, idx) => (
                <span
                  key={idx}
                  title={col.name}
                  className="w-3.5 h-3.5 rounded-full border border-[#3b3a45] shadow-xs"
                  style={{ backgroundColor: col.hex }}
                />
              ))}
              <span className="text-[10px] text-neutral-400 ml-1">
                {product.colors.length} {product.colors.length > 1 ? 'shades' : 'shade'}
              </span>
            </div>
          )}
        </div>

        {/* Inquiry & Action Row */}
        <div className="pt-4 mt-3 border-t border-[#201f27] flex items-center justify-between gap-2">
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-[#f5dfa2] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#25D366] inline-block animate-pulse" />
              Available for Order
            </span>
            <span className="text-[10px] text-neutral-400 block mt-0.5">
              Grand Regent Mall • In Stock
            </span>
          </div>

          <button
            onClick={() => onSelectProduct(product)}
            className="py-1.5 px-3 rounded-lg bg-[#1e1d26] hover:bg-[#d4af37] text-white hover:text-[#0c0c0e] text-xs font-bold transition-all cursor-pointer"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};
