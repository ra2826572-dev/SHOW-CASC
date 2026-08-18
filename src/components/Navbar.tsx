import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  Heart, 
  Search, 
  Menu, 
  X, 
  Phone, 
  MapPin, 
  Clock, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { STORE_INFO } from '../data/storeInfo';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenSearch: () => void;
  onOpenSizeGuide: () => void;
  currentView: string;
  onNavigate: (view: string, filterCategory?: string, gender?: 'all' | 'men' | 'women') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenSearch,
  onOpenSizeGuide,
  currentView,
  onNavigate,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (view: string, filterCategory?: string, gender?: 'all' | 'men' | 'women') => {
    onNavigate(view, filterCategory, gender);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Notification Announcement Bar */}
      <div 
        id="announcement-bar" 
        className="bg-[#151518] border-b border-[#28272d] text-[#c9c5ba] text-xs py-2 px-4"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 bg-[#d4af37]/15 text-[#f5dfa2] text-[11px] font-semibold px-2.5 py-0.5 rounded-full border border-[#d4af37]/30">
              <Sparkles className="w-3 h-3 text-[#d4af37]" /> FAISALABAD BOUTIQUE
            </span>
            <span className="hidden md:inline text-neutral-400">|</span>
            <span className="hidden md:inline">Regent Mall, Chen One Rd • Open Daily 11:00 AM – 11:00 PM</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-[#e0ded8]">
            <a 
              href={`https://wa.me/${STORE_INFO.whatsappInternational}?text=${encodeURIComponent('Hello SHOE CASA, I would like to inquire about your footwear collection.')}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#d4af37] transition-colors flex items-center gap-1.5 font-medium"
            >
              <Phone className="w-3 h-3 text-[#25D366]" />
              <span>WhatsApp: <strong className="text-white">{STORE_INFO.phoneDisplay}</strong></span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav 
        id="main-navbar" 
        className={`w-full transition-all duration-300 border-b ${
          isScrolled 
            ? 'bg-[#0c0c0e]/95 backdrop-blur-md border-[#232228] shadow-2xl py-3.5' 
            : 'bg-[#0c0c0e] border-[#1f1e24] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center lg:hidden">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 -ml-2 text-neutral-300 hover:text-[#d4af37] focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <button
              id="brand-logo-btn"
              onClick={() => handleNavClick('home')}
              className="text-left group flex items-center cursor-pointer"
            >
              <BrandLogo size="md" />
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <button
              id="nav-link-home"
              onClick={() => handleNavClick('home')}
              className={`px-3 py-2 text-xs xl:text-sm font-medium tracking-wide uppercase transition-colors rounded-md ${
                currentView === 'home' 
                  ? 'text-[#f5dfa2] bg-[#1a191f] border border-[#d4af37]/30' 
                  : 'text-neutral-300 hover:text-[#f5dfa2] hover:bg-[#151419]'
              }`}
            >
              Home
            </button>

            <button
              id="nav-link-shop"
              onClick={() => handleNavClick('shop')}
              className={`px-3 py-2 text-xs xl:text-sm font-medium tracking-wide uppercase transition-colors rounded-md ${
                currentView === 'shop' 
                  ? 'text-[#f5dfa2] bg-[#1a191f] border border-[#d4af37]/30' 
                  : 'text-neutral-300 hover:text-[#f5dfa2] hover:bg-[#151419]'
              }`}
            >
              Shop
            </button>

            <button
              id="nav-link-men"
              onClick={() => handleNavClick('shop', undefined, 'men')}
              className="px-3 py-2 text-xs xl:text-sm font-medium tracking-wide uppercase text-neutral-300 hover:text-[#f5dfa2] hover:bg-[#151419] transition-colors rounded-md"
            >
              Men
            </button>

            <button
              id="nav-link-women"
              onClick={() => handleNavClick('shop', undefined, 'women')}
              className="px-3 py-2 text-xs xl:text-sm font-medium tracking-wide uppercase text-neutral-300 hover:text-[#f5dfa2] hover:bg-[#151419] transition-colors rounded-md"
            >
              Women
            </button>

            <button
              id="nav-link-new-arrivals"
              onClick={() => {
                if (currentView !== 'home') {
                  handleNavClick('home');
                  setTimeout(() => {
                    document.getElementById('new-arrivals-section')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                } else {
                  document.getElementById('new-arrivals-section')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-3 py-2 text-xs xl:text-sm font-medium tracking-wide uppercase text-neutral-300 hover:text-[#f5dfa2] hover:bg-[#151419] transition-colors rounded-md"
            >
              New Arrivals
            </button>

            <button
              id="nav-link-best-sellers"
              onClick={() => {
                if (currentView !== 'home') {
                  handleNavClick('home');
                  setTimeout(() => {
                    document.getElementById('best-sellers-section')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                } else {
                  document.getElementById('best-sellers-section')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-3 py-2 text-xs xl:text-sm font-medium tracking-wide uppercase text-neutral-300 hover:text-[#f5dfa2] hover:bg-[#151419] transition-colors rounded-md"
            >
              Best Sellers
            </button>

            <button
              id="nav-link-about"
              onClick={() => {
                if (currentView !== 'home') {
                  handleNavClick('home');
                  setTimeout(() => {
                    document.getElementById('store-experience-section')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                } else {
                  document.getElementById('store-experience-section')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-3 py-2 text-xs xl:text-sm font-medium tracking-wide uppercase text-neutral-300 hover:text-[#f5dfa2] hover:bg-[#151419] transition-colors rounded-md"
            >
              About Us
            </button>

            <button
              id="nav-link-contact"
              onClick={() => {
                if (currentView !== 'home') {
                  handleNavClick('home');
                  setTimeout(() => {
                    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                } else {
                  document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-3 py-2 text-xs xl:text-sm font-medium tracking-wide uppercase text-neutral-300 hover:text-[#f5dfa2] hover:bg-[#151419] transition-colors rounded-md"
            >
              Contact
            </button>
          </div>

          {/* Right Action Icons (Search, Wishlist, Bag) */}
          <div className="flex items-center space-x-1 sm:space-x-3">
            {/* Search Button */}
            <button
              id="nav-search-btn"
              onClick={onOpenSearch}
              className="p-2 text-neutral-300 hover:text-[#f5dfa2] hover:bg-[#18171d] rounded-full transition-colors relative"
              aria-label="Search shoes"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Wishlist Button */}
            <button
              id="nav-wishlist-btn"
              onClick={onOpenWishlist}
              className="p-2 text-neutral-300 hover:text-[#f5dfa2] hover:bg-[#18171d] rounded-full transition-colors relative"
              aria-label="View wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-[#d4af37] text-[#0c0c0e] font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center shadow">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Shopping Cart Button */}
            <button
              id="nav-cart-btn"
              onClick={onOpenCart}
              className="flex items-center gap-2 bg-[#1b1a20] hover:bg-[#25242c] text-neutral-200 hover:text-white px-3 py-2 rounded-lg border border-[#302e38] hover:border-[#d4af37]/50 transition-all group"
              aria-label="Open shopping cart"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5 text-[#d4af37] group-hover:scale-110 transition-transform" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gradient-to-r from-[#d4af37] to-[#aa820a] text-[#0c0c0e] font-extrabold text-[10px] w-4 h-4 rounded-full flex items-center justify-center shadow-lg">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline text-xs font-semibold uppercase tracking-wider text-neutral-300 group-hover:text-white">
                Bag
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div 
            id="mobile-nav-drawer" 
            className="lg:hidden bg-[#111015] border-b border-[#26242c] px-4 pt-4 pb-6 space-y-3 animate-in slide-in-from-top-4 duration-200"
          >
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-[#212027]">
              <button
                onClick={() => handleNavClick('shop', undefined, 'men')}
                className="flex items-center justify-between p-3 bg-[#191820] rounded-lg border border-[#2b2a33] text-left hover:border-[#d4af37]/50"
              >
                <div>
                  <div className="text-xs text-[#d4af37] font-semibold uppercase tracking-wider">Men</div>
                  <div className="text-sm font-medium text-white">All Footwear</div>
                </div>
                <ChevronRight className="w-4 h-4 text-neutral-500" />
              </button>
              <button
                onClick={() => handleNavClick('shop', undefined, 'women')}
                className="flex items-center justify-between p-3 bg-[#191820] rounded-lg border border-[#2b2a33] text-left hover:border-[#d4af37]/50"
              >
                <div>
                  <div className="text-xs text-[#d4af37] font-semibold uppercase tracking-wider">Women</div>
                  <div className="text-sm font-medium text-white">Ladies Chappals & Flats</div>
                </div>
                <ChevronRight className="w-4 h-4 text-neutral-500" />
              </button>
            </div>

            <div className="flex flex-col space-y-1">
              <button
                onClick={() => handleNavClick('home')}
                className={`flex items-center justify-between py-2.5 px-3 rounded-md text-sm font-medium ${
                  currentView === 'home' ? 'text-[#d4af37] bg-[#1a1922]' : 'text-neutral-300'
                }`}
              >
                <span>Home</span>
                <ChevronRight className="w-4 h-4 text-neutral-600" />
              </button>
              <button
                onClick={() => handleNavClick('shop')}
                className={`flex items-center justify-between py-2.5 px-3 rounded-md text-sm font-medium ${
                  currentView === 'shop' ? 'text-[#d4af37] bg-[#1a1922]' : 'text-neutral-300'
                }`}
              >
                <span>Explore Full Shop</span>
                <ChevronRight className="w-4 h-4 text-neutral-600" />
              </button>
              <button
                onClick={() => {
                  handleNavClick('home');
                  setTimeout(() => {
                    document.getElementById('new-arrivals-section')?.scrollIntoView({ behavior: 'smooth' });
                  }, 150);
                }}
                className="flex items-center justify-between py-2.5 px-3 rounded-md text-sm font-medium text-neutral-300"
              >
                <span>New Arrivals</span>
                <ChevronRight className="w-4 h-4 text-neutral-600" />
              </button>
              <button
                onClick={() => {
                  handleNavClick('home');
                  setTimeout(() => {
                    document.getElementById('best-sellers-section')?.scrollIntoView({ behavior: 'smooth' });
                  }, 150);
                }}
                className="flex items-center justify-between py-2.5 px-3 rounded-md text-sm font-medium text-neutral-300"
              >
                <span>Best Sellers</span>
                <ChevronRight className="w-4 h-4 text-neutral-600" />
              </button>
              <button
                onClick={() => {
                  handleNavClick('home');
                  setTimeout(() => {
                    document.getElementById('store-experience-section')?.scrollIntoView({ behavior: 'smooth' });
                  }, 150);
                }}
                className="flex items-center justify-between py-2.5 px-3 rounded-md text-sm font-medium text-neutral-300"
              >
                <span>Visit Store (Regent Mall)</span>
                <MapPin className="w-4 h-4 text-[#d4af37]" />
              </button>
              <button
                onClick={() => {
                  handleNavClick('home');
                  setTimeout(() => {
                    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
                  }, 150);
                }}
                className="flex items-center justify-between py-2.5 px-3 rounded-md text-sm font-medium text-neutral-300"
              >
                <span>Contact & Location</span>
                <ChevronRight className="w-4 h-4 text-neutral-600" />
              </button>
            </div>

            <div className="pt-3 border-t border-[#212027] flex items-center justify-between text-xs text-neutral-400">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#d4af37]" /> Open 11 AM - 11 PM
              </span>
              <a
                href={`https://wa.me/${STORE_INFO.whatsappInternational}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25D366] font-semibold flex items-center gap-1"
              >
                <Phone className="w-3.5 h-3.5" /> 0346-7373236
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
