'use client';

import React from 'react';
import { Calendar, PhoneCall, Star, Heart, Sparkles } from 'lucide-react';
import { useModal } from '@/context/ModalContext';
import { motion } from 'framer-motion';

export default function CTASection() {
  const { openBookModal } = useModal();

  return (
    <section className="relative overflow-hidden rounded-t-[50px] md:rounded-t-[80px]">
      {/* Rainbow gradient top border */}
      <div className="h-1.5 rainbow-gradient-bar" />

      <div className="py-20 bg-brand-blue-600 text-white relative">
        {/* Background patterns */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.1),transparent)]" />
        <div className="absolute top-10 right-10 w-96 h-96 bg-white/5 rounded-full filter blur-3xl opacity-50" />
        
        {/* Floating decorative elements */}
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
          className="absolute top-16 left-[10%] opacity-20"
        >
          <Star className="w-10 h-10 text-brand-yellow-300 fill-current" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-20 right-[12%] opacity-20"
        >
          <Heart className="w-8 h-8 text-brand-coral-300 fill-current" />
        </motion.div>
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut', delay: 0.5 }}
          className="absolute top-28 right-[25%] opacity-15"
        >
          <Sparkles className="w-6 h-6 text-white" />
        </motion.div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white text-xs font-bold rounded-full mb-5 uppercase tracking-widest">
            Schedule a Session
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-outfit leading-tight">
            Help Your Child Take the First Step Towards{' '}
            <span className="text-brand-yellow-300">Independent Growth</span>
          </h2>
          <p className="text-base sm:text-lg text-white/80 font-semibold mt-6 max-w-xl mx-auto leading-relaxed">
            Book a free 1-on-1 pediatric assessment at our Shakti Nagar center today. No obligation, just compassionate expert advice.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button
              onClick={openBookModal}
              className="px-8 py-4 bg-white hover:bg-neutral-50 text-brand-blue-600 font-extrabold rounded-2xl text-sm transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" /> Book Free Assessment
            </button>
            
            <a
              href="tel:8287343414"
              className="px-8 py-4 bg-transparent border-2 border-white/40 hover:border-white hover:bg-white/10 text-white font-extrabold rounded-2xl text-sm transition-all hover:scale-[1.02] flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" /> Call +91 8287343414
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

