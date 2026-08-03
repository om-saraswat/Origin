'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Phone, Mail, MapPin, ArrowRight, Heart } from 'lucide-react';
import { useModal } from '@/context/ModalContext';

const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

type NewsletterFormValues = z.infer<typeof newsletterSchema>;

export default function Footer() {
  const { openBookModal } = useModal();
  const [subscribed, setSubscribed] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubscribe = async (data: NewsletterFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Newsletter sub:', data);
    setSubscribed(true);
    reset();
  };

  return (
    <footer className="bg-white border-t border-neutral-100 text-neutral-600 font-medium">
      {/* Rainbow gradient top accent */}
      <div className="h-1 rainbow-gradient-bar" />

      <div className="pt-14 pb-20 md:pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
            {/* Logo & Description */}
            <div className="flex flex-col gap-4">
              <Link href="/" className="relative w-44 h-16 block">
                <Image
                  src="/images/logo.jpeg"
                  alt="Origin Logo"
                  fill
                  className="object-contain object-left"
                />
              </Link>
              <p className="text-sm text-neutral-500 leading-relaxed font-semibold">
                Origin Inclusive & Special School is dedicated to nurturing children with developmental delays, autism, ADHD, and sensory concerns through clinical therapies and special education.
              </p>
              <div className="flex gap-3 mt-2">
                <a
                  href="https://instagram.com/origin_incl_spcl_schl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-brand-coral-50 hover:bg-brand-coral-100 text-brand-coral-500 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Instagram Link"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
                <a
                  href="mailto:originspecialschool@gmail.com"
                  className="w-10 h-10 bg-brand-blue-50 hover:bg-brand-blue-100 text-brand-blue-500 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Email Link"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-bold text-neutral-800 uppercase tracking-wider mb-4 font-outfit">Quick Links</h4>
              <ul className="space-y-2.5 text-sm font-semibold">
                <li>
                  <Link href="/about" className="hover:text-brand-blue-500 transition-colors flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue-400" />
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/programs" className="hover:text-brand-blue-500 transition-colors flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-green-400" />
                    Special Programs
                  </Link>
                </li>
                <li>
                  <Link href="/admissions" className="hover:text-brand-blue-500 transition-colors flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-coral-400" />
                    Admissions
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="hover:text-brand-blue-500 transition-colors flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-purple-400" />
                    Our Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-brand-blue-500 transition-colors flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow-400" />
                    Helpful Blogs
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-brand-blue-500 transition-colors flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue-300" />
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Details */}
            <div>
              <h4 className="text-sm font-bold text-neutral-800 uppercase tracking-wider mb-4 font-outfit">Contact Info</h4>
              <ul className="space-y-4 text-xs font-semibold">
                <li className="flex gap-2.5">
                  <MapPin className="w-4 h-4 text-brand-coral-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-neutral-700">Shakti Nagar Branch</p>
                    <p className="text-neutral-500 mt-0.5">11439, Shakti Nagar Chowk, near Roadies Gym, Delhi - 110007</p>
                  </div>
                </li>
                <li className="flex gap-2.5">
                  <MapPin className="w-4 h-4 text-brand-purple-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-neutral-700">Bhajan Pura Branch</p>
                    <p className="text-neutral-500 mt-0.5">KH NO-418, Gali No 11, Bhajan Pura, Delhi - 110053</p>
                  </div>
                </li>
                <li className="flex gap-2.5 items-center">
                  <Phone className="w-4 h-4 text-brand-blue-500 shrink-0" />
                  <div className="flex flex-col">
                    <a href="tel:8287343414" className="hover:underline text-neutral-600">+91 8287343414</a>
                    <a href="tel:8287787479" className="hover:underline text-neutral-600">+91 8287787479</a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-sm font-bold text-neutral-800 uppercase tracking-wider mb-4 font-outfit">Parent Resources</h4>
              <p className="text-xs text-neutral-500 leading-relaxed mb-4 font-semibold">
                Subscribe to get updates on child growth milestones, parenting tips, and intervention workshops.
              </p>

              {!subscribed ? (
                <form onSubmit={handleSubmit(onSubscribe)} className="flex flex-col gap-2">
                  <div className="relative">
                    <input
                      type="email"
                      {...register('email')}
                      placeholder="parent@email.com"
                      className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-brand-blue-500 font-semibold"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="absolute right-1.5 top-1.5 p-1.5 bg-brand-blue-500 hover:bg-brand-blue-600 text-white rounded-lg transition-colors"
                      aria-label="Subscribe"
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  {errors.email && (
                    <p className="text-[11px] text-red-500">{errors.email.message}</p>
                  )}
                </form>
              ) : (
                <p className="text-xs text-brand-green-600 bg-brand-green-50 px-3 py-2 rounded-xl border border-brand-green-100 font-bold">
                  ✓ Thank you for subscribing!
                </p>
              )}

              <button
                onClick={openBookModal}
                className="w-full mt-4 py-2.5 bg-brand-coral-50 hover:bg-brand-coral-100 text-brand-coral-600 text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5 border border-brand-coral-100"
              >
                Request Free Consultation
              </button>
            </div>
          </div>

          {/* Footer bottom */}
          <div className="border-t border-neutral-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-semibold text-neutral-400">
            <p>© {new Date().getFullYear()} Origin Growth Foundation. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-brand-coral-500 fill-current" /> for inclusive childcare.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
