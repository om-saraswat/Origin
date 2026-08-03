'use client';

import React from 'react';
import { BookOpen, FileCheck2, Activity, Heart, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const benefits = [
  {
    title: 'Kids Development & Knowledge',
    desc: 'Focusing on building cognitive skills, active learning, and age-appropriate milestones.',
    icon: BookOpen,
    colorClass: 'text-brand-blue-500',
    bgClass: 'bg-brand-blue-50',
    borderClass: 'border-brand-blue-100',
  },
  {
    title: 'Individual Educational Plan (IEP)',
    desc: 'Personalized targets mapped specifically to your child\'s cognitive and sensory development.',
    icon: FileCheck2,
    colorClass: 'text-brand-coral-500',
    bgClass: 'bg-brand-coral-50',
    borderClass: 'border-brand-coral-100',
  },
  {
    title: 'Speech & Occupational Therapy',
    desc: 'Integrated clinical therapies to bridge verbal, fine-motor, and coordination delay gaps.',
    icon: Activity,
    colorClass: 'text-brand-green-600',
    bgClass: 'bg-brand-green-50',
    borderClass: 'border-brand-green-100',
  },
  {
    title: 'Holistic Development',
    desc: 'Promoting self-care independence, peer socializing, and high emotional self-regulation.',
    icon: Heart,
    colorClass: 'text-brand-purple-600',
    bgClass: 'bg-brand-purple-50',
    borderClass: 'border-brand-purple-100',
  },
  {
    title: 'Parents Guidance & Progress Updates',
    desc: 'Actionable home intervention plans combined with regular reviews and tracking updates.',
    icon: Users,
    colorClass: 'text-brand-yellow-600',
    bgClass: 'bg-brand-yellow-50',
    borderClass: 'border-brand-yellow-100',
  },
];

export default function StatsSection() {
  return (
    <section className="bg-white py-16 relative">
      {/* Decorative wavy divider */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden">
        <svg className="w-full h-6 text-neutral-50" viewBox="0 0 1440 48" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,48 C360,0 1080,0 1440,48 L1440,0 L0,0 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-extrabold text-brand-blue-600 uppercase tracking-widest bg-brand-blue-50 px-4 py-1.5 rounded-full inline-block">
            Our Commitment
          </span>
          <h2 className="text-3xl font-extrabold text-neutral-800 tracking-tight font-outfit mt-4">
            The Benefits You&apos;ll Get
          </h2>
          <p className="text-sm text-neutral-500 mt-2 font-semibold max-w-lg mx-auto">
            Empowering every child with our comprehensive services and structured support.
          </p>
        </div>
        
        {/* Fixed grid: 2 cols on sm, 3 on md, 5 on lg — no orphan cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
                className={`bg-white rounded-3xl p-6 shadow-sm border ${benefit.borderClass} flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:scale-[1.03] hover:-translate-y-1`}
              >
                <div className={`w-14 h-14 ${benefit.bgClass} ${benefit.colorClass} rounded-2xl flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-extrabold text-neutral-800 font-outfit mb-2">{benefit.title}</h3>
                <p className="text-xs text-neutral-400 font-semibold leading-relaxed">{benefit.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
