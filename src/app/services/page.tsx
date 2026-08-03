import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';
import { servicesData } from '@/lib/servicesData';

export const metadata = {
  title: 'Our Pediatric Therapy Services | Speech, OT, Special Ed',
  description: 'Explore our 8 core clinical therapies and special school programs including Speech Therapy, Occupational Therapy, ABA, and Sensory Integration.',
};

export default function ServicesPage() {
  const list = Object.values(servicesData);

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-brand-blue-50/50 to-white py-16 md:py-20 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-brand-coral-50 border border-brand-coral-100 text-brand-coral-600 rounded-full text-xs font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Certified Pediatric Care
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-800 tracking-tight font-outfit">
            Therapy & Educational Services
          </h1>
          <p className="text-sm sm:text-base text-neutral-500 mt-4 max-w-xl mx-auto leading-relaxed font-semibold">
            We provide evidence-based, child-focused interventions. Choose a service below to learn about who needs it, benefits, therapy processes, and FAQs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-neutral-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {list.map((service) => (
              <div
                key={service.slug}
                className={`bg-white p-8 rounded-3xl border border-neutral-100 shadow-sm flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-brand-blue-500`}
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-4xl select-none">{service.icon}</span>
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${service.bgClass} ${service.colorClass.split(' ')[0]}`}>
                      Clinical Care
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-neutral-800 font-outfit mb-3">{service.title}</h3>
                  <p className="text-xs text-neutral-500 leading-relaxed font-semibold mb-6">{service.shortDesc}</p>
                </div>

                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold text-brand-blue-600 hover:text-brand-blue-700 transition-colors uppercase tracking-wider mt-6 pt-4 border-t border-neutral-50"
                >
                  Explore Detailed Program <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
