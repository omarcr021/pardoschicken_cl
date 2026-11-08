import React from 'react';
import { CATEGORIES } from '../../data/categories';

interface BentoGridProps {
  onSelectCategory?: (categorySlug: string) => void;
}

export const BentoGrid: React.FC<BentoGridProps> = ({ onSelectCategory }) => {
  return (
    <section id="categorias" className="py-4 lg:py-6 bg-[#F8F9FA]">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bento Grid: Items 1 to 8 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:bento-grid gap-4">
          {CATEGORIES.slice(0, 8).map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.slug}`}
              onClick={(e) => {
                if (onSelectCategory) {
                  e.preventDefault();
                  onSelectCategory(cat.slug);
                }
              }}
              className={`relative group overflow-hidden rounded-xl shadow-md block bg-neutral-900 ${cat.bentoClass}`}
            >
              {/* Category Background Image */}
              <img
                src={cat.image}
                alt={cat.name}
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300 ease-out will-change-transform"
              />

              {/* Bottom Gradient Overlay with Category Title */}
              <div className="absolute bottom-0 h-32 w-full bg-gradient-to-t from-black/90 to-transparent p-4 flex flex-col-reverse z-10 pointer-events-none">
                <h3 className="text-xl font-semibold text-white uppercase tracking-wide">
                  {cat.name}
                </h3>
              </div>
            </a>
          ))}
        </div>

        {/* 5th Row: 3 Columns for Items 9, 10, 11 (Adicionales, Bebidas, Postres) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {CATEGORIES.slice(8).map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.slug}`}
              onClick={(e) => {
                if (onSelectCategory) {
                  e.preventDefault();
                  onSelectCategory(cat.slug);
                }
              }}
              className="relative group overflow-hidden rounded-xl shadow-md block bg-neutral-900 h-[260px] lg:h-[350px]"
            >
              <img
                src={cat.image}
                alt={cat.name}
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300 ease-out will-change-transform"
              />

              <div className="absolute bottom-0 h-32 w-full bg-gradient-to-t from-black/90 to-transparent p-4 flex flex-col-reverse z-10 pointer-events-none">
                <h3 className="text-xl font-semibold text-white uppercase tracking-wide">
                  {cat.name}
                </h3>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
