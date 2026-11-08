import React, { useState } from 'react';
import { X, Plus, Minus, ShoppingBag, Users, Check } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const ProductQuickView: React.FC = () => {
  const { selectedProduct, setSelectedProduct, addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedSide, setSelectedSide] = useState('Papas Fritas y Ensalada Fresca');
  const [notes, setNotes] = useState('');

  if (!selectedProduct) return null;

  const handleAdd = () => {
    addToCart(selectedProduct, quantity, selectedSide);
    setSelectedProduct(null);
    setQuantity(1);
    setNotes('');
  };

  const sides = [
    'Papas Fritas y Ensalada Fresca',
    'Papas Fritas y Ensalada Cocida',
    'Doble Papas Fritas',
    'Doble Ensalada Fresca'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
        role="dialog"
      >
        {/* Header with image */}
        <div className="relative aspect-16/9 bg-neutral-900 overflow-hidden">
          <img
            src={selectedProduct.image}
            alt={selectedProduct.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
          
          <button
            type="button"
            onClick={() => setSelectedProduct(null)}
            className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/50 text-white hover:bg-black/80 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-5 right-5 text-white">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#FAC914] block">
              {selectedProduct.category}
            </span>
            <h3 className="text-2xl font-black uppercase">
              {selectedProduct.name}
            </h3>
          </div>
        </div>

        {/* Details & Customizations */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          <div>
            <p className="text-sm text-gray-600 leading-relaxed">
              {selectedProduct.description}
            </p>
            {selectedProduct.serves && (
              <div className="flex items-center gap-1.5 mt-2 text-xs font-bold text-gray-500">
                <Users className="w-4 h-4 text-[#E3101B]" />
                <span>Rinde para: {selectedProduct.serves}</span>
              </div>
            )}
          </div>

          {/* Option Selection */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2.5">
              Elige tu Guarnición / Acompañamiento
            </label>
            <div className="space-y-2">
              {sides.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setSelectedSide(opt)}
                  className={`w-full flex items-center justify-between p-3 rounded-xl border text-xs font-semibold transition-all ${
                    selectedSide === opt
                      ? 'border-[#E3101B] bg-red-50/50 text-gray-900'
                      : 'border-gray-200 hover:border-gray-300 text-gray-700'
                  }`}
                >
                  <span>{opt}</span>
                  {selectedSide === opt && (
                    <div className="w-5 h-5 rounded-full bg-[#E3101B] text-white flex items-center justify-center">
                      <Check className="w-3 h-3" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Instructions input */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
              Instrucciones Especiales (Opcional)
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Ej: Ají y vinagreta extra, presa parte pecho por favor..."
              className="w-full text-xs p-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#E3101B]"
            />
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-5 border-t border-gray-100 bg-gray-50 flex items-center justify-between gap-4">
          {/* Quantity Controls */}
          <div className="flex items-center border border-gray-300 rounded-xl bg-white p-1">
            <button
              type="button"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-2 text-gray-600 hover:text-black transition-colors"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="px-3 text-sm font-black text-gray-900 min-w-7 text-center">
              {quantity}
            </span>
            <button
              type="button"
              onClick={() => setQuantity(quantity + 1)}
              className="p-2 text-gray-600 hover:text-black transition-colors"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          {/* Add CTA */}
          <button
            type="button"
            onClick={handleAdd}
            className="flex-1 bg-[#E3101B] hover:bg-[#B80D15] text-white py-3.5 px-6 rounded-2xl font-black text-xs uppercase tracking-wider shadow-brand transition-all flex items-center justify-center gap-2 active:scale-98"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Agregar • S/ {(selectedProduct.price * quantity).toFixed(2)}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
