'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqItems = [
  {
    question: 'What age groups do you support?',
    answer: 'We offer early intervention starting from 1.5 years old. Our special school, therapies, and day care support children up to 12 years of age.',
  },
  {
    question: 'How do you formulate an Individualized Education Program (IEP)?',
    answer: 'Every child undergoes a baseline assessment by our clinical developmental specialists. We identify their current strengths and delays across cognitive, speech, sensory, and motor domains, then draft target goals reviewed every 3 months.',
  },
  {
    question: 'What is the student-to-teacher ratio in your special school?',
    answer: 'We maintain low student-to-educator ratios. For individual therapy, it is 1:1. For group activities and our special school classes, it is 1:3, ensuring high individual care.',
  },
  {
    question: 'Do you offer online or home support guidance for parents?',
    answer: 'Yes! Parent training and counseling are key. We provide structured home plans (like sensory diets and communication schedules) and carry out regular review sessions so you can guide progress at home.',
  },
  {
    question: 'Where are your centers located in Delhi?',
    answer: 'We operate from our Shakti Nagar Chowk center (North Delhi, near Roadies Gym). It is fully equipped with dedicated speech, sensory integration, and occupational therapy rooms.',
  },
];

const accentColors = [
  'border-l-brand-blue-400',
  'border-l-brand-coral-400',
  'border-l-brand-green-400',
  'border-l-brand-purple-400',
  'border-l-brand-yellow-400',
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <span className="text-xs font-extrabold text-brand-coral-500 uppercase tracking-widest bg-brand-coral-50 px-4 py-1.5 rounded-full inline-block">
            Got Questions?
          </span>
          <h2 className="text-3xl font-extrabold text-neutral-800 tracking-tight mt-4 font-outfit">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-neutral-500 mt-2 font-semibold">
            Common queries about our therapies, admissions, and child care processes.
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`border border-neutral-100 rounded-2xl overflow-hidden shadow-sm bg-white transition-all duration-300 ${
                  isOpen ? 'shadow-md border-l-4 ' + accentColors[idx % accentColors.length] : 'hover:shadow-md'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center gap-4 hover:bg-neutral-50/50 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-extrabold text-neutral-800 font-outfit">{item.question}</span>
                  <ChevronDown className={`w-4 h-4 text-neutral-500 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-1 border-t border-neutral-50 text-xs font-semibold leading-relaxed text-neutral-500">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

