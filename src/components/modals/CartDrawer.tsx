import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  ArrowRight, 
  MapPin, 
  Tag, 
  Sparkles 
} from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const CartDrawer: React.FC = () => {
  const { 
    isCartOpen, 
    setIsCartOpen, 
    cart, 
    removeFromCart, 
    updateQuantity, 
    clearCart,
    cartSubtotal, 
    deliveryFee, 
    cartTotal,
    location,
    setIsLocationOpen,
    showNotification
  } = useCart();

  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [couponApplied, setCouponApplied] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  if (!isCartOpen) return null;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === 'PARDOS10') {
      const disc = cartSubtotal * 0.10;
      setDiscount(disc);
      setCouponApplied(true);
      showNotification('¡Cupón PARDOS10 aplicado: 10% de descuento!');
    } else {
      showNotification('Cupón no válido. Prueba usando PARDOS10');
    }
  };

  const finalTotal = Math.max(0, cartTotal - discount);

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      clearCart();
      setIsCartOpen(false);
      showNotification('¡Pedido recibido con éxito! En breve comenzará su preparación.');
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      
      {/* Drawer Container */}
      <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-white z-10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-red-50 text-[#E3101B] flex items-center justify-center">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-black text-gray-900 text-lg uppercase">
                Mi Pedido
              </h3>
              <span className="text-[11px] text-gray-500 font-semibold block">
                {cart.length} {cart.length === 1 ? 'producto' : 'productos'} en la bolsa
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {cart.length > 0 && (
              <button
                type="button"
                onClick={clearCart}
                className="text-xs text-gray-400 hover:text-[#E3101B] font-bold p-1 transition-colors"
                title="Vaciar carrito"
              >
                Vaciar
              </button>
            )}
            <button
              type="button"
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Location Banner */}
        <div className="px-5 py-2.5 bg-neutral-50 border-b border-gray-100 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-gray-700 truncate mr-2">
            <MapPin className="w-3.5 h-3.5 text-[#E3101B] shrink-0" />
            <span className="truncate">
              <strong>{location.serviceType === 'delivery' ? 'Delivery a' : 'Recojo'}:</strong> {location.district}
            </span>
          </div>
          <button
            type="button"
            onClick={() => setIsLocationOpen(true)}
            className="text-[#E3101B] font-bold hover:underline shrink-0 text-[11px] uppercase tracking-wider"
          >
            Cambiar
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12 text-gray-400 space-y-4">
              <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center text-gray-300">
                <ShoppingBag className="w-10 h-10" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800 text-base uppercase">
                  Tu canasta está vacía
                </h4>
                <p className="text-xs text-gray-500 max-w-xs mt-1">
                  Parece que aún no has agregado nada delicioso de nuestra carta a la brasa.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsCartOpen(false)}
                className="bg-[#E3101B] hover:bg-[#B80D15] text-white px-6 py-3 rounded-xl font-black text-xs uppercase tracking-wider shadow-brand transition-all"
              >
                Explorar Nuestra Carta
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.product.id}
                className="flex items-center gap-3.5 p-3 rounded-2xl border border-gray-100 bg-white hover:border-gray-200 transition-colors shadow-2xs"
              >
                {/* Product Thumbnail */}
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-16 h-16 rounded-xl object-cover shrink-0"
                />

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-gray-900 text-sm truncate">
                    {item.product.name}
                  </h4>
                  {item.selectedOption && (
                    <span className="text-[11px] text-gray-500 block truncate">
                      {item.selectedOption}
                    </span>
                  )}
                  <span className="font-black text-[#E3101B] text-sm block mt-0.5">
                    S/ {(item.product.price * item.quantity).toFixed(2)}
                  </span>
                </div>

                {/* Quantity Controls & Remove */}
                <div className="flex flex-col items-end gap-1.5 shrink-0">
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.product.id)}
                    className="text-gray-300 hover:text-red-500 p-0.5 transition-colors"
                    title="Eliminar producto"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                  <div className="flex items-center border border-gray-200 rounded-lg bg-gray-50 p-0.5">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="p-1 text-gray-600 hover:text-black transition-colors"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-2 text-xs font-black text-gray-900 min-w-5 text-center">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="p-1 text-gray-600 hover:text-black transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Checkout Summary */}
        {cart.length > 0 && (
          <div className="p-5 border-t border-gray-100 bg-gray-50 space-y-4">
            
            {/* Promo Code Input */}
            <form onSubmit={handleApplyCoupon} className="flex gap-2">
              <div className="relative flex-1">
                <Tag className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Cupón: PARDOS10"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  disabled={couponApplied}
                  className="w-full pl-9 pr-3 py-2 bg-white border border-gray-200 rounded-xl text-xs uppercase font-bold focus:outline-none focus:border-[#E3101B]"
                />
              </div>
              <button
                type="submit"
                disabled={couponApplied || !couponCode}
                className="bg-neutral-800 hover:bg-neutral-900 disabled:opacity-50 text-white px-4 py-2 rounded-xl text-xs font-bold uppercase transition-colors"
              >
                {couponApplied ? 'Aplicado' : 'Canjear'}
              </button>
            </form>

            {/* Price breakdown */}
            <div className="space-y-1.5 text-xs text-gray-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-gray-900">S/ {cartSubtotal.toFixed(2)}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-emerald-600 font-bold">
                  <span>Descuento (PARDOS10)</span>
                  <span>- S/ {discount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Costo de Envío</span>
                <span className="font-semibold text-gray-900">
                  {deliveryFee > 0 ? `S/ ${deliveryFee.toFixed(2)}` : 'GRATIS'}
                </span>
              </div>
              <div className="pt-2 border-t border-gray-200 flex justify-between text-base font-black text-gray-900">
                <span>Total a Pagar</span>
                <span className="text-xl text-[#E3101B]">S/ {finalTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Action CTA */}
            <button
              type="button"
              onClick={handleCheckout}
              disabled={isCheckingOut}
              className="w-full bg-[#E3101B] hover:bg-[#B80D15] active:scale-98 text-white py-3.5 rounded-2xl font-black text-sm uppercase tracking-wider shadow-brand transition-all flex items-center justify-center gap-2"
            >
              {isCheckingOut ? (
                <>
                  <Sparkles className="w-4 h-4 animate-spin text-[#FAC914]" />
                  <span>Procesando tu pedido...</span>
                </>
              ) : (
                <>
                  <span>Continuar al Pago</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        )}

      </div>

      {/* Backdrop click area */}
      <div className="flex-1" onClick={() => setIsCartOpen(false)} />
    </div>
  );
};
