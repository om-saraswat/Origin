import type { MetadataRoute } from 'next';
import { blogsData } from '@/lib/blogsData';
import { servicesData } from '@/lib/servicesData';

const BASE = 'https://www.origin-edu.in';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    '',
    '/about',
    '/services',
    '/programs',
    '/admissions',
    '/gallery',
    '/blog',
    '/faq',
    '/contact',
  ].map((path) => ({
    url: `${BASE}${path || '/'}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path === '/contact' || path === '/admissions' ? 0.9 : 0.8,
  }));

  const servicePages: MetadataRoute.Sitemap = Object.keys(servicesData).map((slug) => ({
    url: `${BASE}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const blogPages: MetadataRoute.Sitemap = Object.keys(blogsData).map((slug) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...blogPages];
}
