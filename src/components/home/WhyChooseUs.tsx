'use client';

import React from 'react';
import { Award, HeartHandshake, FileCheck2, UserCheck, Star, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

const reasons = [
  {
    title: 'Inclusive & Special School',
    description: 'A dedicated, adaptive learning environment for children with diverse needs, ensuring zero frustration and progressive development.',
    icon: Award,
    colorClass: 'text-brand-blue-500',
    bgClass: 'bg-brand-blue-50',
    borderClass: 'border-brand-blue-100 hover:border-brand-blue-400 hover:shadow-brand-blue-100/30',
  },
  {
    title: 'Pediatric Therapies',
    description: 'Providing clinical Speech & Language, Occupational, Behavioral (ABA), and Sensory Integration therapies.',
    icon: UserCheck,
    colorClass: 'text-brand-coral-500',
    bgClass: 'bg-brand-coral-50',
    borderClass: 'border-brand-coral-100 hover:border-brand-coral-400 hover:shadow-brand-coral-100/30',
  },
  {
    title: 'Therapeutic Day Care',
    description: 'Safe, sensory-friendly day care featuring structured routines, motor coordination play, and caregiver support.',
    icon: Activity,
    colorClass: 'text-brand-purple-600',
    bgClass: 'bg-brand-purple-50',
    borderClass: 'border-brand-purple-100 hover:border-brand-purple-400 hover:shadow-brand-purple-100/30',
  },
  {
    title: 'Activity-Based Education',
    description: 'High-quality, child-friendly classrooms using tactile play, block structures, and games to bring fun and education.',
    icon: Star,
    colorClass: 'text-brand-yellow-600',
    bgClass: 'bg-brand-yellow-50',
    borderClass: 'border-brand-yellow-200 hover:border-brand-yellow-400 hover:shadow-brand-yellow-100/30',
  },
  {
    title: 'Individual Educational Plan (IEP)',
    description: 'Custom academic, cognitive, motor, sensory, and vocabulary targets mapped to your child\'s timeline.',
    icon: FileCheck2,
    colorClass: 'text-brand-green-600',
    bgClass: 'bg-brand-green-50',
    borderClass: 'border-brand-green-100 hover:border-brand-green-400 hover:shadow-brand-green-100/30',
  },
  {
    title: 'Parents Guidance & Support',
    description: 'Weekly reviews, home intervention plans, and milestone counseling to ensure consistent care at home.',
    icon: HeartHandshake,
    colorClass: 'text-brand-coral-600',
    bgClass: 'bg-brand-coral-50',
    borderClass: 'border-brand-coral-100 hover:border-brand-coral-400 hover:shadow-brand-coral-100/30',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-brand-blue-50/10 relative">
      {/* Decorative background shape */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.03),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold text-brand-green-600 uppercase tracking-widest bg-brand-green-50 px-4 py-1.5 rounded-full inline-block">
            Our Standard of Care
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-800 tracking-tight mt-4 font-outfit">
            Why Parents Trust Origin
          </h2>
          <p className="text-sm text-neutral-500 mt-2 font-semibold">
            We provide a nurturing, professional ecosystem that combines education and therapy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`bg-white p-8 rounded-3xl border ${reason.borderClass} shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:-translate-y-1 flex flex-col items-start`}
              >
                <div className={`p-4 ${reason.bgClass} ${reason.colorClass} rounded-2xl mb-6`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-neutral-800 font-outfit mb-3">{reason.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed font-semibold">{reason.description}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
