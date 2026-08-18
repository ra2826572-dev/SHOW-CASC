import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryGrid } from './components/CategoryGrid';
import { ProductGrid } from './components/ProductGrid';
import { NewArrivals } from './components/NewArrivals';
import { BestSellers } from './components/BestSellers';
import { WhyChooseUs } from './components/WhyChooseUs';
import { StoreExperience } from './components/StoreExperience';
import { OnlineOrderingCta } from './components/OnlineOrderingCta';
import { SocialSection } from './components/SocialSection';
import { CustomerReviews } from './components/CustomerReviews';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ShopCatalog } from './components/ShopCatalog';
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { SearchModal } from './components/SearchModal';
import { SizeGuideModal } from './components/SizeGuideModal';
import { SHOE_CASA_PRODUCTS } from './data/products';
import { STORE_INFO } from './data/storeInfo';
import { Product, CartItem, ProductColor } from './types';
import { MessageCircle } from 'lucide-react';

export default function App() {
  // Current View
  const [currentView, setCurrentView] = useState<'home' | 'shop'>('home');
  const [catalogFilterCategory, setCatalogFilterCategory] = useState<string | undefined>(undefined);
  const [catalogFilterGender, setCatalogFilterGender] = useState<'all' | 'men' | 'women'>('all');

  // Modals & Drawers State
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);

  // Cart & Wishlist State (with localStorage persistence)
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('shoecasa_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [wishlistIds, setWishlistIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('shoecasa_wishlist');
      return saved ? JSON.parse(saved) : ['sc-men-01', 'sc-men-03'];
    } catch {
      return ['sc-men-01', 'sc-men-03'];
    }
  });

  // Save Cart & Wishlist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('shoecasa_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error(e);
    }
  }, [cartItems]);

  useEffect(() => {
    try {
      localStorage.setItem('shoecasa_wishlist', JSON.stringify(wishlistIds));
    } catch (e) {
      console.error(e);
    }
  }, [wishlistIds]);

  // Wishlist Handlers
  const handleToggleWishlist = (product: Product) => {
    setWishlistIds((prev) =>
      prev.includes(product.id)
        ? prev.filter((id) => id !== product.id)
        : [...prev, product.id]
    );
  };

  const handleRemoveFromWishlist = (product: Product) => {
    setWishlistIds((prev) => prev.filter((id) => id !== product.id));
  };

  const handleClearWishlist = () => {
    setWishlistIds([]);
  };

  // Cart Handlers
  const handleAddToCartQuick = (product: Product) => {
    const defaultColor = product.colors[0] || { name: 'Standard', hex: '#111' };
    const defaultSize = product.sizes[0] || 42;
    handleAddToCartWithOptions(product, defaultSize, defaultColor, 1);
  };

  const handleAddToCartWithOptions = (
    product: Product,
    size: number,
    color: ProductColor,
    quantity: number
  ) => {
    setCartItems((prev) => {
      const existingIdx = prev.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.selectedSize === size &&
          item.selectedColor.name === color.name
      );

      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += quantity;
        return updated;
      } else {
        return [
          ...prev,
          {
            product,
            selectedSize: size,
            selectedColor: color,
            quantity,
          },
        ];
      }
    });

    setIsCartOpen(true);
    setIsProductModalOpen(false);
  };

  const handleBuyNow = (
    product: Product,
    size: number,
    color: ProductColor,
    quantity: number
  ) => {
    handleAddToCartWithOptions(product, size, color, quantity);
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleUpdateQuantity = (index: number, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveCartItem(index);
      return;
    }
    setCartItems((prev) => {
      const updated = [...prev];
      updated[index].quantity = quantity;
      return updated;
    });
  };

  const handleRemoveCartItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleOrderCompleted = () => {
    setCartItems([]);
  };

  // Product Inspection Modal
  const handleOpenProductDetails = (product: Product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

  // Navigation Handlers
  const handleNavigate = (
    view: string,
    filterCategory?: string,
    gender?: 'all' | 'men' | 'women'
  ) => {
    if (view === 'shop') {
      setCurrentView('shop');
      setCatalogFilterCategory(filterCategory);
      setCatalogFilterGender(gender || 'all');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setCurrentView('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const wishlistProducts = SHOE_CASA_PRODUCTS.filter((p) =>
    wishlistIds.includes(p.id)
  );

  const cartItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#0c0c0e] text-white flex flex-col font-sans selection:bg-[#d4af37] selection:text-[#0c0c0e]">
      
      {/* Top Main Navigation */}
      <Navbar
        cartCount={cartItemsCount}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {currentView === 'home' ? (
          <>
            {/* Section 1: Hero Carousel Banner */}
            <Hero
              onShopCollection={() => handleNavigate('shop')}
              onExploreNewArrivals={() => handleNavigate('shop', 'new-arrivals')}
            />

            {/* Section 2: Category Grid */}
            <CategoryGrid
              onSelectCategory={(catId) => {
                if (catId === 'women') {
                  handleNavigate('shop', undefined, 'women');
                } else if (catId === 'men') {
                  handleNavigate('shop', undefined, 'men');
                } else {
                  handleNavigate('shop', catId);
                }
              }}
            />

            {/* Section 3: Featured Products Grid */}
            <ProductGrid
              products={SHOE_CASA_PRODUCTS}
              wishlistIds={wishlistIds}
              onToggleWishlist={handleToggleWishlist}
              onQuickView={handleOpenProductDetails}
              onAddToCart={handleAddToCartQuick}
              onSelectProduct={handleOpenProductDetails}
              onViewAllShop={() => handleNavigate('shop')}
            />

            {/* Section 4: New Arrivals Showcase */}
            <NewArrivals
              products={SHOE_CASA_PRODUCTS}
              wishlistIds={wishlistIds}
              onToggleWishlist={handleToggleWishlist}
              onQuickView={handleOpenProductDetails}
              onAddToCart={handleAddToCartQuick}
              onSelectProduct={handleOpenProductDetails}
              onViewAllNew={() => handleNavigate('shop')}
            />

            {/* Section 5: Best Sellers Showcase */}
            <BestSellers
              products={SHOE_CASA_PRODUCTS}
              wishlistIds={wishlistIds}
              onToggleWishlist={handleToggleWishlist}
              onQuickView={handleOpenProductDetails}
              onAddToCart={handleAddToCartQuick}
              onSelectProduct={handleOpenProductDetails}
              onViewAllBest={() => handleNavigate('shop')}
            />

            {/* Section 6: Why Choose Us Feature Pillars */}
            <WhyChooseUs />

            {/* Section 7: Physical Store Experience (Regent Mall Faisalabad) */}
            <StoreExperience />

            {/* Section 8: Online Ordering CTA */}
            <OnlineOrderingCta onShopNow={() => handleNavigate('shop')} />

            {/* Section 9: Social Media Section */}
            <SocialSection />

            {/* Section 10: Authentic Customer Reviews */}
            <CustomerReviews />

            {/* Section 11: Contact Section */}
            <ContactSection />
          </>
        ) : (
          /* Full Footwear Catalog Screen */
          <ShopCatalog
            products={SHOE_CASA_PRODUCTS}
            initialCategory={catalogFilterCategory}
            initialGender={catalogFilterGender}
            wishlistIds={wishlistIds}
            onToggleWishlist={handleToggleWishlist}
            onQuickView={handleOpenProductDetails}
            onAddToCart={handleAddToCartQuick}
            onSelectProduct={handleOpenProductDetails}
            onBackToHome={() => handleNavigate('home')}
            onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
          />
        )}
      </main>

      {/* Footer Section */}
      <Footer
        onNavigate={handleNavigate}
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
      />

      {/* Persistent Floating WhatsApp Help Button */}
      <a
        href={`https://wa.me/${STORE_INFO.whatsappInternational}?text=${encodeURIComponent(
          'Hello SHOE CASA, I would like to inquire about your footwear collection and sizes.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center gap-2 group cursor-pointer"
        aria-label="Order on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-out whitespace-nowrap text-xs font-bold uppercase tracking-wider pr-1">
          WhatsApp: 0346-7373236
        </span>
      </a>

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isProductModalOpen}
        onClose={() => setIsProductModalOpen(false)}
        isWishlisted={selectedProduct ? wishlistIds.includes(selectedProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
        onAddToCartWithOptions={handleAddToCartWithOptions}
        onBuyNow={handleBuyNow}
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
        onContinueShopping={() => {
          setIsCartOpen(false);
          handleNavigate('shop');
        }}
      />

      {/* Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistProducts={wishlistProducts}
        onRemoveFromWishlist={handleRemoveFromWishlist}
        onAddToCart={handleAddToCartQuick}
        onSelectProduct={handleOpenProductDetails}
        onClearWishlist={handleClearWishlist}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        onOrderCompleted={handleOrderCompleted}
      />

      {/* Live Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={SHOE_CASA_PRODUCTS}
        onSelectProduct={handleOpenProductDetails}
      />

      {/* Footwear Size Guide Modal */}
      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
      />

    </div>
  );
}
