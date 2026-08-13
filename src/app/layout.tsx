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

const SITE_URL = 'https://www.origin-edu.in';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Origin Inclusive Special School Delhi | Therapy & Child Development',
    template: '%s | Origin Inclusive Special School Delhi',
  },
  description:
    'Origin Inclusive Special School Delhi (origin-edu.in) in Shakti Nagar — speech therapy, occupational therapy, special education, autism & ADHD support, and early intervention.',
  keywords: [
    'Origin Inclusive Special School Delhi',
    'Origin Inclusive Special School',
    'Origin Special School Delhi',
    'Origin Special School',
    'origin-edu.in',
    'special school Shakti Nagar Delhi',
    'speech therapy Delhi',
    'occupational therapy Delhi',
    'child development center Delhi',
    'autism therapy Delhi',
    'ADHD therapy Delhi',
    'early intervention Delhi',
    'special education Delhi',
    'sensory integration therapy Delhi',
  ],
  authors: [{ name: 'Origin Inclusive & Special School', url: SITE_URL }],
  creator: 'Origin Growth Foundation',
  publisher: 'Origin Inclusive & Special School',
  applicationName: 'Origin Inclusive Special School',
  category: 'education',
  icons: {
    icon: [{ url: '/favicoon.png', type: 'image/png' }],
    apple: [{ url: '/favicoon.png', type: 'image/png' }],
    shortcut: ['/favicoon.png'],
  },
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
    title: 'Origin Inclusive Special School Delhi | Therapy & Child Development',
    description:
      'Origin Inclusive Special School in Shakti Nagar, Delhi — speech, OT, ABA, sensory integration, special education & early intervention.',
    siteName: 'Origin Inclusive Special School Delhi',
    images: [
      {
        url: '/images/logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Origin Inclusive Special School Delhi — origin-edu.in',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Origin Inclusive Special School Delhi | origin-edu.in',
    description:
      'Inclusive special school & child therapies in Shakti Nagar, Delhi. Speech, OT, special education & early intervention.',
    images: ['/images/logo.jpeg'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  '@id': `${SITE_URL}/#organization`,
  name: 'Origin Inclusive Special School',
  alternateName: [
    'Origin Inclusive Special School Delhi',
    'Origin Inclusive & Special School',
    'Origin Special School',
    'Origin Growth Foundation',
    'origin-edu.in',
  ],
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.jpeg`,
  image: `${SITE_URL}/images/logo.jpeg`,
  description:
    'Origin Inclusive Special School Delhi provides speech therapy, occupational therapy, behavioral support, special education, and early intervention for children in Shakti Nagar, Delhi.',
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
