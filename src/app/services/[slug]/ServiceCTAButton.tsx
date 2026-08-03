'use client';

import React from 'react';
import { Calendar } from 'lucide-react';
import { useModal } from '@/context/ModalContext';

export default function ServiceCTAButton() {
  const { openBookModal } = useModal();

  return (
    <button
      onClick={openBookModal}
      className="w-full py-3.5 bg-brand-coral-500 hover:bg-brand-coral-600 text-white font-bold rounded-2xl text-xs uppercase tracking-wider transition-all duration-200 shadow-md shadow-brand-coral-100 hover:scale-[1.01] flex items-center justify-center gap-1.5 cursor-pointer"
    >
      <Calendar className="w-4 h-4" /> Request Appointment
    </button>
  );
}
