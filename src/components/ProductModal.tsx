import React, { useState } from 'react';
import { 
  X, 
  Heart, 
  ShoppingBag, 
  Star, 
  MessageCircle, 
  Truck, 
  ShieldCheck, 
  RotateCcw, 
  Check, 
  Sparkles, 
  ChevronRight,
  Info
} from 'lucide-react';
import { Product, ProductColor } from '../types';
import { generateProductWhatsAppLink } from '../utils/whatsapp';
import { STORE_INFO } from '../data/storeInfo';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
  onAddToCartWithOptions: (product: Product, size: number, color: ProductColor, quantity: number) => void;
  onBuyNow: (product: Product, size: number, color: ProductColor, quantity: number) => void;
  onOpenSizeGuide: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  isOpen,
  onClose,
  isWishlisted,
  onToggleWishlist,
  onAddToCartWithOptions,
  onBuyNow,
  onOpenSizeGuide,
}) => {
  if (!isOpen || !product) return null;

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<number>(product.sizes[0] || 42);
  const [selectedColor, setSelectedColor] = useState<ProductColor>(
    product.colors[0] || { name: 'Standard', hex: '#111111' }
  );
  const [quantity, setQuantity] = useState(1);
  const [customerNameInput, setCustomerNameInput] = useState('');

  const activeImage = product.images[selectedImageIndex] || product.images[0];

  const handleWhatsAppOrder = () => {
    const url = generateProductWhatsAppLink({
      product,
      size: selectedSize,
      color: selectedColor,
      quantity,
      customerName: customerNameInput.trim() || undefined,
    });
    window.open(url, '_blank');
  };

  const handleAddToCart = () => {
    onAddToCartWithOptions(product, selectedSize, selectedColor, quantity);
  };

  const handleDirectBuy = () => {
    onBuyNow(product, selectedSize, selectedColor, quantity);
  };

  return (
    <div 
      id="product-detail-modal" 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-5xl bg-[#111016] border border-[#2d2b38] rounded-2xl shadow-2xl overflow-hidden my-6">
        
        {/* Close Modal Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#1b1a23]/90 text-neutral-300 hover:text-white hover:bg-[#252431] border border-[#353342] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[88vh] overflow-y-auto">
          
          {/* Left Column: Multi-Angle Gallery */}
          <div className="lg:col-span-6 p-4 sm:p-8 bg-[#0c0c0e] flex flex-col justify-between space-y-4">
            
            {/* Main Stage Image */}
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#16151e] border border-[#23222e]">
              <img
                src={activeImage}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />

              {/* Badges Overlay */}
              <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                {product.isBestSeller && (
                  <span className="px-3 py-1 rounded bg-[#d4af37] text-[#0c0c0e] font-extrabold text-[10px] uppercase tracking-wider shadow">
                    BEST SELLER
                  </span>
                )}
                {product.isNewArrival && (
                  <span className="px-3 py-1 rounded bg-[#1f1e26] text-[#f5dfa2] border border-[#d4af37]/40 font-bold text-[10px] uppercase tracking-wider">
                    NEW ARRIVAL
                  </span>
                )}
              </div>

              {/* Wishlist Heart */}
              <button
                onClick={() => onToggleWishlist(product)}
                className={`absolute top-3 right-3 p-2.5 rounded-full backdrop-blur-md transition-all shadow ${
                  isWishlisted
                    ? 'bg-[#d4af37] text-[#0c0c0e]'
                    : 'bg-[#0c0c0e]/80 text-neutral-300 hover:text-white'
                }`}
                aria-label="Wishlist"
              >
                <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
              </button>
            </div>

            {/* Thumbnail Row */}
            {product.images.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-1">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`w-18 h-18 rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                      selectedImageIndex === idx
                        ? 'border-[#d4af37] ring-2 ring-[#d4af37]/30 scale-102'
                        : 'border-[#262432] opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} thumbnail ${idx + 1}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Origin & Craftsmanship pill */}
            <div className="p-3.5 rounded-xl bg-[#14131b] border border-[#23212c] text-xs text-neutral-400 flex items-center justify-between">
              <span className="flex items-center gap-2 text-white">
                <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                {product.origin}
              </span>
              <span className="text-[#d4af37] font-medium">{product.material}</span>
            </div>

          </div>

          {/* Right Column: Selection, Details & Direct WhatsApp Actions */}
          <div className="lg:col-span-6 p-6 sm:p-8 bg-[#111016] space-y-6">
            
            {/* Header: Title, Category, Rating */}
            <div className="space-y-2 border-b border-[#22202c] pb-4">
              <div className="flex items-center justify-between text-xs">
                <span className="uppercase font-bold tracking-wider text-[#d4af37]">
                  {product.categoryLabel}
                </span>
                <div className="flex items-center gap-1.5 text-[#f5dfa2]">
                  <Star className="w-4 h-4 fill-[#d4af37] text-[#d4af37]" />
                  <span className="font-bold text-sm">{product.rating}</span>
                  <span className="text-neutral-500">({product.reviewCount} customer reviews)</span>
                </div>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
                {product.name}
              </h2>

              {/* Availability & Stock Status */}
              <div className="flex items-center gap-3 pt-1">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#182619] border border-[#25D366]/40 text-[#4ade80] text-xs font-bold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                  Available in Store & Online
                </span>
                <span className="text-xs text-neutral-400">
                  Grand Regent Mall, Faisalabad
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              {product.description}
            </p>

            {/* Color Swatch Selector */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold uppercase tracking-wider text-neutral-300">
                  Select Color: <strong className="text-white ml-1">{selectedColor.name}</strong>
                </span>
              </div>
              <div className="flex items-center gap-3">
                {product.colors.map((color, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedColor(color)}
                    className={`group flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs transition-all cursor-pointer ${
                      selectedColor.name === color.name
                        ? 'border-[#d4af37] bg-[#1d1b26] text-white shadow'
                        : 'border-[#2c2a38] bg-[#14131c] text-neutral-400 hover:text-white'
                    }`}
                  >
                    <span
                      className="w-4 h-4 rounded-full border border-[#444] shrink-0"
                      style={{ backgroundColor: color.hex }}
                    />
                    <span>{color.name}</span>
                    {selectedColor.name === color.name && <Check className="w-3 h-3 text-[#d4af37]" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selector + Size Guide Link */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold uppercase tracking-wider text-neutral-300">
                  Select Size (EU): <strong className="text-[#f5dfa2] ml-1">{selectedSize}</strong>
                </span>
                <button
                  type="button"
                  onClick={onOpenSizeGuide}
                  className="text-[#d4af37] hover:text-[#f5dfa2] underline flex items-center gap-1 font-semibold"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>Pakistani Size Guide</span>
                </button>
              </div>
              <div className="grid grid-cols-7 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      selectedSize === size
                        ? 'bg-[#d4af37] text-[#0c0c0e] shadow-lg ring-2 ring-[#d4af37]/30 scale-102'
                        : 'bg-[#181720] text-neutral-300 hover:text-white hover:bg-[#242330] border border-[#2b2a37]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 pt-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
                Quantity:
              </span>
              <div className="flex items-center bg-[#181720] border border-[#2c2b38] rounded-xl p-1">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 flex items-center justify-center text-neutral-300 hover:text-white rounded-lg hover:bg-[#252431]"
                >
                  -
                </button>
                <span className="w-10 text-center text-sm font-bold text-white">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 flex items-center justify-center text-neutral-300 hover:text-white rounded-lg hover:bg-[#252431]"
                >
                  +
                </button>
              </div>
              <span className="text-xs text-neutral-400">
                Quantity: <strong className="text-white">{quantity} pair{quantity > 1 ? 's' : ''}</strong>
              </span>
            </div>

            {/* Optional Customer Name for Instant WhatsApp Order */}
            <div className="p-4 rounded-xl bg-[#16151f] border border-[#282736] space-y-2">
              <label htmlFor="modal-customer-name" className="block text-xs font-semibold text-neutral-300">
                Your Name (for WhatsApp Order Tagging):
              </label>
              <input
                id="modal-customer-name"
                type="text"
                value={customerNameInput}
                onChange={(e) => setCustomerNameInput(e.target.value)}
                placeholder="e.g. Tariq Mehmood"
                className="w-full px-3.5 py-2 rounded-lg bg-[#0c0c0e] border border-[#302f3e] text-white text-xs focus:outline-none focus:border-[#d4af37]"
              />
            </div>

            {/* Main Action Buttons */}
            <div className="space-y-3 pt-2">
              {/* WhatsApp Order Button */}
              <button
                id="modal-whatsapp-order-btn"
                onClick={handleWhatsAppOrder}
                className="w-full py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm uppercase tracking-wider shadow-xl transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>ORDER ON WHATSAPP (0346-7373236)</span>
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Add to Bag */}
                <button
                  id="modal-add-to-cart-btn"
                  onClick={handleAddToCart}
                  className="w-full py-3.5 rounded-xl bg-[#1f1e29] hover:bg-[#2a2938] text-white font-semibold text-xs uppercase tracking-wider border border-[#383648] hover:border-[#d4af37] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4 text-[#d4af37]" />
                  <span>Add to Bag</span>
                </button>

                {/* Direct Checkout Buy Now */}
                <button
                  id="modal-buy-now-btn"
                  onClick={handleDirectBuy}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa820a] hover:brightness-110 text-[#0c0c0e] font-bold text-xs uppercase tracking-wider shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Buy Now (Checkout)</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Product Key Specs & Delivery info */}
            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-[#22202c] text-center text-[11px] text-neutral-400">
              <div className="p-2 rounded-lg bg-[#14131b]">
                <Truck className="w-4 h-4 text-[#d4af37] mx-auto mb-1" />
                <span>Nationwide Express</span>
              </div>
              <div className="p-2 rounded-lg bg-[#14131b]">
                <ShieldCheck className="w-4 h-4 text-[#d4af37] mx-auto mb-1" />
                <span>100% Pure Leather</span>
              </div>
              <div className="p-2 rounded-lg bg-[#14131b]">
                <RotateCcw className="w-4 h-4 text-[#d4af37] mx-auto mb-1" />
                <span>Regent Mall Store</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
