import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag, User } from 'lucide-react';
import { blogsData } from '@/lib/blogsData';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(blogsData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = blogsData[slug];

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Origin Special School Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogsData[slug];

  if (!post) {
    notFound();
  }

  return (
    <article className="bg-white min-h-screen py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-500 hover:text-brand-blue-500 transition-colors uppercase tracking-wider mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Blogs
        </Link>

        {/* Post Metadata Header */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-neutral-400">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4 text-neutral-300" /> {post.date}
            </span>
            <span className="flex items-center gap-1">
              <User className="w-4 h-4 text-neutral-300" /> By Origin Pediatric Team
            </span>
            <span className="flex items-center gap-1 text-brand-blue-600 bg-brand-blue-50 px-2 py-0.5 rounded-md">
              <Tag className="w-3.5 h-3.5" /> {post.category}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-800 tracking-tight leading-tight font-outfit">
            {post.title}
          </h1>
        </div>

        {/* Featured Image Placeholder / Banner */}
        <div className="h-60 sm:h-80 w-full bg-gradient-to-tr from-brand-blue-100 via-brand-coral-50 to-brand-yellow-100 rounded-3xl mb-12 flex items-center justify-center border border-neutral-100 relative overflow-hidden select-none">
          <span className="text-5xl">📚</span>
        </div>

        {/* Post Body Content */}
        <div className="prose prose-neutral max-w-none text-sm text-neutral-600 font-semibold leading-relaxed space-y-6">
          {post.content.split('\n\n').map((paragraph, index) => {
            const trimmed = paragraph.trim();
            if (!trimmed) return null;

            // Handle Headings
            if (trimmed.startsWith('###')) {
              return (
                <h3 key={index} className="text-lg font-bold text-neutral-800 font-outfit mt-8 mb-4">
                  {trimmed.replace('###', '').trim()}
                </h3>
              );
            }
            if (trimmed.startsWith('##')) {
              return (
                <h2 key={index} className="text-xl font-bold text-neutral-800 font-outfit mt-10 mb-4">
                  {trimmed.replace('##', '').trim()}
                </h2>
              );
            }

            // Handle Lists
            if (trimmed.startsWith('-') || trimmed.startsWith('*')) {
              return (
                <ul key={index} className="list-disc pl-6 space-y-2 text-neutral-500 font-semibold my-4">
                  {trimmed.split('\n').map((li, i) => (
                    <li key={i}>{li.replace(/^-\s*|^\*\s*/, '').trim()}</li>
                  ))}
                </ul>
              );
            }
            if (/^\d+\./.test(trimmed)) {
              return (
                <ol key={index} className="list-decimal pl-6 space-y-2 text-neutral-500 font-semibold my-4">
                  {trimmed.split('\n').map((li, i) => (
                    <li key={i}>{li.replace(/^\d+\.\s*/, '').trim()}</li>
                  ))}
                </ol>
              );
            }

            // Default Paragraph
            return (
              <p key={index} className="text-neutral-500 font-semibold leading-relaxed">
                {trimmed}
              </p>
            );
          })}
        </div>

        {/* Footer info box */}
        <div className="mt-16 p-8 bg-neutral-50 rounded-3xl border border-neutral-100 text-center space-y-4">
          <h4 className="text-base font-bold text-neutral-800 font-outfit">Need customized guidance for your child?</h4>
          <p className="text-xs text-neutral-500 max-w-md mx-auto font-semibold">
            Every child experiences developmental delays differently. Schedule a clinical screening with our specialist team at Delhi to get a dedicated evaluation report.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-6 py-2.5 bg-brand-coral-500 hover:bg-brand-coral-600 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-colors"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>

      </div>
    </article>
  );
}
