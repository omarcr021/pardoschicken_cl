import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Product, CartItem, LocationInfo } from '../types';
import confetti from 'canvas-confetti';

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number, selectedOption?: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartSubtotal: number;
  deliveryFee: number;
  cartTotal: number;
  // Modals state
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isLocationOpen: boolean;
  setIsLocationOpen: (open: boolean) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  isLoginOpen: boolean;
  setIsLoginOpen: (open: boolean) => void;
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product | null) => void;
  // Location
  location: LocationInfo;
  setLocation: (loc: LocationInfo) => void;
  // Notification toast
  notification: string | null;
  showNotification: (msg: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'pardos_cart_items';
const LOCAL_STORAGE_LOC_KEY = 'pardos_user_location';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [location, setLocationState] = useState<LocationInfo>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_LOC_KEY);
      return saved ? JSON.parse(saved) : {
        district: 'Miraflores',
        address: 'Av. Alfredo Benavides 730',
        serviceType: 'delivery'
      };
    } catch {
      return {
        district: 'Miraflores',
        address: 'Av. Alfredo Benavides 730',
        serviceType: 'delivery'
      };
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [notification, setNotification] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  const setLocation = (loc: LocationInfo) => {
    setLocationState(loc);
    try {
      localStorage.setItem(LOCAL_STORAGE_LOC_KEY, JSON.stringify(loc));
    } catch (e) {
      console.error(e);
    }
  };

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => {
      setNotification((prev) => (prev === msg ? null : prev));
    }, 3200);
  };

  const addToCart = (product: Product, quantity = 1, selectedOption?: string) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity, selectedOption }];
    });

    showNotification(`¡${product.name} añadido a tu pedido!`);

    // Subtle celebratory confetti
    try {
      confetti({
        particleCount: 28,
        spread: 60,
        origin: { y: 0.85, x: 0.8 },
        colors: ['#E3101B', '#FAC914', '#ffffff']
      });
    } catch {
      // ignore
    }
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartSubtotal = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
  const deliveryFee = cart.length > 0 && location.serviceType === 'delivery' ? 6.50 : 0;
  const cartTotal = cartSubtotal + deliveryFee;

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartSubtotal,
        deliveryFee,
        cartTotal,
        isCartOpen,
        setIsCartOpen,
        isLocationOpen,
        setIsLocationOpen,
        isSearchOpen,
        setIsSearchOpen,
        isLoginOpen,
        setIsLoginOpen,
        selectedProduct,
        setSelectedProduct,
        location,
        setLocation,
        notification,
        showNotification
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
