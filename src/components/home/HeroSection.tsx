'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Smile, ShieldCheck, Heart, Star, BookOpen } from 'lucide-react';
import { useModal } from '@/context/ModalContext';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const { openBookModal } = useModal();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-yellow-50/40 via-white to-white pt-12 pb-20 md:py-28">
      {/* Rainbow gradient top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 rainbow-gradient-bar" />

      {/* Decorative background blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-brand-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob" />
      <div className="absolute top-20 right-10 w-80 h-80 bg-brand-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob [animation-delay:2s]" />
      <div className="absolute -bottom-10 left-1/3 w-96 h-96 bg-brand-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob [animation-delay:4s]" />

      {/* Floating decorative icons */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
        className="absolute top-24 right-[15%] text-brand-yellow-400 opacity-60 hidden lg:block"
      >
        <Star className="w-8 h-8 fill-current" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-32 left-[8%] text-brand-coral-400 opacity-50 hidden lg:block"
      >
        <Heart className="w-6 h-6 fill-current" />
      </motion.div>
      <motion.div
        animate={{ y: [0, -8, 0], rotate: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut', delay: 2 }}
        className="absolute top-40 left-[5%] text-brand-green-400 opacity-50 hidden lg:block"
      >
        <BookOpen className="w-7 h-7" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copywriting */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-brand-blue-50 border border-brand-blue-100 text-brand-blue-600 rounded-full text-xs font-bold mb-6"
            >
              <Sparkles className="w-3.5 h-3.5" /> Origin Inclusive Special School · Delhi
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-800 tracking-tight leading-[1.1] font-outfit"
            >
              Origin Inclusive{' '}
              <span className="text-rainbow">Special School</span>{' '}
              <span className="text-brand-coral-500">Delhi</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-neutral-500 leading-relaxed font-semibold max-w-xl"
            >
              Inclusive education every child&apos;s right. Origin Inclusive Special School in Shakti Nagar, Delhi provides therapy and activity-based learning for children with diverse needs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <button
                onClick={openBookModal}
                className="px-8 py-3.5 bg-brand-coral-500 hover:bg-brand-coral-600 text-white font-bold rounded-2xl text-sm transition-all shadow-lg shadow-brand-coral-200/40 hover:shadow-xl hover:shadow-brand-coral-200/50 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
              >
                Book Free Assessment <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="/services"
                className="px-8 py-3.5 bg-white border-2 border-neutral-200 hover:border-brand-blue-300 hover:bg-brand-blue-50 text-neutral-600 hover:text-brand-blue-600 font-bold rounded-2xl text-sm transition-all hover:scale-[1.02]"
              >
                Explore Services
              </Link>
            </motion.div>

            {/* Micro details */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-10 pt-6 border-t border-neutral-100 w-full flex flex-wrap gap-6 text-xs font-bold text-neutral-500"
            >
              <div className="flex items-center gap-1.5">
                <Smile className="w-4 h-4 text-brand-yellow-500" />
                <span>Early Intervention</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-brand-green-500" />
                <span>Speech & Occupational Therapy</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-brand-coral-500 fill-current" />
                <span>Parents Guidance & Progress Updates</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Premium Layered Visual Composition */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0 flex justify-center w-full">
            {/* Mobile only: compact stacked cards */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-sm md:hidden space-y-3"
            >
              <div className="relative overflow-hidden rounded-3xl border-2 border-white shadow-xl bg-gradient-to-tr from-brand-blue-100 via-brand-purple-50 to-brand-yellow-100 p-5">
                <div className="absolute top-4 right-4 w-14 h-7 rounded-t-full border-4 border-t-brand-coral-400 border-l-brand-yellow-400 border-r-brand-blue-400 border-b-transparent opacity-40" />
                <div className="relative z-10 bg-white/85 backdrop-blur-md p-4 rounded-2xl border border-white/60 shadow-sm">
                  <span className="text-[11px] font-bold text-brand-blue-600 uppercase tracking-wider block mb-1">Our Center Motto</span>
                  <p className="text-sm font-extrabold text-neutral-800 font-outfit leading-snug">
                    &ldquo;Inclusive education & therapies that respect every child&apos;s individual timeline.&rdquo;
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {[
                  { emoji: '🗣️', bg: 'bg-brand-blue-50', title: 'Speech Therapy', sub: 'Communicating clearly' },
                  { emoji: '🌱', bg: 'bg-brand-yellow-50', title: 'Early Intervention', sub: 'Timely support' },
                  { emoji: '🎒', bg: 'bg-brand-coral-50', title: 'Special Education', sub: 'Activity-based learning' },
                  { emoji: '🎨', bg: 'bg-brand-green-50', title: 'Sensory & OT', sub: 'Motor & coordination' },
                ].map((card) => (
                  <div key={card.title} className="bg-white p-3 rounded-2xl shadow-md border border-neutral-100 flex items-center gap-2">
                    <div className={`w-9 h-9 shrink-0 ${card.bg} rounded-xl flex items-center justify-center text-base`}>{card.emoji}</div>
                    <div className="min-w-0">
                      <h4 className="text-[11px] font-bold text-neutral-800 truncate">{card.title}</h4>
                      <p className="text-[9px] text-neutral-400 font-semibold truncate">{card.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* md+: floating animated composition */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative hidden md:block w-[340px] h-[400px] lg:w-[380px] lg:h-[440px] xl:w-[420px] xl:h-[460px]"
            >
              <div className="absolute inset-x-5 inset-y-7 lg:inset-x-6 lg:inset-y-8 bg-gradient-to-tr from-brand-blue-100 via-brand-purple-50 to-brand-yellow-100 rounded-3xl overflow-hidden shadow-xl border-2 border-white select-none">
                <div className="absolute top-8 left-8 lg:top-10 lg:left-10 animate-bounce">
                  <svg className="w-12 h-12 lg:w-14 lg:h-14 text-brand-yellow-400 fill-current" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="5" />
                    <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                  </svg>
                </div>
                <div className="absolute top-12 right-8 lg:top-14 lg:right-10 w-20 h-10 lg:w-24 lg:h-12 rounded-t-full border-4 border-t-brand-coral-400 border-l-brand-yellow-400 border-r-brand-blue-400 border-b-transparent opacity-40" />
              </div>

              {/* Motto — bottom-left */}
              <div className="absolute bottom-9 left-1 lg:bottom-10 lg:left-2 z-20 w-[55%] max-w-[210px] lg:max-w-[230px] bg-white/90 backdrop-blur-md p-3.5 lg:p-4 rounded-2xl border border-white/60 shadow-md">
                <span className="text-[10px] font-bold text-brand-blue-600 uppercase tracking-wider block mb-1">Our Center Motto</span>
                <p className="text-[11px] lg:text-xs font-extrabold text-neutral-800 font-outfit leading-snug">
                  &ldquo;Inclusive education & therapies that respect every child&apos;s individual timeline.&rdquo;
                </p>
              </div>

              {/* Speech Therapy — top-left */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute top-0 left-0 z-30 bg-white p-3 lg:p-3.5 rounded-2xl shadow-lg border border-neutral-100 flex items-center gap-2.5 lg:gap-3"
              >
                <div className="w-9 h-9 lg:w-10 lg:h-10 bg-brand-blue-50 rounded-xl flex items-center justify-center text-base lg:text-lg">🗣️</div>
                <div>
                  <h4 className="text-[11px] lg:text-xs font-bold text-neutral-800">Speech Therapy</h4>
                  <p className="text-[9px] lg:text-[10px] text-neutral-400 font-semibold">Communicating clearly</p>
                </div>
              </motion.div>

              {/* Early Intervention — mid-left */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4.2, ease: 'easeInOut', delay: 0.6 }}
                className="absolute top-[42%] -translate-y-1/2 left-0 lg:-left-2 z-30 bg-white p-3 lg:p-3.5 rounded-2xl shadow-lg border border-neutral-100 flex items-center gap-2.5 lg:gap-3"
              >
                <div className="w-9 h-9 lg:w-10 lg:h-10 bg-brand-yellow-50 rounded-xl flex items-center justify-center text-base lg:text-lg">🌱</div>
                <div>
                  <h4 className="text-[11px] lg:text-xs font-bold text-neutral-800">Early Intervention</h4>
                  <p className="text-[9px] lg:text-[10px] text-neutral-400 font-semibold">Timely support</p>
                </div>
              </motion.div>

              {/* Special Education — mid-right */}
              <motion.div
                animate={{ x: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
                className="absolute top-[48%] -translate-y-1/2 -right-1 lg:-right-4 z-30 bg-white p-3 lg:p-3.5 rounded-2xl shadow-lg border border-neutral-100 flex items-center gap-2.5 lg:gap-3"
              >
                <div className="w-9 h-9 lg:w-10 lg:h-10 bg-brand-coral-50 rounded-xl flex items-center justify-center text-base lg:text-lg">🎒</div>
                <div>
                  <h4 className="text-[11px] lg:text-xs font-bold text-neutral-800">Special Education</h4>
                  <p className="text-[9px] lg:text-[10px] text-neutral-400 font-semibold">Activity-based learning</p>
                </div>
              </motion.div>

              {/* Sensory & OT — bottom-right */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-0 right-0 z-30 bg-white p-3 lg:p-3.5 rounded-2xl shadow-lg border border-neutral-100 flex items-center gap-2.5 lg:gap-3"
              >
                <div className="w-9 h-9 lg:w-10 lg:h-10 bg-brand-green-50 rounded-xl flex items-center justify-center text-base lg:text-lg">🎨</div>
                <div>
                  <h4 className="text-[11px] lg:text-xs font-bold text-neutral-800">Sensory & OT</h4>
                  <p className="text-[9px] lg:text-[10px] text-neutral-400 font-semibold">Motor & coordination</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
