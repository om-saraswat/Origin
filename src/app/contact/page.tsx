'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Phone, Mail, Clock, MessageSquare, MapPin, Sparkles, Send } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit mobile number'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [submitted, setSubmitted] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Contact form:', data);
    setSubmitted(true);
    reset();
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/918287343414?text=Hi%20Origin%2C%20I%20have%20an%20inquiry%20regarding%20therapies.', '_blank');
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-brand-blue-50/50 to-white py-16 md:py-20 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-brand-blue-50 border border-brand-blue-100 text-brand-blue-600 rounded-full text-xs font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Reach Out
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-800 tracking-tight font-outfit">
            Contact Our Centers
          </h1>
          <p className="text-sm sm:text-base text-neutral-500 mt-4 max-w-xl mx-auto leading-relaxed font-semibold">
            We are here to support your family. Visit one of our Delhi branches or submit an inquiry to speak with our supervisor.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Details & Map Placeholders (7 cols) */}
            <div className="lg:col-span-7 space-y-10">
              
              {/* Branch Addresses */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Shakti Nagar */}
                <div className="bg-white p-6 rounded-3xl border border-neutral-100 shadow-sm space-y-4">
                  <div className="w-10 h-10 bg-brand-blue-50 text-brand-blue-600 rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-neutral-800 text-sm font-outfit">Shakti Nagar Branch</h3>
                    <p className="text-xs text-neutral-400 mt-1 uppercase font-bold tracking-wider">Main Center</p>
                    <p className="text-xs text-neutral-500 leading-relaxed font-semibold mt-3">
                      11439, Shakti Nagar Chowk, near Roadies Gym, Delhi - 110007
                    </p>
                  </div>
                </div>

                {/* Bhajan Pura */}
                <div className="bg-white p-6 rounded-3xl border border-neutral-100 shadow-sm space-y-4">
                  <div className="w-10 h-10 bg-brand-purple-50 text-brand-purple-600 rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-neutral-800 text-sm font-outfit">Bhajan Pura Branch</h3>
                    <p className="text-xs text-neutral-400 mt-1 uppercase font-bold tracking-wider">Origin Growth Foundation</p>
                    <p className="text-xs text-neutral-500 leading-relaxed font-semibold mt-3">
                      KH NO-418, Gali No 11, Bhajan Pura, Delhi - 110053
                    </p>
                  </div>
                </div>

              </div>

              {/* Working Hours, Phone, Email details */}
              <div className="bg-neutral-50 p-8 rounded-3xl border border-neutral-100 space-y-6">
                <h3 className="text-base font-bold text-neutral-800 font-outfit">Center Contact Info</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  
                  {/* Phone */}
                  <div className="flex gap-2.5 items-start">
                    <Phone className="w-5 h-5 text-brand-blue-500 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-neutral-700">Phone</p>
                      <a href="tel:8287343414" className="text-[11px] text-neutral-500 hover:underline block font-semibold">+91 8287343414</a>
                      <a href="tel:8287787479" className="text-[11px] text-neutral-500 hover:underline block font-semibold">+91 8287787479</a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-2.5 items-start">
                    <Mail className="w-5 h-5 text-brand-coral-500 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-neutral-700">Email</p>
                      <a href="mailto:originspecialschool@gmail.com" className="text-[11px] text-neutral-500 hover:underline block font-semibold truncate max-w-[150px]">
                        originspecialschool@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex gap-2.5 items-start">
                    <Clock className="w-5 h-5 text-brand-green-500 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-neutral-700">Hours</p>
                      <p className="text-[11px] text-neutral-500 font-semibold">Mon - Sat: 9:00 AM - 6:30 PM</p>
                      <p className="text-[10px] text-brand-coral-500 font-bold">Closed on Sunday</p>
                    </div>
                  </div>

                </div>

                <div className="pt-2 border-t border-neutral-100 flex items-center justify-between flex-wrap gap-4">
                  <p className="text-[11px] text-neutral-500 font-semibold">Want a fast response on mobile?</p>
                  <button
                    onClick={handleWhatsApp}
                    className="px-5 py-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold rounded-xl text-xs flex items-center gap-1.5 cursor-pointer shadow-md shadow-green-100"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-current" /> Contact via WhatsApp
                  </button>
                </div>
              </div>

              {/* Maps Placeholder Widgets */}
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-neutral-800 font-outfit uppercase tracking-wider">Branch Maps</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Map 1 */}
                  <div className="h-44 bg-neutral-100 rounded-3xl border border-neutral-200 flex flex-col items-center justify-center p-4 relative overflow-hidden select-none">
                    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-60" />
                    <MapPin className="w-8 h-8 text-brand-blue-500 mb-2 relative z-10" />
                    <span className="text-xs font-extrabold text-neutral-700 relative z-10 font-outfit">Shakti Nagar Chowk Map</span>
                    <span className="text-[10px] text-neutral-400 mt-1 relative z-10">Delhi - 110007</span>
                  </div>

                  {/* Map 2 */}
                  <div className="h-44 bg-neutral-100 rounded-3xl border border-neutral-200 flex flex-col items-center justify-center p-4 relative overflow-hidden select-none">
                    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-60" />
                    <MapPin className="w-8 h-8 text-brand-purple-500 mb-2 relative z-10" />
                    <span className="text-xs font-extrabold text-neutral-700 relative z-10 font-outfit">Bhajan Pura Map</span>
                    <span className="text-[10px] text-neutral-400 mt-1 relative z-10">Delhi - 110053</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Appointment / Inquiry Form (5 cols) */}
            <div className="lg:col-span-5">
              <div className="bg-white border border-neutral-100 shadow-xl rounded-3xl p-6 md:p-8 space-y-6">
                {!submitted ? (
                  <>
                    <div>
                      <span className="text-[10px] font-extrabold text-brand-coral-500 uppercase tracking-widest block mb-1">Inquiry Form</span>
                      <h3 className="text-xl font-bold text-neutral-800 font-outfit">Send an Inquiry</h3>
                      <p className="text-xs text-neutral-400 mt-1">We will respond within 24 hours.</p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                      {/* Name */}
                      <div>
                        <label className="block text-[11px] font-semibold text-neutral-600 mb-1">Your Name</label>
                        <input
                          type="text"
                          {...register('name')}
                          placeholder="John Doe"
                          className="w-full px-4 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-xs focus:ring-2 focus:ring-brand-blue-500 focus:outline-none"
                        />
                        {errors.name && (
                          <p className="text-[11px] text-red-500 mt-1">{errors.name.message}</p>
                        )}
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-[11px] font-semibold text-neutral-600 mb-1">Mobile Number</label>
                        <input
                          type="tel"
                          {...register('phone')}
                          placeholder="9876543210"
                          className="w-full px-4 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-xs focus:ring-2 focus:ring-brand-blue-500 focus:outline-none"
                        />
                        {errors.phone && (
                          <p className="text-[11px] text-red-500 mt-1">{errors.phone.message}</p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-[11px] font-semibold text-neutral-600 mb-1">Email Address</label>
                        <input
                          type="email"
                          {...register('email')}
                          placeholder="john@example.com"
                          className="w-full px-4 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-xs focus:ring-2 focus:ring-brand-blue-500 focus:outline-none"
                        />
                        {errors.email && (
                          <p className="text-[11px] text-red-500 mt-1">{errors.email.message}</p>
                        )}
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-[11px] font-semibold text-neutral-600 mb-1">Message</label>
                        <textarea
                          {...register('message')}
                          rows={4}
                          placeholder="How can we help your child? Mention delays, age, or preferred timing..."
                          className="w-full px-4 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-xs focus:ring-2 focus:ring-brand-blue-500 focus:outline-none resize-none font-semibold"
                        />
                        {errors.message && (
                          <p className="text-[11px] text-red-500 mt-1">{errors.message.message}</p>
                        )}
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 bg-brand-blue-500 hover:bg-brand-blue-600 text-white font-extrabold rounded-xl text-xs uppercase tracking-wider transition-colors shadow-md shadow-brand-blue-100 flex items-center justify-center gap-1.5 disabled:opacity-50 cursor-pointer"
                      >
                        <Send className="w-3.5 h-3.5" /> {isSubmitting ? 'Sending Message...' : 'Send Message'}
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 bg-brand-green-50 text-brand-green-600 rounded-full flex items-center justify-center mx-auto">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-800 font-outfit">Message Sent!</h3>
                    <p className="text-xs text-neutral-500 leading-relaxed font-semibold">
                      Thank you for contacting us. We have received your message and will get back to you via call or email within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 px-6 py-2 bg-neutral-800 hover:bg-neutral-900 text-white font-bold text-xs rounded-xl transition-all"
                    >
                      Send Another Message
                    </button>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
