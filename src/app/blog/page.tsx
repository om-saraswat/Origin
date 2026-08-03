'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Calendar, Tag, ArrowRight, Sparkles } from 'lucide-react';
import { blogsData } from '@/lib/blogsData';

const categories = [
  { id: 'all', label: 'All Articles' },
  { id: 'Autism', label: 'Autism' },
  { id: 'ADHD', label: 'ADHD' },
  { id: 'Speech Delay', label: 'Speech Delay' },
  { id: 'Sensory Processing', label: 'Sensory Processing' },
  { id: 'Parenting', label: 'Parenting' },
  { id: 'Developmental Milestones', label: 'Milestones' },
  { id: 'Early Intervention', label: 'Early Intervention' },
];

export default function BlogPage() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  const list = Object.values(blogsData);

  const filteredBlogs = list.filter((post) => {
    const matchesCategory = filter === 'all' || post.category === filter;
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-brand-blue-50/50 to-white py-16 md:py-20 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-brand-blue-50 border border-brand-blue-100 text-brand-blue-600 rounded-full text-xs font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Educational Knowledge
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-800 tracking-tight font-outfit">
            Parenting & Therapy Resources
          </h1>
          <p className="text-sm sm:text-base text-neutral-500 mt-4 max-w-xl mx-auto leading-relaxed font-semibold">
            Guides, scientific articles, and actionable home tips written by our clinical pediatric team.
          </p>
        </div>
      </section>

      {/* Search & Category Filter Section */}
      <section className="py-8 bg-neutral-50/30 border-b border-neutral-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Search Input */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 bg-white border border-neutral-200 rounded-xl text-xs font-semibold focus:ring-2 focus:ring-brand-blue-500 focus:outline-none shadow-sm"
            />
          </div>

          {/* Categories Scrollbar */}
          <div className="flex flex-wrap justify-center gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  filter === cat.id
                    ? 'bg-brand-blue-500 text-white shadow-sm'
                    : 'bg-white border border-neutral-200 text-neutral-500 hover:bg-neutral-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blogs list */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredBlogs.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white p-8 rounded-3xl border border-neutral-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-[10px] font-extrabold text-neutral-400 uppercase tracking-widest">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-neutral-300" /> {post.date}
                      </span>
                      <span className="flex items-center gap-1 text-brand-blue-600 bg-brand-blue-50 px-2 py-0.5 rounded-md">
                        <Tag className="w-3 h-3" /> {post.category}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-neutral-800 font-outfit line-clamp-2">{post.title}</h2>
                    <p className="text-xs text-neutral-500 leading-relaxed font-semibold line-clamp-3">{post.excerpt}</p>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-brand-blue-500 hover:text-brand-blue-600 transition-colors uppercase tracking-wider mt-6 pt-4 border-t border-neutral-50"
                  >
                    Read Full Post <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-neutral-400 space-y-2">
              <p className="text-base font-bold">No articles found.</p>
              <p className="text-xs">Try selecting a different category or refining your search term.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
