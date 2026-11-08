import React, { useState, useEffect } from 'react';
import { ArrowUp, CheckCircle2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { PardosChatbot } from '../chat/PardosChatbot';

export const FloatingButtons: React.FC = () => {
  const { notification } = useCart();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Toast Notification Banner */}
      {notification && (
        <div className="fixed top-20 right-4 sm:right-8 z-50 animate-bounce transition-all">
          <div className="bg-[#1D1B20] text-white px-5 py-3 rounded-2xl shadow-2xl border-2 border-[#FAC914] flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#FAC914] shrink-0" />
            <p className="font-bold text-sm">{notification}</p>
          </div>
        </div>
      )}

      {/* Floating Action Buttons container (Bottom-Right) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        
        {/* Scroll to Top */}
        {showScrollTop && (
          <button
            type="button"
            onClick={scrollToTop}
            className="w-11 h-11 rounded-full bg-white text-gray-800 shadow-xl border border-gray-200 flex items-center justify-center hover:bg-gray-100 hover:text-[#E3101B] hover:scale-110 active:scale-95 transition-all"
            title="Volver arriba"
            aria-label="Volver arriba"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* PardoBot Interactive Chatbot FAB (Pardos Chicken theme) */}
        <PardosChatbot />

      </div>
    </>
  );
};
