import React, { useState } from 'react';
import { Bot, X } from 'lucide-react';

interface PardosChatbotFABProps {
  /**
   * Coloca aquí el link al que deseas redirigir al usuario al hacer clic en el botón.
   * Por ejemplo: "https://wa.me/51987654321", "https://m.me/pardoschicken", o la URL de tu chatbot externo.
   */
  redirectUrl?: string;
}

export const PardosChatbot: React.FC<PardosChatbotFABProps> = ({ 
  redirectUrl = "https://chatbot-pardoschicken-ia.streamlit.app/" // <-- INSERTA AQUÍ TU LINK DE REDIRECCIÓN
}) => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="relative group">
      {/* Tooltip de bienvenida temático */}
      {showTooltip && (
        <div className="absolute right-full mr-3.5 top-1/2 -translate-y-1/2 bg-white text-gray-900 px-3.5 py-2.5 rounded-2xl shadow-xl text-xs font-bold whitespace-nowrap border border-gray-100 hidden sm:flex items-center gap-2 animate-bounce">
          <span className="text-base">🍗</span>
          <div>
            <p className="leading-tight">¿Te ayudo con tu pedido?</p>
            <span className="text-[10px] text-[#E3101B] font-extrabold uppercase">
              PardoBot en línea
            </span>
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-gray-400 hover:text-gray-600 ml-1 p-0.5"
            title="Cerrar sugerencia"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Botón Flotante Redireccionable con estilo Pardos Chicken */}
      <a
        href={redirectUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-[#B80D15] via-[#E3101B] to-[#FF3B47] text-white shadow-2xl shadow-[#E3101B]/40 ring-4 ring-[#FAC914]/40 hover:ring-[#FAC914] hover:scale-110 active:scale-95 transition-all duration-300 z-40"
        aria-label="Abrir asistente virtual PardoBot"
      >
        {/* Indicador en línea pulsante dorado */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FAC914] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-[#FAC914] border-2 border-white items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1D1B20]"></span>
          </span>
        </span>

        {/* Icono de Chatbot */}
        <Bot className="w-7 h-7 drop-shadow-sm" />
      </a>
    </div>
  );
};
