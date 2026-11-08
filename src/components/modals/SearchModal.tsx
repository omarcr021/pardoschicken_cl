import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Plus, Sparkles } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { PRODUCTS } from '../../data/products';

export const SearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, addToCart, setSelectedProduct } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setSearchTerm('');
    }
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  const filtered = PRODUCTS.filter((item) => {
    if (!searchTerm.trim()) return false;
    const term = searchTerm.toLowerCase();
    return (
      item.name.toLowerCase().includes(term) ||
      item.category.toLowerCase().includes(term) ||
      item.description.toLowerCase().includes(term)
    );
  });

  const popularSearches = ['Pollo Brasa', 'Sánguche', 'Anticuchos', 'Chicha Morada', 'Ensalada'];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col max-h-[80vh] animate-in slide-in-from-top-4 duration-200"
        role="dialog"
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-gray-100 flex items-center gap-3">
          <Search className="w-5 h-5 text-[#E3101B] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="¿Qué se te antoja hoy? (ej. Pollo, Sánguche, Anticuchos...)"
            className="w-full text-base sm:text-lg font-bold text-gray-900 placeholder:text-gray-400 focus:outline-none"
          />
          {searchTerm && (
            <button
              type="button"
              onClick={() => setSearchTerm('')}
              className="p-1 rounded-full text-gray-400 hover:text-black"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="button"
            onClick={() => setIsSearchOpen(false)}
            className="p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-black transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Popular Tags */}
        <div className="px-5 py-3 bg-gray-50 border-b border-gray-100 flex items-center gap-2 overflow-x-auto scrollbar-none text-xs">
          <span className="text-gray-400 font-bold uppercase tracking-wider shrink-0 text-[10px]">
            Búsquedas top:
          </span>
          {popularSearches.map((term) => (
            <button
              key={term}
              type="button"
              onClick={() => setSearchTerm(term)}
              className="px-3 py-1 rounded-full bg-white border border-gray-200 hover:border-[#E3101B] text-gray-700 hover:text-[#E3101B] font-semibold transition-colors shrink-0"
            >
              {term}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="p-5 overflow-y-auto flex-1 space-y-3">
          {!searchTerm ? (
            <div className="py-12 text-center text-gray-400">
              <Sparkles className="w-10 h-10 text-[#FAC914] mx-auto mb-2" />
              <p className="text-sm font-semibold text-gray-600">
                Escribe el plato o acompañamiento que buscas
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Puedes buscar por nombre de producto o categoría.
              </p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="py-12 text-center text-gray-400">
              <p className="text-sm font-bold text-gray-700">
                No encontramos resultados para "{searchTerm}"
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Intenta con otros términos como "Brasa", "Parrilleros" o "Postres".
              </p>
            </div>
          ) : (
            filtered.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between p-3 rounded-2xl hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all gap-4"
              >
                <div 
                  className="flex items-center gap-3.5 flex-1 min-w-0 cursor-pointer"
                  onClick={() => {
                    setIsSearchOpen(false);
                    setSelectedProduct(product);
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-14 h-14 rounded-xl object-cover shrink-0"
                  />
                  <div className="min-w-0">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">
                      {product.category}
                    </span>
                    <h4 className="font-bold text-gray-900 text-sm truncate">
                      {product.name}
                    </h4>
                    <span className="text-sm font-black text-[#E3101B]">
                      S/ {product.price.toFixed(2)}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => addToCart(product, 1)}
                  className="bg-[#E3101B] hover:bg-[#B80D15] active:scale-95 text-white px-3.5 py-2 rounded-xl text-xs font-bold uppercase flex items-center gap-1.5 shadow-sm"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Agregar</span>
                </button>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};
