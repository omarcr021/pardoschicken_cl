import React, { useState } from 'react';
import { 
  MapPin, 
  Search, 
  ShoppingBag, 
  User, 
  Menu, 
  X, 
  ChevronDown
} from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { CATEGORIES } from '../../data/categories';

export const Navbar: React.FC = () => {
  const { 
    cartCount, 
    setIsCartOpen, 
    setIsLocationOpen, 
    setIsSearchOpen, 
    setIsLoginOpen,
    location 
  } = useCart();

  const [showLocationTooltip, setShowLocationTooltip] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoriesDropdownOpen, setIsCategoriesDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-white shadow-md">
      {/* Main Navigation Bar */}
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 h-16 lg:h-20 flex items-center justify-between gap-4">
        
        {/* Left section: Hamburger (Mobile) + Logo + Location Selector */}
        <div className="flex items-center gap-3 lg:gap-6">
          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-1.5 rounded-lg text-gray-800 hover:bg-gray-100 transition-colors focus:outline-none"
            aria-label="Menú principal"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Official Pardos Logo */}
          <a href="#" className="flex items-center shrink-0">
            <img
              src="https://www.pardoschicken.pe/assets/images/pardos.svg"
              alt="Pardos Chicken"
              className="h-10 sm:h-12 lg:h-14 w-auto"
            />
            <span className="sr-only">Pardos Chicken</span>
          </a>

          {/* Location / Delivery Selector */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsLocationOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition-all text-xs sm:text-sm font-semibold text-gray-800 shadow-2xs"
            >
              <MapPin className="w-4 h-4 text-[#E3101B] shrink-0" />
              <span className="hidden sm:inline">Entregar a</span>
              <span className="font-bold text-gray-900 truncate max-w-[110px] sm:max-w-none">
                {location.district}
              </span>
              <ChevronDown className="w-4 h-4 text-gray-500 ml-0.5 shrink-0" />
            </button>

            {/* Official Floating Tooltip: "¿No es tu ubicación? Cámbiala aquí" */}
            {showLocationTooltip && (
              <div className="absolute top-full left-0 mt-2 z-40 w-64 p-3 bg-white border border-gray-200 rounded-xl shadow-xl animate-fade-in hidden md:block">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-xs text-gray-700 leading-snug">
                    ¿No es tu ubicación?{' '}
                    <button
                      onClick={() => {
                        setShowLocationTooltip(false);
                        setIsLocationOpen(true);
                      }}
                      className="text-[#E3101B] font-bold underline hover:text-[#B80D15]"
                    >
                      Cámbiala aquí
                    </button>
                  </p>
                  <button
                    onClick={() => setShowLocationTooltip(false)}
                    className="text-gray-400 hover:text-gray-600 p-0.5"
                    aria-label="Cerrar"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Center Links (Desktop only) */}
        <nav className="hidden lg:flex items-center gap-8 font-semibold text-[13px] tracking-wide text-gray-800 uppercase">
          <a
            href="#promociones"
            className="hover:text-[#E3101B] transition-colors py-2"
          >
            Promociones
          </a>

          {/* Categories dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsCategoriesDropdownOpen(true)}
            onMouseLeave={() => setIsCategoriesDropdownOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 hover:text-[#E3101B] transition-colors py-2 uppercase"
            >
              Categorías
              <ChevronDown className={`w-4 h-4 transition-transform ${isCategoriesDropdownOpen ? 'rotate-180 text-[#E3101B]' : ''}`} />
            </button>

            {isCategoriesDropdownOpen && (
              <div className="absolute top-full -left-12 w-[520px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 grid grid-cols-2 gap-2 z-50 animate-in fade-in duration-150">
                {CATEGORIES.map(cat => (
                  <a
                    key={cat.id}
                    href={`#${cat.slug}`}
                    onClick={() => setIsCategoriesDropdownOpen(false)}
                    className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50 transition-colors group"
                  >
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-11 h-11 rounded-lg object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="text-left">
                      <span className="font-semibold text-gray-900 group-hover:text-[#E3101B] text-xs uppercase block">
                        {cat.name}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>

          <a
            href="https://www.pardoschicken.pe/carta-salon"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-[#E3101B] transition-colors py-2"
          >
            Carta Salón
            <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
          </a>
        </nav>

        {/* Right section: Search bar + Cart + Login button */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Pill Search Input/Button: "¿Qué se te antoja?" */}
          <button
            type="button"
            onClick={() => setIsSearchOpen(true)}
            className="flex items-center gap-2.5 bg-white border border-gray-200 hover:border-gray-300 text-gray-500 rounded-full ps-3.5 pe-4 h-9 sm:h-10 text-xs sm:text-sm font-medium transition-all shadow-2xs"
          >
            <Search className="w-4 h-4 text-gray-400" />
            <span className="hidden md:inline text-gray-500">¿Qué se te antoja?</span>
          </button>

          {/* Shopping Bag / MI PEDIDO */}
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-2 px-2.5 sm:px-3 py-2 rounded-full hover:bg-gray-100 text-gray-800 transition-colors"
            aria-label="Abrir mi pedido"
          >
            <div className="relative">
              <ShoppingBag className="w-5 h-5 text-gray-800" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-[#E3101B] text-white text-[11px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-xs">
                  {cartCount}
                </span>
              )}
            </div>
            <span className="hidden xl:inline text-xs font-bold uppercase tracking-wider text-gray-800">
              Mi Pedido
            </span>
          </button>

          {/* INGRESAR button (#E3101B) */}
          <button
            type="button"
            onClick={() => setIsLoginOpen(true)}
            className="flex items-center gap-1.5 bg-[#E3101B] hover:bg-[#B80D15] text-white px-4 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm transition-all active:scale-95"
          >
            <User className="w-4 h-4" />
            <span>Ingresar</span>
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 z-50 bg-black/60 backdrop-blur-xs flex">
          <div className="w-4/5 max-w-sm bg-white h-full shadow-2xl p-6 overflow-y-auto flex flex-col justify-between animate-in slide-in-from-left duration-200">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <span className="text-xs uppercase font-extrabold tracking-widest text-gray-400">
                  Navegación
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1 rounded-md text-gray-500 hover:bg-gray-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col space-y-3 font-bold text-gray-800">
                <a
                  href="#promociones"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-2.5 px-3 rounded-lg hover:bg-red-50 hover:text-[#E3101B]"
                >
                  PROMOCIONES
                </a>
                <a
                  href="#categorias"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-2.5 px-3 rounded-lg hover:bg-red-50 hover:text-[#E3101B]"
                >
                  CATEGORÍAS
                </a>
                <a
                  href="https://www.pardoschicken.pe/carta-salon"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-2.5 px-3 rounded-lg hover:bg-red-50 hover:text-[#E3101B]"
                >
                  CARTA SALÓN
                </a>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <span className="text-xs uppercase font-extrabold tracking-widest text-gray-400 block mb-3">
                  Categorías de Carta
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {CATEGORIES.map(c => (
                    <a
                      key={c.id}
                      href={`#${c.slug}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="p-2 rounded-lg bg-gray-50 hover:bg-red-50 text-gray-700 hover:text-[#E3101B] font-medium"
                    >
                      {c.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1" onClick={() => setIsMobileMenuOpen(false)} />
        </div>
      )}
    </header>
  );
};
