import React from 'react';
import { 
  X, 
  Trash2, 
  ShoppingBag, 
  MessageCircle, 
  ArrowRight, 
  Truck, 
  ShieldCheck,
  Plus,
  Minus
} from 'lucide-react';
import { CartItem } from '../types';
import { STORE_INFO } from '../data/storeInfo';
import { generateCartWhatsAppLink } from '../utils/whatsapp';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (index: number, quantity: number) => void;
  onRemoveItem: (index: number) => void;
  onProceedToCheckout: () => void;
  onContinueShopping: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
  onContinueShopping,
}) => {
  if (!isOpen) return null;

  const totalItemsCount = items.reduce((acc, item) => acc + item.quantity, 0);

  const handleWhatsAppCartOrder = () => {
    const url = generateCartWhatsAppLink(items);
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#111016] border-l border-[#272533] shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-5 border-b border-[#23212e] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#d4af37]" />
              <h3 className="font-serif text-lg font-bold text-white">
                Selected Footwear ({totalItemsCount})
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-[#1f1e29]"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Delivery & Boutique info */}
          <div className="px-5 py-3 bg-[#16151f] border-b border-[#242330]">
            <div className="flex items-center gap-2 text-xs text-neutral-300">
              <Truck className="w-4 h-4 text-[#d4af37] shrink-0" />
              <span>Fast Nationwide Delivery &amp; In-Store Pickup in Faisalabad</span>
            </div>
          </div>

          {/* Items List or Empty State */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length > 0 ? (
              items.map((item, index) => (
                <div
                  key={`${item.product.id}-${item.selectedSize}-${item.selectedColor.name}-${index}`}
                  className="flex gap-4 p-3 rounded-xl bg-[#16151e] border border-[#262432]"
                >
                  {/* Thumbnail */}
                  <div className="w-20 h-20 rounded-lg overflow-hidden bg-neutral-900 shrink-0 border border-[#2f2d3c]">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-serif text-sm font-bold text-white truncate">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(index)}
                          className="text-neutral-500 hover:text-red-400 p-0.5 cursor-pointer"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="text-[11px] text-neutral-400 mt-0.5 flex items-center gap-2">
                        <span>Size: <strong className="text-white">{item.selectedSize}</strong></span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <span
                            className="w-2.5 h-2.5 rounded-full border border-neutral-600"
                            style={{ backgroundColor: item.selectedColor.hex }}
                          />
                          {item.selectedColor.name}
                        </span>
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center bg-[#0c0c0e] border border-[#2b2a38] rounded-lg p-0.5">
                        <button
                          onClick={() => onUpdateQuantity(index, item.quantity - 1)}
                          className="w-6 h-6 flex items-center justify-center text-neutral-400 hover:text-white rounded cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-7 text-center text-xs font-bold text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                          className="w-6 h-6 flex items-center justify-center text-neutral-400 hover:text-white rounded cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="text-[11px] font-semibold text-[#f5dfa2]">
                        {item.quantity} pair{item.quantity > 1 ? 's' : ''}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#181720] text-[#d4af37] flex items-center justify-center mx-auto">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-lg font-bold text-white">Your Selection is Empty</h4>
                <p className="text-xs text-neutral-400 max-w-xs mx-auto">
                  Explore our handcrafted leather loafers, formals and traditional chappals to place an order.
                </p>
                <button
                  onClick={() => {
                    onClose();
                    onContinueShopping();
                  }}
                  className="px-6 py-2.5 rounded-lg bg-[#d4af37] text-[#0c0c0e] font-bold text-xs uppercase tracking-wider cursor-pointer"
                >
                  Browse Footwear
                </button>
              </div>
            )}
          </div>

          {/* Footer & Action Buttons */}
          {items.length > 0 && (
            <div className="p-5 bg-[#14131a] border-t border-[#23212e] space-y-4">
              
              <div className="p-3 rounded-xl bg-[#1a1924] border border-[#2c2a3d] text-xs text-neutral-300 space-y-1">
                <div className="flex items-center justify-between text-white font-semibold">
                  <span>Selected Total</span>
                  <span className="text-[#f5dfa2]">{totalItemsCount} Pair{totalItemsCount > 1 ? 's' : ''}</span>
                </div>
                <p className="text-[11px] text-neutral-400">
                  Ready to confirm on WhatsApp or through order details.
                </p>
              </div>

              {/* 1-Click WhatsApp Cart Order */}
              <button
                onClick={handleWhatsAppCartOrder}
                className="w-full py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Confirm Order on WhatsApp</span>
              </button>

              {/* Standard Order Submission */}
              <button
                onClick={onProceedToCheckout}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa820a] hover:brightness-110 text-[#0c0c0e] font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>Enter Delivery Details</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-neutral-500">
                <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Grand Regent Mall, Chen One Road, Faisalabad</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
