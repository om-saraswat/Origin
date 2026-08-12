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
  { name: 'Early Intervention', href: '/services/early-intervention' },
  { name: 'Occupational Therapy', href: '/services/occupational-therapy' },
  { name: 'Behavioral Therapy', href: '/services/behavioral-therapy' },
  { name: 'Special Education', href: '/services/special-education' },
  { name: 'Sensory Integration', href: '/services/sensory-integration' },
  { name: 'Social Skills Training', href: '/services/social-skills' },
  { name: 'Parent Counseling', href: '/services/parent-counseling' },
];

export default function Header() {
  const pathname = usePathname();
  const { openBookModal } = useModal();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDesktopServicesOpen, setIsDesktopServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

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
    setIsDesktopServicesOpen(false);
    setIsMobileServicesOpen(false);
  }, [pathname]);

  // Close desktop services when clicking outside
  useEffect(() => {
    if (!isDesktopServicesOpen) return;
    const close = () => setIsDesktopServicesOpen(false);
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, [isDesktopServicesOpen]);

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
            <Phone className="w-3.5 h-3.5" /> +91 8287343414
          </a>
          <span className="flex items-center gap-1">📍 Shakti Nagar, Delhi</span>
        </div>
        <div>
          <span className="flex items-center gap-1">📧 originspecialschool@gmail.com</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 md:h-28 lg:h-28 xl:h-32 flex items-center justify-between gap-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 cursor-pointer shrink-0">
          <div className="relative w-52 h-20 md:w-64 md:h-24 lg:w-64 lg:h-24 xl:w-72 xl:h-28">
            <Image
              src="/images/logo.jpeg"
              alt="Origin School Logo"
              fill
              className="object-contain object-left lg:hidden"
              priority
            />
            <Image
              src="/images/logo.png"
              alt="Origin School Logo"
              fill
              className="object-contain object-left hidden lg:block"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav + CTA — xl+ so large logo never collides */}
        <div className="hidden xl:flex items-center gap-4 min-w-0">
          <nav className="flex items-center gap-3 2xl:gap-4">
            {navigationLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));

              if (link.isDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setIsDesktopServicesOpen(true)}
                    onMouseLeave={() => setIsDesktopServicesOpen(false)}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      type="button"
                      aria-expanded={isDesktopServicesOpen}
                      aria-haspopup="menu"
                      onClick={() => setIsDesktopServicesOpen((open) => !open)}
                      className={`flex items-center gap-0.5 text-sm font-semibold transition-colors py-2 whitespace-nowrap ${
                        isActive ? 'text-brand-blue-600' : 'text-neutral-600 hover:text-brand-blue-500'
                      }`}
                    >
                      {link.name}{' '}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${isDesktopServicesOpen ? 'rotate-180' : ''}`}
                      />
                    </button>

                    {isDesktopServicesOpen && (
                      <div
                        role="menu"
                        className="absolute top-full left-0 w-64 bg-white border border-neutral-100 rounded-2xl shadow-xl py-3 mt-1 grid grid-cols-1 divide-y divide-neutral-50 animate-fadeIn z-50"
                      >
                        {servicesList.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            role="menuitem"
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
                  className={`text-sm font-semibold transition-colors py-2 border-b-2 whitespace-nowrap ${
                    isActive ? 'text-brand-blue-600 border-brand-blue-500' : 'text-neutral-600 hover:text-brand-blue-500 border-transparent'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <button
            onClick={openBookModal}
            className="shrink-0 px-5 py-2.5 bg-brand-coral-500 hover:bg-brand-coral-600 text-white font-bold rounded-full text-sm transition-all duration-200 shadow-md shadow-brand-coral-200/30 hover:shadow-lg hover:scale-105 active:scale-95 flex items-center gap-1.5 whitespace-nowrap"
          >
            <Calendar className="w-4 h-4" /> Book Appointment
          </button>
        </div>

        {/* Menu toggle below xl */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="xl:hidden p-2 text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100 rounded-xl"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile / tablet / laptop Menu Drawer */}
      {isOpen && (
        <div className="xl:hidden absolute top-full left-0 right-0 bg-white border-b border-neutral-100 shadow-lg p-6 flex flex-col gap-4 animate-slideDown max-h-[80vh] overflow-y-auto">
          {navigationLinks.map((link) => {
            if (link.isDropdown) {
              return (
                <div key={link.name} className="flex flex-col">
                  <button
                    type="button"
                    aria-expanded={isMobileServicesOpen}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setIsMobileServicesOpen((open) => !open);
                    }}
                    className="flex justify-between items-center w-full text-base font-bold text-neutral-700 py-1"
                  >
                    {link.name}{' '}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {isMobileServicesOpen && (
                    <div className="pl-4 mt-2 flex flex-col gap-2.5 border-l-2 border-brand-blue-100">
                      <Link
                        href="/services"
                        className="text-sm font-semibold text-brand-blue-600 hover:text-brand-blue-700"
                      >
                        All Services
                      </Link>
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
