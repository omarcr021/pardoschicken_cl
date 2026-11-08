import React, { useState } from 'react';
import { Phone, ChevronDown } from 'lucide-react';

interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'NOSOTROS',
    links: [
      { label: 'Historia', href: '#' },
      { label: 'Visión', href: '#' },
      { label: 'Valores', href: '#' },
      { label: 'Restaurantes', href: '#' },
    ]
  },
  {
    title: 'SERVICIOS',
    links: [
      { label: 'Reservas', href: '#' },
      { label: 'Catering', href: '#' },
      { label: 'Fiestas infantiles', href: '#' },
      { label: 'Vales y Giftcards', href: '#' },
    ]
  },
  {
    title: 'INFORMACIÓN ADICIONAL',
    links: [
      { label: 'Valores nutricionales', href: '#' },
      { label: 'Cartilla de alérgenos', href: '#' },
    ]
  },
  {
    title: 'POLÍTICAS Y TÉRMINOS',
    links: [
      { label: 'Políticas de privacidad', href: '#' },
      { label: 'Términos y condiciones', href: '#' },
      { label: 'Términos y condiciones promociones comerciales', href: '#' },
      { label: 'Términos y condiciones vales y giftcard', href: '#' },
      { label: 'Política de cookies', href: '#' },
    ]
  },
  {
    title: 'CONTÁCTANOS',
    links: [
      { label: 'Escríbenos', href: '#' },
      { label: 'Trabaja con nosotros', href: '#' },
      { label: 'Portal de proveedores', href: '#' },
    ]
  }
];

export const Footer: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (title: string) => {
    setOpenAccordion(openAccordion === title ? null : title);
  };

  return (
    <footer className="bg-[#1D1B20] text-gray-300 pt-12 pb-6 border-t border-gray-800">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 5 Column Grid (Desktop) / Accordion (Mobile) + Libro de Reclamaciones */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 pb-10 border-b border-gray-800">
          
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title} className="lg:col-span-1">
              {/* Desktop Header */}
              <h4 className="hidden lg:block text-xs font-bold uppercase tracking-wider text-white mb-4">
                {col.title}
              </h4>

              {/* Mobile Accordion Header */}
              <button
                type="button"
                onClick={() => toggleAccordion(col.title)}
                className="lg:hidden flex items-center justify-between w-full py-2.5 text-xs font-bold uppercase tracking-wider text-white border-b border-gray-800/80"
              >
                <span>{col.title}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    openAccordion === col.title ? 'rotate-180 text-[#E3101B]' : 'text-gray-400'
                  }`}
                />
              </button>

              {/* Links list */}
              <ul
                className={`space-y-2 text-xs text-gray-400 mt-2.5 ${
                  openAccordion === col.title ? 'block' : 'hidden lg:block'
                }`}
              >
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="hover:text-white transition-colors block py-0.5"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* 6th column: Libro de Reclamaciones */}
          <div className="lg:col-span-1 flex flex-col items-start space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-2">
              LIBRO DE RECLAMACIONES
            </h4>
            <a
              href="https://reclamaciones.pardoschicken.pe/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:opacity-90 transition-opacity"
              title="Libro de Reclamaciones"
            >
              <img
                src="https://www.pardoschicken.pe/assets/images/libro.jpg"
                alt="Libro de Reclamaciones"
                className="h-16 w-auto rounded object-contain"
              />
            </a>
          </div>

        </div>

        {/* Call Center & Social Media */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-6 border-b border-gray-800">
          
          {/* Call Center */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-[#E3101B]">
              <Phone className="w-5 h-5 fill-current" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-gray-400 block font-semibold">
                LLÁMENOS
              </span>
              <a
                href="tel:012198000"
                className="text-lg font-bold text-white hover:text-[#FAC914] transition-colors"
              >
                219 8000
              </a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/pardoschicken"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-neutral-800 hover:bg-[#E3101B] text-white flex items-center justify-center transition-colors text-xs font-bold"
              aria-label="Facebook"
            >
              f
            </a>
            <a
              href="https://twitter.com/pardoschicken"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-neutral-800 hover:bg-[#E3101B] text-white flex items-center justify-center transition-colors text-xs font-bold"
              aria-label="X"
            >
              x
            </a>
            <a
              href="https://www.instagram.com/pardoschicken"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-neutral-800 hover:bg-[#E3101B] text-white flex items-center justify-center transition-colors text-xs font-bold"
              aria-label="Instagram"
            >
              ig
            </a>
            <a
              href="https://www.tiktok.com/@pardoschicken"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-neutral-800 hover:bg-[#E3101B] text-white flex items-center justify-center transition-colors text-xs font-bold"
              aria-label="TikTok"
            >
              tk
            </a>
          </div>
        </div>

        {/* Payment & Security Standards Badges */}
        <div className="py-6 flex flex-wrap items-center justify-center sm:justify-start gap-6">
          <img
            src="https://www.pardoschicken.pe/assets/images/pcisecuritystandards-ar21.svg"
            alt="PCI Security Standards"
            className="h-6 w-auto brightness-0 invert opacity-75 hover:opacity-100 transition-opacity"
          />
          <img
            src="https://www.pardoschicken.pe/assets/images/MP_RGB_HANDSHAKE_color_horizontal.svg"
            alt="Mercado Pago"
            className="h-6 w-auto opacity-75 hover:opacity-100 transition-opacity"
          />
          <img
            src="https://www.pardoschicken.pe/assets/images/pagoefectivo-37450_logosenvector.com_5.svg"
            alt="PagoEfectivo"
            className="h-6 w-auto opacity-75 hover:opacity-100 transition-opacity"
          />
        </div>

        {/* Bottom Bar: Copyright & Cookie Preferences */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-3">
          <p>© 2026, Pardos Chicken. Todos los derechos reservados</p>
          <button
            type="button"
            className="hover:text-gray-300 underline text-xs transition-colors"
          >
            Preferencias de cookies
          </button>
        </div>

      </div>
    </footer>
  );
};
