'use client';

import React from 'react';
import { Quote, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TestimonialsCarousel() {
  return (
    <section className="py-20 bg-brand-yellow-50/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <span className="text-xs font-extrabold text-brand-blue-600 uppercase tracking-widest bg-brand-blue-50 px-4 py-1.5 rounded-full inline-block">
            Our Core Vision
          </span>
          <h2 className="text-3xl font-extrabold text-neutral-800 tracking-tight mt-4 font-outfit">
            Therapy and Day Care
          </h2>
          <p className="text-sm text-neutral-500 mt-2 font-semibold">
            Dedicated to providing the best developmental, physical, and academic support.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rainbow-border relative overflow-hidden flex flex-col items-center text-center"
        >
          <div className="bg-white rounded-[calc(1.5rem-3px)] p-8 md:p-12 w-full relative">
            {/* Decorative Quote Icons */}
            <Quote className="absolute top-6 left-6 w-16 h-16 text-brand-blue-50 stroke-1 select-none pointer-events-none" />
            
            {/* Decorative rainbow dots */}
            <div className="absolute top-4 right-4 flex gap-1.5">
              <span className="w-2 h-2 rounded-full bg-brand-coral-400" />
              <span className="w-2 h-2 rounded-full bg-brand-yellow-400" />
              <span className="w-2 h-2 rounded-full bg-brand-green-400" />
              <span className="w-2 h-2 rounded-full bg-brand-blue-400" />
              <span className="w-2 h-2 rounded-full bg-brand-purple-400" />
            </div>

            <blockquote className="text-xl md:text-2xl text-neutral-700 leading-relaxed font-bold font-outfit italic max-w-2xl mx-auto relative z-10">
              &ldquo;Inclusive education every child&apos;s right&rdquo;
            </blockquote>

            <p className="text-sm text-neutral-500 mt-6 max-w-xl font-semibold leading-relaxed mx-auto">
              We are committed to providing inclusive education and therapeutic support for children with diverse needs. By bringing together activity-based learning and physical coordination play, we help children reach their full potential.
            </p>

            <div className="mt-8 border-t border-neutral-100 pt-6 w-full max-w-xs flex flex-col items-center mx-auto">
              <Heart className="w-5 h-5 text-brand-coral-500 fill-current mb-2 animate-pulse" />
              <h4 className="font-extrabold text-neutral-800 text-xs uppercase tracking-wider font-outfit">Origin Inclusive & Special School</h4>
              <p className="text-[10px] text-neutral-400 font-bold mt-1 uppercase tracking-widest">Shakti Nagar, Delhi</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

