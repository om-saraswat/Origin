'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Phone, Calendar } from 'lucide-react';
import { useModal } from '@/context/ModalContext';

const navigationLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services', isDropdown: true },
  { name: 'Programs', href: '/programs' },
  { name: 'Admissions', href: '/admissions' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Blog', href: '/blog' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
];

const servicesList = [
  { name: 'Speech & Language Therapy', href: '/services/speech-therapy' },
  { name: 'Occupational Therapy', href: '/services/occupational-therapy' },
  { name: 'Behavioral Therapy', href: '/services/behavioral-therapy' },
  { name: 'Special Education', href: '/services/special-education' },
  { name: 'Sensory Integration', href: '/services/sensory-integration' },
  { name: 'Early Intervention', href: '/services/early-intervention' },
  { name: 'Social Skills Training', href: '/services/social-skills' },
  { name: 'Parent Counseling', href: '/services/parent-counseling' },
];

export default function Header() {
  const pathname = usePathname();
  const { openBookModal } = useModal();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on page change
  useEffect(() => {
    setIsOpen(false);
    setIsServicesOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-100' : 'bg-white'
      }`}
    >
      {/* Rainbow gradient top accent — brand signature */}
      <div className="h-1 rainbow-gradient-bar" />

      {/* Top Bar for Contact Details */}
      <div className="hidden sm:flex bg-brand-blue-50 text-brand-blue-700 py-1.5 px-6 justify-between items-center text-xs font-semibold">
        <div className="flex gap-4 items-center">
          <a href="tel:8287343414" className="hover:underline flex items-center gap-1">
            <Phone className="w-3.5 h-3.5" /> +91 8287343414, 8287787479
          </a>
          <span className="flex items-center gap-1">📍 Shakti Nagar & Bhajan Pura, Delhi</span>
        </div>
        <div>
          <span className="flex items-center gap-1">📧 originspecialschool@gmail.com</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 cursor-pointer shrink-0">
          <div className="relative w-36 h-14 md:w-44 md:h-16">
            <Image
              src="/images/logo.jpeg"
              alt="Origin School Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
          {navigationLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));

            if (link.isDropdown) {
              return (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <button
                    className={`flex items-center gap-1 text-sm font-semibold transition-colors py-2 ${
                      isActive ? 'text-brand-blue-600' : 'text-neutral-600 hover:text-brand-blue-500'
                    }`}
                  >
                    {link.name} <ChevronDown className="w-4 h-4" />
                  </button>

                  {/* Dropdown Menu */}
                  {isServicesOpen && (
                    <div className="absolute top-full left-0 w-64 bg-white border border-neutral-100 rounded-2xl shadow-xl py-3 mt-1 grid grid-cols-1 divide-y divide-neutral-50 animate-fadeIn">
                      {servicesList.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="px-4 py-2.5 text-xs font-semibold text-neutral-600 hover:bg-brand-blue-50 hover:text-brand-blue-600 transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold transition-colors py-2 border-b-2 ${
                  isActive ? 'text-brand-blue-600 border-brand-blue-500' : 'text-neutral-600 hover:text-brand-blue-500 border-transparent'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <button
            onClick={openBookModal}
            className="px-5 py-2.5 bg-brand-coral-500 hover:bg-brand-coral-600 text-white font-bold rounded-full text-sm transition-all duration-200 shadow-md shadow-brand-coral-200/30 hover:shadow-lg hover:scale-105 active:scale-95 flex items-center gap-1.5"
          >
            <Calendar className="w-4 h-4" /> Book Appointment
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100 rounded-xl"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-neutral-100 shadow-lg p-6 flex flex-col gap-4 animate-slideDown max-h-[80vh] overflow-y-auto">
          {navigationLinks.map((link) => {
            if (link.isDropdown) {
              return (
                <div key={link.name} className="flex flex-col">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="flex justify-between items-center text-base font-bold text-neutral-700 py-1"
                  >
                    {link.name} <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isServicesOpen && (
                    <div className="pl-4 mt-2 flex flex-col gap-2.5 border-l-2 border-brand-blue-100">
                      {servicesList.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="text-sm font-semibold text-neutral-500 hover:text-brand-blue-500"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-base font-bold py-1 ${
                  pathname === link.href ? 'text-brand-blue-600' : 'text-neutral-700 hover:text-brand-blue-500'
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <button
            onClick={openBookModal}
            className="w-full mt-2 py-3 bg-brand-coral-500 hover:bg-brand-coral-600 text-white font-bold rounded-xl text-center flex items-center justify-center gap-2 shadow-md shadow-brand-coral-200/30"
          >
            <Calendar className="w-4 h-4" /> Book Appointment
          </button>
        </div>
      )}
    </header>
  );
}
