import type { Metadata } from 'next';
import { Outfit, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { ModalProvider } from '@/context/ModalContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookAssessmentModal from '@/components/BookAssessmentModal';
import StickyControls from '@/components/StickyControls';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Origin Special School | Child Development & Therapy Center, Delhi',
    template: '%s | Origin Special School & Therapy Center',
  },
  description: 'Origin Special School provides world-class early intervention, speech therapy, occupational therapy, special education, and behavioral support for kids with developmental delays, autism, and ADHD in Delhi.',
  keywords: [
    'special school Delhi',
    'speech therapy Delhi',
    'occupational therapy Delhi',
    'child development center Delhi',
    'autism therapy Delhi',
    'ADHD training Delhi',
    'early intervention Delhi',
    'special education teacher Delhi',
    'sensory integration therapy',
  ],
  metadataBase: new URL('https://originspecialschool.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://originspecialschool.com',
    title: 'Origin Special School | Child Development & Therapy Center, Delhi',
    description: 'Expert therapies and education for children with special needs. Empowering every child to reach their full potential.',
    siteName: 'Origin Special School',
    images: [
      {
        url: '/images/logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Origin Special School Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Origin Special School | Child Development & Therapy Center',
    description: 'Expert therapies and special education in Delhi. Personalized learning plans for developmental milestones.',
    images: ['/images/logo.jpeg'],
  },
};

// Root JSON-LD Schema
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  'name': 'Origin Inclusive & Special School',
  'alternateName': 'Origin Growth Foundation',
  'url': 'https://originspecialschool.com',
  'logo': 'https://originspecialschool.com/images/logo.jpeg',
  'description': 'Inclusive Special School and Child Development Center providing speech therapy, occupational therapy, behavioral support, and early intervention for children.',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': '11439, Shakti Nagar Chowk, near Roadies Gym',
    'addressLocality': 'Delhi',
    'postalCode': '110007',
    'addressCountry': 'IN'
  },
  'telephone': '+918287343414',
  'email': 'originspecialschool@gmail.com',
  'sameAs': [
    'https://instagram.com/origin_incl_spcl_schl'
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${jakarta.variable}`} suppressHydrationWarning>
      <body
        className="font-jakarta antialiased min-h-screen flex flex-col bg-background text-foreground"
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ModalProvider>
          <Header />
          <main className="flex-grow w-full overflow-x-hidden">
            {children}
          </main>
          <Footer />
          
          {/* Global Popups and Sticky Controls */}
          <BookAssessmentModal />
          <StickyControls />
        </ModalProvider>
      </body>
    </html>
  );
}


