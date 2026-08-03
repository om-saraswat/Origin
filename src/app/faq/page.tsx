'use client';

import React, { useState } from 'react';
import { Search, ChevronDown, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQ {
  q: string;
  a: string;
  category: 'therapies' | 'school' | 'iep' | 'admissions';
}

const allFaqs: FAQ[] = [
  // Category: Therapies
  {
    q: 'What is Speech & Language Therapy, and when should we start?',
    a: 'Speech therapy builds vocabulary, comprehension, and corrects sound articulation. Consult us if your toddler speaks fewer than 10 words by 18 months, or no phrases by 24 months.',
    category: 'therapies',
  },
  {
    q: 'How does Occupational Therapy help kids with coordination?',
    a: 'OT refines fine-motor control, hand strength, posture, and self-care skills (feeding, writing, buttoning shirts), boosting day-to-day functional independence.',
    category: 'therapies',
  },
  {
    q: 'What are the main behaviors addressed in ABA therapy?',
    a: 'Applied Behavior Analysis manages temper tantrums, aggression, sibling conflicts, task resistance, and self-injurious behaviors using custom positive reinforcement schedules.',
    category: 'therapies',
  },
  {
    q: 'What is Sensory Integration Therapy, and who needs it?',
    a: 'It supports children with sensory sensitivities (sound defensiveness, avoiding clothing textures, name-call ignoring) through clinical swinging, brushing, and sensory diets.',
    category: 'therapies',
  },
  {
    q: 'Can speech therapy correct stammering or stuttering?',
    a: 'Yes. Our clinical speech paths use fluency-shaping games and muscle relaxation routines to help kids speak smoothly and confidently.',
    category: 'therapies',
  },
  {
    q: 'Does sensory processing therapy help autistic children self-regulate?',
    a: 'Yes. Autistic children frequently suffer from hyper/hypo sensory thresholds. Sensory exercises balance sensory input, reducing anxiety and meltdowns.',
    category: 'therapies',
  },

  // Category: School
  {
    q: 'What is an Inclusive Special School?',
    a: 'An inclusive school adapts classroom lessons, speed, and sensory conditions to support neurodiverse children (Autism, ADHD, learning delays) alongside special educators.',
    category: 'school',
  },
  {
    q: 'What are the hours of operation for the school and day care?',
    a: 'Our Special School runs from 9:00 AM to 1:30 PM. The Therapeutic Day Care extends from 1:30 PM to 6:30 PM, Monday through Saturday.',
    category: 'school',
  },
  {
    q: 'What is the student-to-teacher ratio in day care classes?',
    a: 'We maintain low student-to-teacher ratios: 1:3 in standard classes and 1:1 during dedicated clinical therapy intervals.',
    category: 'school',
  },
  {
    q: 'Do you offer school meals or transport support?',
    a: 'No. Parents must send home-cooked meals tailored to their child\'s dietary restrictions. Transport services are available through outsourced partners.',
    category: 'school',
  },
  {
    q: 'Are your classrooms child-proofed for hyperactive children?',
    a: 'Absolutely. All tables have rounded guards, floors are layered with soft eva-foam mats, and therapy zones use security padding.',
    category: 'school',
  },

  // Category: IEP
  {
    q: 'What does IEP stand for, and how is it used?',
    a: 'IEP stands for Individualized Education Program. It maps specific, measurable cognitive, vocal, motor, and academic goals tailored to a child\'s milestones.',
    category: 'iep',
  },
  {
    q: 'How frequently are child IEP progress reports shared?',
    a: 'We evaluate progress and publish full IEP reports every 3 months. Weekly updates are shared with parents verbally or via video logs.',
    category: 'iep',
  },
  {
    q: 'Can parents request modifications to their child\'s IEP?',
    a: 'Yes. Family collaboration is key. Parents meet special educators every quarter to review and adjust goals based on home observations.',
    category: 'iep',
  },
  {
    q: 'What testing methods do you use for baseline assessments?',
    a: 'We use standardized developmental assessment profiles (PEP-3, Vineland scales, clinical speech evaluations) to construct the child\'s baseline profile.',
    category: 'iep',
  },
  {
    q: 'How long does a child usually remain under an IEP program?',
    a: 'The IEP is continuous. Children remain in the program until their motor, speech, and classroom behaviors align with mainstream schooling levels.',
    category: 'iep',
  },

  // Category: Admissions
  {
    q: 'Where are your centers located in Delhi?',
    a: 'We have two physical branches: Shakti Nagar Chowk (North Delhi, near Roadies Gym) and Gali No 11, Bhajan Pura (North East Delhi).',
    category: 'admissions',
  },
  {
    q: 'What documents are required for admission registration?',
    a: 'Please present the child\'s birth certificate copy, previous pediatric diagnostics reports, Aadhaar ID, and 4 passport photographs.',
    category: 'admissions',
  },

  {
    q: 'Can we schedule a trial class before finalizing admissions?',
    a: 'Yes. We run a 2-day trial play school slot where special educators evaluate classroom adjustment, sensory levels, and motor compatibility.',
    category: 'admissions',
  },
  {
    q: 'How can we schedule a tour of the school?',
    a: 'You can submit the tour request on our Admissions page, or contact us directly on +91 8287343414 to choose a visit date.',
    category: 'admissions',
  },
];

export default function FAQPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<string>('all');
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  const filteredFaqs = allFaqs.filter((faq) => {
    const matchesCat = category === 'all' || faq.category === category;
    const matchesSearch =
      faq.q.toLowerCase().includes(search.toLowerCase()) ||
      faq.a.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-brand-blue-50/50 to-white py-16 md:py-20 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-brand-coral-50 border border-brand-coral-100 text-brand-coral-600 rounded-full text-xs font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5" /> 20+ Questions Answered
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-800 tracking-tight font-outfit">
            Frequently Asked Questions
          </h1>
          <p className="text-sm sm:text-base text-neutral-500 mt-4 max-w-xl mx-auto leading-relaxed font-semibold">
            Find answers to standard questions about our therapies, special school curriculums, IEP reports, and admissions.
          </p>
        </div>
      </section>

      {/* Search & Category Filter Section */}
      <section className="py-8 bg-neutral-50/30 border-b border-neutral-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Search Input */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 bg-white border border-neutral-200 rounded-xl text-xs font-semibold focus:ring-2 focus:ring-brand-blue-500 focus:outline-none shadow-sm"
            />
          </div>

          {/* Categories Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2.5">
            {[
              { id: 'all', label: 'All FAQs' },
              { id: 'therapies', label: 'Therapies & Clinics' },
              { id: 'school', label: 'Special School' },
              { id: 'iep', label: 'IEP & Evaluations' },
              { id: 'admissions', label: 'Admissions & Branches' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setCategory(cat.id);
                  setOpenIdx(null); // Reset open accordion
                }}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  category === cat.id
                    ? 'bg-brand-blue-500 text-white shadow-sm'
                    : 'bg-white border border-neutral-200 text-neutral-500 hover:bg-neutral-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs List Accordion */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFaqs.length > 0 ? (
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => {
                const isOpen = openIdx === index;
                return (
                  <div
                    key={index}
                    className="border border-neutral-100 rounded-2xl overflow-hidden shadow-sm bg-white"
                  >
                    <button
                      onClick={() => toggle(index)}
                      className="w-full px-6 py-4.5 text-left flex justify-between items-center gap-4 hover:bg-neutral-50/50 transition-colors focus:outline-none"
                    >
                      <span className="text-sm font-extrabold text-neutral-800 font-outfit">{faq.q}</span>
                      <ChevronDown className={`w-4 h-4 text-neutral-500 transition-transform shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
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
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20 text-neutral-400 space-y-2">
              <p className="text-base font-bold">No FAQs found matching your search.</p>
              <p className="text-xs">Try selecting a different category or refining your search term.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
