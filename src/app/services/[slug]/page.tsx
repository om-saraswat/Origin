import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight, ArrowLeft, CheckCircle, HelpCircle, MapPin, Calendar } from 'lucide-react';
import { servicesData } from '@/lib/servicesData';
import ServiceCTAButton from './ServiceCTAButton';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.title} | Origin Child Development Center`,
    description: service.shortDesc,
    alternates: {
      canonical: `/services/${slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  // FAQ Schema JSON-LD
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': service.faqs.map((faq) => ({
      '@type': 'Question',
      'name': faq.q,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.a,
      },
    })),
  };

  return (
    <div className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumbs Banner */}
      <section className="bg-neutral-50 border-b border-neutral-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center gap-2 text-xs font-bold text-neutral-400">
          <Link href="/" className="hover:text-brand-blue-500">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/services" className="hover:text-brand-blue-500">Services</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-neutral-700">{service.title}</span>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back button */}
          <Link
            href="/services"
            className="inline-flex items-center gap-1 text-xs font-bold text-neutral-500 hover:text-brand-blue-500 transition-colors uppercase tracking-wider mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> All Services
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Content column - 8 cols */}
            <div className="lg:col-span-8 space-y-12">
              {/* Header Title */}
              <div>
                <span className="text-4xl text-neutral-800 p-3 bg-neutral-50 rounded-2xl inline-block mb-4 select-none">
                  {service.icon}
                </span>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-800 font-outfit">
                  {service.title}
                </h1>
                <p className="text-sm text-neutral-500 mt-2 font-semibold">
                  Comprehensive pediatric clinical program at Origin.
                </p>
              </div>

              {/* Overview */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-neutral-800 font-outfit">Program Overview</h2>
                <p className="text-sm text-neutral-500 leading-relaxed font-semibold">
                  {service.overview}
                </p>
              </div>

              {/* Who Needs it */}
              <div className="bg-brand-blue-50/20 p-8 rounded-3xl border border-brand-blue-50 space-y-6">
                <h2 className="text-lg font-bold text-neutral-800 font-outfit flex items-center gap-2">
                  <span>Who Needs it?</span>
                </h2>
                <ul className="space-y-4">
                  {service.whoNeedsIt.map((item, index) => (
                    <li key={index} className="flex gap-3 items-start text-xs font-semibold text-neutral-600">
                      <CheckCircle className="w-4.5 h-4.5 text-brand-blue-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-neutral-800 font-outfit">Core Benefits of the Therapy</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="bg-neutral-50/50 p-5 rounded-2xl border border-neutral-100 flex gap-3 items-start">
                      <div className="w-2.5 h-2.5 bg-brand-green-500 rounded-full shrink-0 mt-1.5" />
                      <span className="text-xs font-semibold text-neutral-600 leading-relaxed">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Therapy Process */}
              <div className="space-y-8">
                <h2 className="text-xl font-bold text-neutral-800 font-outfit">Our Clinical Process</h2>
                <div className="relative border-l border-neutral-100 pl-6 space-y-8">
                  {service.process.map((proc, index) => (
                    <div key={index} className="relative">
                      {/* Process Number Dot */}
                      <span className="absolute -left-[35px] top-0 w-[18px] h-[18px] bg-white border-2 border-brand-blue-500 rounded-full flex items-center justify-center text-[9px] font-bold text-brand-blue-600">
                        {index + 1}
                      </span>
                      <h4 className="text-sm font-bold text-neutral-800 font-outfit">{proc.title}</h4>
                      <p className="text-xs text-neutral-500 leading-relaxed font-semibold mt-1">{proc.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service-Specific FAQs */}
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-neutral-800 font-outfit">FAQs About {service.title}</h2>
                <div className="space-y-4">
                  {service.faqs.map((faq, index) => (
                    <div key={index} className="bg-neutral-50/30 p-6 rounded-2xl border border-neutral-100/50 flex gap-4">
                      <HelpCircle className="w-5 h-5 text-brand-coral-500 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-neutral-800 font-outfit mb-2">{faq.q}</h4>
                        <p className="text-xs text-neutral-500 leading-relaxed font-semibold">{faq.a}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Sticky Booking column - 4 cols */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 bg-white border border-neutral-100 shadow-lg rounded-3xl p-6 md:p-8 space-y-6">
                <div className="border-b border-neutral-50 pb-4">
                  <span className="text-[10px] font-bold text-brand-coral-500 uppercase tracking-widest block mb-1">Clinic Consultation</span>
                  <h3 className="text-lg font-bold text-neutral-800 font-outfit">Book Assessment</h3>
                  <p className="text-xs text-neutral-400 mt-1">Get an expert milestone screening for your child.</p>
                </div>

                <ul className="space-y-4 text-xs font-semibold text-neutral-500">
                  <li className="flex gap-2">
                    <MapPin className="w-4 h-4 text-brand-blue-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-neutral-700">Shakti Nagar & Bhajan Pura</p>
                      <p className="text-[11px]">Fully equipped physical centers in Delhi</p>
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <Calendar className="w-4 h-4 text-brand-green-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-neutral-700">Flexible Scheduling</p>
                      <p className="text-[11px]">Weekdays & Weekends available</p>
                    </div>
                  </li>
                </ul>

                {/* Service CTA Client component to open global modal */}
                <ServiceCTAButton />
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
