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

const SITE_URL = 'https://origin-edu.in';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Origin Special School | Child Development & Therapy Center, Delhi',
    template: '%s | Origin Special School, Delhi',
  },
  description:
    'Origin Special School (origin-edu.in) in Shakti Nagar, Delhi — early intervention, speech therapy, occupational therapy, special education, autism & ADHD support for children.',
  keywords: [
    'Origin Special School',
    'origin-edu.in',
    'Origin Inclusive Special School Delhi',
    'special school Delhi',
    'special school Shakti Nagar',
    'speech therapy Delhi',
    'occupational therapy Delhi',
    'child development center Delhi',
    'autism therapy Delhi',
    'ADHD therapy Delhi',
    'early intervention Delhi',
    'special education Delhi',
    'sensory integration therapy Delhi',
    'behavioral therapy for kids Delhi',
  ],
  authors: [{ name: 'Origin Inclusive & Special School', url: SITE_URL }],
  creator: 'Origin Growth Foundation',
  publisher: 'Origin Inclusive & Special School',
  applicationName: 'Origin Special School',
  category: 'education',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    title: 'Origin Special School | Child Development & Therapy Center, Delhi',
    description:
      'Expert therapies and inclusive education for children with special needs in Delhi. Speech, OT, ABA, sensory integration & early intervention.',
    siteName: 'Origin Special School | origin-edu.in',
    images: [
      {
        url: '/images/logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Origin Special School — origin-edu.in',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Origin Special School | Child Development & Therapy Center, Delhi',
    description:
      'Speech therapy, OT, special education & early intervention in Shakti Nagar, Delhi. Visit origin-edu.in',
    images: ['/images/logo.jpeg'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  '@id': `${SITE_URL}/#organization`,
  name: 'Origin Inclusive & Special School',
  alternateName: ['Origin Growth Foundation', 'Origin Special School', 'origin-edu.in'],
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.jpeg`,
  image: `${SITE_URL}/images/logo.jpeg`,
  description:
    'Inclusive Special School and Child Development Center in Delhi providing speech therapy, occupational therapy, behavioral support, and early intervention for children.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '11439, Shakti Nagar Chowk, near Roadies Gym',
    addressLocality: 'Delhi',
    postalCode: '110007',
    addressCountry: 'IN',
  },
  telephone: '+918287343414',
  email: 'originspecialschool@gmail.com',
  areaServed: {
    '@type': 'City',
    name: 'Delhi',
  },
  sameAs: ['https://instagram.com/origin_incl_spcl_schl'],
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

          <BookAssessmentModal />
          <StickyControls />
        </ModalProvider>
      </body>
    </html>
  );
}
