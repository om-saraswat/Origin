import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import ServicesGrid from '@/components/home/ServicesGrid';
import ProcessSection from '@/components/home/ProcessSection';
import TestimonialsCarousel from '@/components/home/TestimonialsCarousel';
import FAQSection from '@/components/home/FAQSection';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <WhyChooseUs />
      <ServicesGrid />
      <ProcessSection />
      <TestimonialsCarousel />
      <FAQSection />
      <CTASection />
    </>
  );
}
