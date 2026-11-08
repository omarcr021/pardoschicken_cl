import React, { useState } from 'react';
import { X, Mail, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const LoginModal: React.FC = () => {
  const { isLoginOpen, setIsLoginOpen, showNotification } = useCart();
  const [method, setMethod] = useState<'email' | 'phone'>('phone');
  const [inputValue, setInputValue] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isLoginOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsLoginOpen(false);
      showNotification('¡Bienvenido a Pardos Chicken!');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col animate-in zoom-in-95 duration-200"
        role="dialog"
      >
        {/* Top Header */}
        <div className="p-6 pb-2 flex items-center justify-between">
          <img
            src="https://www.pardoschicken.pe/assets/images/pardos.svg"
            alt="Pardos Chicken"
            className="h-9 w-auto"
          />
          <button
            type="button"
            onClick={() => setIsLoginOpen(false)}
            className="p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-black transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 pt-2 space-y-6">
          <div>
            <h3 className="text-xl font-black text-gray-900 uppercase">
              Ingresa a tu Cuenta
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              Guarda tus direcciones favoritas, revisa el historial de pedidos y obtén promociones personalizadas.
            </p>
          </div>

          {/* Toggle Email vs Phone */}
          <div className="grid grid-cols-2 gap-2 p-1 bg-gray-100 rounded-xl text-xs font-bold uppercase tracking-wider">
            <button
              type="button"
              onClick={() => setMethod('phone')}
              className={`py-2.5 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                method === 'phone' ? 'bg-white text-[#E3101B] shadow-xs' : 'text-gray-600'
              }`}
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Celular</span>
            </button>
            <button
              type="button"
              onClick={() => setMethod('email')}
              className={`py-2.5 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                method === 'email' ? 'bg-white text-[#E3101B] shadow-xs' : 'text-gray-600'
              }`}
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Correo</span>
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                {method === 'phone' ? 'Número de Teléfono' : 'Correo Electrónico'}
              </label>
              <div className="relative">
                {method === 'phone' ? (
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-gray-200 bg-gray-50 text-gray-700 text-xs font-bold">
                      +51
                    </span>
                    <input
                      type="tel"
                      required
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="987 654 321"
                      className="w-full bg-gray-50 border border-gray-200 rounded-r-xl px-4 py-3 text-sm font-semibold focus:outline-none focus:border-[#E3101B]"
                    />
                  </div>
                ) : (
                  <input
                    type="email"
                    required
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="usuario@ejemplo.com"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-semibold focus:outline-none focus:border-[#E3101B]"
                  />
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitted}
              className="w-full bg-[#E3101B] hover:bg-[#B80D15] text-white py-3.5 rounded-2xl font-black text-xs uppercase tracking-wider shadow-brand transition-all flex items-center justify-center gap-2 active:scale-98"
            >
              {isSubmitted ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-[#FAC914]" />
                  <span>Verificando...</span>
                </>
              ) : (
                <>
                  <span>Continuar</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Or Divider */}
          <div className="relative flex py-1 items-center">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="flex-shrink mx-4 text-gray-400 text-[11px] uppercase font-bold tracking-wider">o</span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>

          {/* Social Auth */}
          <button
            type="button"
            onClick={() => {
              setIsLoginOpen(false);
              showNotification('¡Sesión iniciada con Google!');
            }}
            className="w-full border border-gray-200 hover:bg-gray-50 py-3 rounded-2xl font-bold text-xs text-gray-700 transition-colors flex items-center justify-center gap-2"
          >
            <span className="font-black text-blue-500">G</span>
            <span>Continuar con Google</span>
          </button>

          <p className="text-[11px] text-gray-400 text-center leading-relaxed">
            Al continuar, aceptas nuestros{' '}
            <a href="#" className="underline text-gray-600 font-semibold">Términos del Servicio</a>{' '}
            y la{' '}
            <a href="#" className="underline text-gray-600 font-semibold">Política de Privacidad</a>.
          </p>
        </div>
      </div>
    </div>
  );
};
