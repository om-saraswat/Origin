'use client';

import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { useModal } from '@/context/ModalContext';

export default function StickyControls() {
  const { openBookModal } = useModal();

  const handleWhatsApp = () => {
    window.open(
      'https://wa.me/918287343414?text=Hi%20Origin%20Team%2C%20I%20would%20like%20to%20inquire%20about%20therapies%20and%20admissions%20for%20my%20child.',
      '_blank'
    );
  };

  return (
    <>
      {/* Floating WhatsApp — sits above the mobile bottom bar */}
      <div className="fixed bottom-18 right-4 z-50 flex flex-col gap-3 items-end md:bottom-2 md:right-4">
        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsApp}
          className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#20ba5a] hover:scale-105 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-4 focus:ring-green-200"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle className="w-7 h-7 fill-current" />
        </button>
      </div>

      {/* Sticky Mobile bottom bar - Mobile only */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-neutral-100 px-4 py-2 flex gap-3 md:hidden shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
        {/* Call button */}
        <a
          href="tel:8287343414"
          className="flex-1 bg-brand-blue-500 hover:bg-brand-blue-600 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 text-sm transition-colors"
        >
          <Phone className="w-4 h-4 fill-white" />
          Call Center
        </a>

        {/* Book Assessment button */}
        <button
          onClick={openBookModal}
          className="flex-1 bg-brand-coral-500 hover:bg-brand-coral-600 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 text-sm transition-colors"
        >
          Book Assessment
        </button>
      </div>
    </>
  );
}

