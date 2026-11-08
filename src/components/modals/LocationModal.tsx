import React, { useState } from 'react';
import { X, MapPin, Store, Check, Navigation } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { LIMA_DISTRICTS } from '../../data/products';

export const LocationModal: React.FC = () => {
  const { isLocationOpen, setIsLocationOpen, location, setLocation, showNotification } = useCart();
  
  const [serviceType, setServiceType] = useState<'delivery' | 'pickup'>(location.serviceType);
  const [selectedDistrict, setSelectedDistrict] = useState(location.district);
  const [address, setAddress] = useState(location.address);

  if (!isLocationOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setLocation({
      district: selectedDistrict,
      address: address.trim() || `Av. Principal, ${selectedDistrict}`,
      serviceType
    });
    setIsLocationOpen(false);
    showNotification(`Ubicación actualizada: ${selectedDistrict} (${serviceType === 'delivery' ? 'Delivery' : 'Recojo'})`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden border border-gray-100 animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-[#E3101B] block">
              Pardos Cobertura
            </span>
            <h3 className="text-xl font-black text-gray-900 uppercase">
              Selecciona Tu Ubicación
            </h3>
          </div>
          <button
            type="button"
            onClick={() => setIsLocationOpen(false)}
            className="p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-black transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <form onSubmit={handleSave} className="p-6 space-y-6">
          
          {/* Service Type Toggle (Delivery vs Pickup) */}
          <div className="grid grid-cols-2 gap-3 p-1 bg-gray-100 rounded-2xl">
            <button
              type="button"
              onClick={() => setServiceType('delivery')}
              className={`flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
                serviceType === 'delivery'
                  ? 'bg-white text-[#E3101B] shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <MapPin className="w-4 h-4" />
              <span>Delivery</span>
            </button>
            <button
              type="button"
              onClick={() => setServiceType('pickup')}
              className={`flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
                serviceType === 'pickup'
                  ? 'bg-white text-[#E3101B] shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Store className="w-4 h-4" />
              <span>Recojo en Salón</span>
            </button>
          </div>

          {/* District Selection */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
              Distrito de Entrega / Cobertura
            </label>
            <div className="relative">
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-semibold text-gray-900 focus:outline-none focus:border-[#E3101B] focus:ring-1 focus:ring-[#E3101B] transition-colors appearance-none cursor-pointer"
              >
                {LIMA_DISTRICTS.map((dist) => (
                  <option key={dist} value={dist}>
                    {dist} - Cobertura Oficial Pardos
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                <Navigation className="w-4 h-4 rotate-45 text-[#E3101B]" />
              </div>
            </div>
          </div>

          {/* Detailed Street Address */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
              {serviceType === 'delivery' ? 'Dirección de Entrega' : 'Referencia o Local de preferencia'}
            </label>
            <input
              type="text"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Ej: Av. Alfredo Benavides 730, Dpto 402"
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium text-gray-900 focus:outline-none focus:border-[#E3101B] focus:ring-1 focus:ring-[#E3101B] transition-colors placeholder:text-gray-400"
            />
          </div>

          {/* Save Button */}
          <button
            type="submit"
            className="w-full bg-[#E3101B] hover:bg-[#B80D15] text-white py-3.5 rounded-2xl font-black text-sm uppercase tracking-wider shadow-brand transition-all flex items-center justify-center gap-2 active:scale-98"
          >
            <Check className="w-4 h-4" />
            <span>Confirmar Ubicación</span>
          </button>
        </form>

      </div>
    </div>
  );
};
