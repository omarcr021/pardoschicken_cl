import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle, CheckCircle2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const FloatingButtons: React.FC = () => {
  const { notification } = useCart();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showWhatsAppTooltip, setShowWhatsAppTooltip] = useState(false);

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

        {/* WhatsApp Official Button */}
        <div 
          className="relative group"
          onMouseEnter={() => setShowWhatsAppTooltip(true)}
          onMouseLeave={() => setShowWhatsAppTooltip(false)}
        >
          {showWhatsAppTooltip && (
            <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-gray-800 px-3.5 py-2 rounded-xl shadow-xl text-xs font-bold whitespace-nowrap border border-gray-100 hidden sm:block">
              ¿Deseas pedir por WhatsApp?
              <div className="text-[10px] text-[#25D366] font-extrabold uppercase">Atención Inmediata</div>
            </div>
          )}

          <a
            href="https://uqr.to/WhatssappPardos"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all group-hover:shadow-[0_0_20px_rgba(37,211,102,0.6)]"
            aria-label="Pide por WhatsApp"
          >
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400"></span>
            </span>
            <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
          </a>
        </div>

      </div>
    </>
  );
};
