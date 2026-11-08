import React from 'react';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/layout/Navbar';
import { HeroSlider } from './components/home/HeroSlider';
import { BentoGrid } from './components/home/BentoGrid';
import { Footer } from './components/layout/Footer';
import { FloatingButtons } from './components/layout/FloatingButtons';
import { LocationModal } from './components/modals/LocationModal';
import { CartDrawer } from './components/modals/CartDrawer';
import { SearchModal } from './components/modals/SearchModal';
import { ProductQuickView } from './components/modals/ProductQuickView';
import { LoginModal } from './components/modals/LoginModal';

const MainContent: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FA] text-[#1D1B20] selection:bg-[#E3101B] selection:text-white">
      {/* Sticky Navbar Oficial */}
      <Navbar />

      {/* Main Content: Hero Banner Carousel + Bento Grid de 11 Categorías */}
      <main className="flex-1">
        {/* Hero Slider Swiper con los 4 Banners oficiales responsive */}
        <HeroSlider />

        {/* Bento Grid Oficial de 11 Categorías */}
        <BentoGrid />
      </main>

      {/* Footer Oficial */}
      <Footer />

      {/* Elementos Flotantes e Interactivos */}
      <FloatingButtons />
      <LocationModal />
      <CartDrawer />
      <SearchModal />
      <ProductQuickView />
      <LoginModal />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <CartProvider>
      <MainContent />
    </CartProvider>
  );
};

export default App;
