import Link from 'next/link';
import { Home, PhoneCall, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-blue-50/60 via-white to-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-brand-blue-200/30 blur-3xl" />
        <div className="absolute top-1/3 -right-20 w-80 h-80 rounded-full bg-brand-coral-200/25 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-brand-yellow-200/20 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
        <p className="text-7xl sm:text-8xl font-extrabold font-outfit tracking-tight text-brand-blue-500/15 select-none">
          404
        </p>

        <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-800 font-outfit tracking-tight">
          Page not found
        </h1>
        <p className="mt-4 text-sm sm:text-base text-neutral-500 font-semibold max-w-md mx-auto leading-relaxed">
          This page doesn&apos;t exist or may have moved. Head home or reach out — we&apos;re happy to help.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3 sm:gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-blue-600 hover:bg-brand-blue-700 text-white font-extrabold rounded-2xl text-sm transition-all shadow-lg shadow-brand-blue-600/20 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white border-2 border-neutral-200 hover:border-brand-blue-300 text-neutral-800 font-extrabold rounded-2xl text-sm transition-all hover:scale-[1.02]"
          >
            <PhoneCall className="w-4 h-4 text-brand-blue-500" />
            Contact Us
          </Link>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-bold text-neutral-400 uppercase tracking-wider">
          <Link href="/services" className="hover:text-brand-blue-500 transition-colors inline-flex items-center gap-1">
            Services <ArrowRight className="w-3 h-3" />
          </Link>
          <Link href="/admissions" className="hover:text-brand-blue-500 transition-colors inline-flex items-center gap-1">
            Admissions <ArrowRight className="w-3 h-3" />
          </Link>
          <Link href="/faq" className="hover:text-brand-blue-500 transition-colors inline-flex items-center gap-1">
            FAQ <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </section>
  );
}
