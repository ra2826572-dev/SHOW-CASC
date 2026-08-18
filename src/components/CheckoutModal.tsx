import React, { useState } from 'react';
import { 
  X, 
  ShoppingBag, 
  MessageCircle, 
  CheckCircle, 
  Truck, 
  CreditCard, 
  MapPin, 
  Phone, 
  User, 
  ShieldCheck, 
  ArrowLeft,
  FileText
} from 'lucide-react';
import { CartItem, OrderCustomerInfo } from '../types';
import { STORE_INFO } from '../data/storeInfo';
import { generateCartWhatsAppLink } from '../utils/whatsapp';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onOrderCompleted: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  onOrderCompleted,
}) => {
  if (!isOpen) return null;

  const [customerInfo, setCustomerInfo] = useState<OrderCustomerInfo>({
    fullName: '',
    phoneNumber: '',
    city: 'Faisalabad',
    deliveryAddress: '',
    orderNotes: '',
    paymentMethod: 'cod',
  });

  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const isFreeShipping = subtotal >= STORE_INFO.freeShippingThreshold;
  const shippingFee = items.length === 0 ? 0 : isFreeShipping ? 0 : STORE_INFO.standardShippingFee;
  const grandTotal = subtotal + shippingFee;

  const popularCities = [
    'Faisalabad',
    'Lahore',
    'Karachi',
    'Islamabad',
    'Rawalpindi',
    'Multan',
    'Sialkot',
    'Peshawar',
    'Gujranwala',
  ];

  const handleSendViaWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerInfo.fullName || !customerInfo.phoneNumber || !customerInfo.deliveryAddress) {
      alert('Please fill in your name, phone number, and delivery address.');
      return;
    }

    const genOrderNum = `SC-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderNumber(genOrderNum);

    const waUrl = generateCartWhatsAppLink(items, customerInfo);
    window.open(waUrl, '_blank');
    setIsOrderPlaced(true);
  };

  const handleStandardConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerInfo.fullName || !customerInfo.phoneNumber || !customerInfo.deliveryAddress) {
      alert('Please fill in your name, phone number, and delivery address.');
      return;
    }

    const genOrderNum = `SC-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderNumber(genOrderNum);
    setIsOrderPlaced(true);
  };

  const handleFinish = () => {
    onOrderCompleted();
    setIsOrderPlaced(false);
    onClose();
  };

  return (
    <div 
      id="checkout-modal" 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-4xl bg-[#111016] border border-[#2d2b38] rounded-2xl shadow-2xl overflow-hidden my-6">
        
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-[#22202c] flex items-center justify-between bg-[#14131b]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#d4af37] text-[#0c0c0e] flex items-center justify-center font-display font-bold">
              SC
            </div>
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
                SHOE CASA Secure Checkout
              </h3>
              <p className="text-xs text-neutral-400">
                Direct Delivery from Regent Mall, Faisalabad to anywhere in Pakistan
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-[#1f1e29]"
            aria-label="Close checkout"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-8 max-h-[80vh] overflow-y-auto">
          {isOrderPlaced ? (
            /* Order Placed Success Screen */
            <div className="text-center py-8 space-y-6 max-w-lg mx-auto">
              <div className="w-20 h-20 rounded-full bg-[#25D366]/20 border-2 border-[#25D366] text-[#25D366] flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-[#d4af37]">
                  ORDER REGISTERED
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                  Thank You, {customerInfo.fullName}!
                </h2>
                <p className="text-xs sm:text-sm text-neutral-300 mt-2 leading-relaxed">
                  Your order reference is <strong className="text-[#f5dfa2]">{orderNumber}</strong>. Our team at Regent Mall, Faisalabad has received your request and will prepare your handcrafted footwear.
                </p>
              </div>

              {/* Order summary box */}
              <div className="p-5 rounded-2xl bg-[#16151f] border border-[#272634] text-left space-y-3 text-xs">
                <div className="flex justify-between text-neutral-400">
                  <span>Delivery Address:</span>
                  <span className="text-white font-medium">{customerInfo.deliveryAddress}, {customerInfo.city}</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>Contact Phone:</span>
                  <span className="text-white font-medium">{customerInfo.phoneNumber}</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>Selected Footwear:</span>
                  <span className="text-white font-medium">{items.reduce((acc, i) => acc + i.quantity, 0)} pair(s)</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-[#22212f] text-sm font-bold text-white">
                  <span>Status:</span>
                  <span className="text-[#25D366]">Confirmed for Processing</span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="space-y-3">
                <a
                  href={generateCartWhatsAppLink(items, customerInfo)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Send Confirmation via WhatsApp</span>
                </a>

                <button
                  onClick={handleFinish}
                  className="w-full py-3.5 rounded-xl bg-[#1e1d27] hover:bg-[#272634] text-white font-semibold text-xs uppercase tracking-wider border border-[#343242] transition-colors"
                >
                  Return to Store
                </button>
              </div>
            </div>
          ) : (
            /* Checkout Form & Order Summary */
            <form onSubmit={handleSendViaWhatsApp} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Customer Information (7 cols) */}
              <div className="lg:col-span-7 space-y-5">
                <h4 className="font-serif text-lg font-bold text-white flex items-center gap-2">
                  <User className="w-4 h-4 text-[#d4af37]" />
                  <span>1. Customer &amp; Shipping Details</span>
                </h4>

                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={customerInfo.fullName}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, fullName: e.target.value })}
                    placeholder="e.g. Mohammad Bilal"
                    className="w-full px-4 py-3 rounded-xl bg-[#0c0c0e] border border-[#292836] text-white text-xs sm:text-sm focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                    WhatsApp / Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={customerInfo.phoneNumber}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, phoneNumber: e.target.value })}
                    placeholder="e.g. 0300-1234567"
                    className="w-full px-4 py-3 rounded-xl bg-[#0c0c0e] border border-[#292836] text-white text-xs sm:text-sm focus:outline-none focus:border-[#d4af37]"
                  />
                  <span className="text-[10px] text-neutral-500 mt-1 block">
                    Our rider/courier will contact this number for delivery coordinates.
                  </span>
                </div>

                {/* City Selector */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                    City in Pakistan *
                  </label>
                  <select
                    value={customerInfo.city}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, city: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0c0c0e] border border-[#292836] text-white text-xs sm:text-sm focus:outline-none focus:border-[#d4af37]"
                  >
                    {popularCities.map((city) => (
                      <option key={city} value={city}>
                        {city} {city === 'Faisalabad' ? '(Same Day / Store Pickup Available)' : ''}
                      </option>
                    ))}
                    <option value="Other">Other City in Pakistan</option>
                  </select>
                </div>

                {/* Delivery Address */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Complete Street / House Address *
                  </label>
                  <textarea
                    rows={2}
                    required
                    value={customerInfo.deliveryAddress}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, deliveryAddress: e.target.value })}
                    placeholder="House / Plaza number, Street, Sector, Landmark..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0c0c0e] border border-[#292836] text-white text-xs sm:text-sm focus:outline-none focus:border-[#d4af37] resize-none"
                  />
                </div>

                {/* Order Notes */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Special Notes / Fit Preference (Optional)
                  </label>
                  <input
                    type="text"
                    value={customerInfo.orderNotes || ''}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, orderNotes: e.target.value })}
                    placeholder="e.g. Call before delivery, gift packaging, wide foot..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0c0c0e] border border-[#292836] text-white text-xs focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                {/* Payment Mode */}
                <div className="pt-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                    2. Choose Payment Method
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <label className={`p-3.5 rounded-xl border flex items-center gap-3 cursor-pointer transition-all ${
                      customerInfo.paymentMethod === 'cod'
                        ? 'bg-[#1e1d27] border-[#d4af37] text-white'
                        : 'bg-[#14131b] border-[#292835] text-neutral-400'
                    }`}>
                      <input
                        type="radio"
                        name="paymentMethod"
                        checked={customerInfo.paymentMethod === 'cod'}
                        onChange={() => setCustomerInfo({ ...customerInfo, paymentMethod: 'cod' })}
                        className="accent-[#d4af37]"
                      />
                      <div>
                        <div className="text-xs font-bold text-white">Cash on Delivery (COD)</div>
                        <div className="text-[10px] text-neutral-400">Pay when shoes arrive at door</div>
                      </div>
                    </label>

                    <label className={`p-3.5 rounded-xl border flex items-center gap-3 cursor-pointer transition-all ${
                      customerInfo.paymentMethod === 'bank_transfer'
                        ? 'bg-[#1e1d27] border-[#d4af37] text-white'
                        : 'bg-[#14131b] border-[#292835] text-neutral-400'
                    }`}>
                      <input
                        type="radio"
                        name="paymentMethod"
                        checked={customerInfo.paymentMethod === 'bank_transfer'}
                        onChange={() => setCustomerInfo({ ...customerInfo, paymentMethod: 'bank_transfer' })}
                        className="accent-[#d4af37]"
                      />
                      <div>
                        <div className="text-xs font-bold text-white">Bank Transfer / EasyPaisa</div>
                        <div className="text-[10px] text-neutral-400">Account details on WhatsApp</div>
                      </div>
                    </label>
                  </div>
                </div>

              </div>

              {/* Order Summary Column (5 cols) */}
              <div className="lg:col-span-5 space-y-5">
                <div className="p-5 rounded-2xl bg-[#16151f] border border-[#272635] space-y-4">
                  <h4 className="font-serif text-base font-bold text-white border-b border-[#252432] pb-3 flex items-center justify-between">
                    <span>Order Summary</span>
                    <span className="text-xs text-[#d4af37] font-sans">
                      {items.reduce((acc, i) => acc + i.quantity, 0)} items
                    </span>
                  </h4>

                  {/* List of items */}
                  <div className="max-h-48 overflow-y-auto space-y-3 pr-1">
                    {items.map((item, idx) => (
                      <div key={idx} className="flex gap-3 text-xs">
                        <img
                          src={item.product.images[0]}
                          alt={item.product.name}
                          referrerPolicy="no-referrer"
                          className="w-12 h-12 rounded-lg object-cover bg-neutral-900 shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="font-bold text-white truncate">{item.product.name}</div>
                          <div className="text-[10px] text-neutral-400">
                            Size: {item.selectedSize} (EU) • {item.selectedColor.name}
                          </div>
                          <div className="text-xs font-semibold text-[#f5dfa2] mt-0.5">
                            Quantity: {item.quantity} pair{item.quantity > 1 ? 's' : ''}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Summary Details */}
                  <div className="border-t border-[#232230] pt-3 space-y-1.5 text-xs text-neutral-300">
                    <div className="flex justify-between">
                      <span>Total Selected</span>
                      <span className="font-semibold text-white">{items.reduce((acc, i) => acc + i.quantity, 0)} pair(s)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Nationwide Delivery</span>
                      <span className="text-[#25D366] font-bold">Standard Delivery</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-[#252432] text-sm font-extrabold text-white">
                      <span>Fulfillment</span>
                      <span className="text-[#f5dfa2] text-xs">Grand Regent Mall Showroom</span>
                    </div>
                  </div>

                  {/* Submit buttons */}
                  <div className="pt-2 space-y-2.5">
                    {/* Send via WhatsApp button */}
                    <button
                      type="button"
                      onClick={handleSendViaWhatsApp}
                      className="w-full py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>ORDER ON WHATSAPP (0346-7373236)</span>
                    </button>

                    {/* Standard Confirm Order button */}
                    <button
                      type="button"
                      onClick={handleStandardConfirm}
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa820a] text-[#0c0c0e] font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      <CheckCircle className="w-4 h-4" />
                      <span>CONFIRM ORDER VIA WEBSITE</span>
                    </button>
                  </div>

                  <div className="text-[10px] text-neutral-500 text-center flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-3 h-3 text-[#d4af37]" />
                    <span>Your order is dispatched safely from Regent Mall, Faisalabad</span>
                  </div>

                </div>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
