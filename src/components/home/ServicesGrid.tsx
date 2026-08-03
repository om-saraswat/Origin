'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { servicesData } from '@/lib/servicesData';

const getHoverClass = (slug: string) => {
  switch (slug) {
    case 'speech-therapy':
    case 'early-intervention':
      return 'border-brand-blue-100 hover:border-brand-blue-500 hover:shadow-brand-blue-50/50';
    case 'occupational-therapy':
      return 'border-brand-coral-100 hover:border-brand-coral-500 hover:shadow-brand-coral-50/50';
    case 'special-education':
    case 'parent-counseling':
      return 'border-brand-green-100 hover:border-brand-green-500 hover:shadow-brand-green-50/50';
    case 'behavioral-therapy':
    case 'social-skills':
      return 'border-brand-purple-100 hover:border-brand-purple-500 hover:shadow-brand-purple-50/50';
    case 'sensory-integration':
      return 'border-brand-yellow-100 hover:border-brand-yellow-500 hover:shadow-brand-yellow-50/50';
    default:
      return 'border-neutral-100 hover:border-brand-blue-500 hover:shadow-neutral-100';
  }
};

const getTagClass = (slug: string) => {
  switch (slug) {
    case 'speech-therapy':
    case 'early-intervention':
      return 'bg-brand-blue-50 text-brand-blue-600';
    case 'occupational-therapy':
      return 'bg-brand-coral-50 text-brand-coral-600';
    case 'special-education':
    case 'parent-counseling':
      return 'bg-brand-green-50 text-brand-green-600';
    case 'behavioral-therapy':
    case 'social-skills':
      return 'bg-brand-purple-50 text-brand-purple-600';
    case 'sensory-integration':
      return 'bg-brand-yellow-50 text-brand-yellow-600';
    default:
      return 'bg-neutral-50 text-neutral-600';
  }
};

const getTagText = (slug: string) => {
  switch (slug) {
    case 'speech-therapy': return 'Speech Delay & Articulation';
    case 'occupational-therapy': return 'Motor Skills & Daily Tasks';
    case 'special-education': return 'Remedial Learning & IEP';
    case 'behavioral-therapy': return 'Autism & ADHD Behaviors';
    case 'sensory-integration': return 'Sensory Processing Issues';
    case 'early-intervention': return 'Ages 1.5 to 4 Years';
    case 'social-skills': return 'Peer Interaction';
    case 'parent-counseling': return 'Family Support';
    default: return 'Pediatric Therapy';
  }
};

export default function ServicesGrid() {
  const featuredServices = Object.values(servicesData);

  return (
    <section className="py-20 bg-neutral-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl">
            <span className="text-xs font-extrabold text-brand-coral-500 uppercase tracking-widest bg-brand-coral-50 px-3 py-1 rounded-full">
              Clinical Specializations
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-800 tracking-tight mt-4 font-outfit">
              Our Therapy Services
            </h2>
            <p className="text-sm text-neutral-500 mt-2 font-semibold">
              Our clinical and special school services are led by certified therapists and tailored to every child.
            </p>
          </div>
          <Link
            href="/services"
            className="group inline-flex items-center gap-1.5 font-bold text-sm text-brand-blue-600 hover:text-brand-blue-700 mt-4 md:mt-0"
          >
            View All 8 Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className={`bg-white p-8 rounded-3xl border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between ${getHoverClass(service.slug)}`}
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-4xl select-none">{service.icon}</span>
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${getTagClass(service.slug)}`}>
                    {getTagText(service.slug)}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-neutral-800 font-outfit mb-3">{service.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed font-semibold mb-6">{service.shortDesc}</p>
              </div>

              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center gap-1 text-xs font-bold text-neutral-800 hover:text-brand-blue-600 transition-colors uppercase tracking-wider mt-auto"
              >
                Learn More <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
