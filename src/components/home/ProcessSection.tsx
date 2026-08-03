'use client';

import React from 'react';
import { Calendar, Stethoscope, FileSpreadsheet, Heart, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    step: '01',
    title: 'Book Assessment',
    description: 'Submit an online request or call our Shakti Nagar / Bhajan Pura center to schedule an assessment date.',
    icon: Calendar,
    iconBg: 'bg-brand-blue-50',
    iconColor: 'text-brand-blue-500',
    borderColor: 'border-brand-blue-200',
    badgeColor: 'bg-brand-blue-500',
  },
  {
    step: '02',
    title: 'Comprehensive Evaluation',
    description: 'Our developmental team conducts pediatric screenings for motor, speech, and sensory skills.',
    icon: Stethoscope,
    iconBg: 'bg-brand-coral-50',
    iconColor: 'text-brand-coral-500',
    borderColor: 'border-brand-coral-200',
    badgeColor: 'bg-brand-coral-500',
  },
  {
    step: '03',
    title: 'Personalized IEP Draft',
    description: 'We compile data into an Individualized Education Program with clear goals, schedules, and targets.',
    icon: FileSpreadsheet,
    iconBg: 'bg-brand-green-50',
    iconColor: 'text-brand-green-600',
    borderColor: 'border-brand-green-200',
    badgeColor: 'bg-brand-green-500',
  },
  {
    step: '04',
    title: 'Interactive Therapy',
    description: 'We run fun, play-based weekly sessions focusing on sensory diet, vocabulary, or behavioral adaptation.',
    icon: Heart,
    iconBg: 'bg-brand-yellow-50',
    iconColor: 'text-brand-yellow-600',
    borderColor: 'border-brand-yellow-200',
    badgeColor: 'bg-brand-yellow-500',
  },
  {
    step: '05',
    title: 'Regular Progress Review',
    description: 'Every 3 months, we review progress reports and coordinate home-intervention schedules with parents.',
    icon: RefreshCw,
    iconBg: 'bg-brand-purple-50',
    iconColor: 'text-brand-purple-500',
    borderColor: 'border-brand-purple-200',
    badgeColor: 'bg-brand-purple-500',
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 bg-neutral-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold text-brand-purple-600 uppercase tracking-widest bg-brand-purple-50 px-4 py-1.5 rounded-full inline-block">
            Our Care Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-800 tracking-tight mt-4 font-outfit">
            How We Work With Your Child
          </h2>
          <p className="text-sm text-neutral-500 mt-2 font-semibold">
            Our step-by-step clinical methodology ensures that progress is measurable, safe, and positive.
          </p>
        </div>

        <div className="relative">
          {/* Connector line on desktop — using rainbow gradient */}
          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-1 rounded-full rainbow-gradient-bar opacity-30" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center bg-white p-6 rounded-3xl border border-neutral-100 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="relative mb-5">
                    {/* Step badge */}
                    <span className={`absolute -top-2 -right-2 text-[10px] font-extrabold px-2 py-0.5 ${step.badgeColor} text-white rounded-full shadow-sm`}>
                      {step.step}
                    </span>
                    {/* Circle icon */}
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border-2 ${step.iconBg} ${step.iconColor} ${step.borderColor}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-sm font-extrabold text-neutral-800 font-outfit mb-2">{step.title}</h3>
                  <p className="text-xs text-neutral-500 leading-relaxed font-semibold">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
