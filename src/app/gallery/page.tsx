'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { Sparkles, Eye, X, Play } from 'lucide-react';

interface GalleryItem {
  id: number;
  title: string;
  category: 'rooms' | 'classrooms' | 'activities' | 'events';
  categoryLabel: string;
  image: string;
  aspect: string;
  type?: 'image' | 'video';
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'Therapies & Benefits Flyer (Back)',
    category: 'rooms',
    categoryLabel: 'Center Info',
    image: '/images/template_back.jpeg',
    aspect: 'aspect-[3/4]',
  },
  {
    id: 2,
    title: 'Inclusive Education Flyer (Front)',
    category: 'events',
    categoryLabel: 'Center Info',
    image: '/images/template_front.jpeg',
    aspect: 'aspect-[3/4]',
  },
  {
    id: 4,
    title: 'Origin Visiting Card (Shakti Nagar)',
    category: 'rooms',
    categoryLabel: 'Center Info',
    image: '/images/visiting_card.jpeg',
    aspect: 'aspect-video',
  },
  {
    id: 5,
    title: 'Origin Center Brand Logo',
    category: 'events',
    categoryLabel: 'Center Info',
    image: '/images/logo.jpeg',
    aspect: 'aspect-square',
  },
  {
    id: 6,
    title: 'Reception Area',
    category: 'events',
    categoryLabel: 'Center Info',
    image: '/images/info_1.jpeg',
    aspect: 'aspect-[3/4]',
  },
  {
    id: 7,
    title: 'Classroom',
    category: 'classrooms',
    categoryLabel: 'Center Info',
    image: '/images/class_1.jpeg',
    aspect: 'aspect-[3/4]',
  },
  {
    id: 8,
    title: 'Classroom',
    category: 'classrooms',
    categoryLabel: 'Center Info',
    image: '/images/class_2.jpeg',
    aspect: 'aspect-[3/4]',
  },
  {
    id: 9,
    title: 'Classroom',
    category: 'classrooms',
    categoryLabel: 'Center Info',
    image: '/images/class_3.jpeg',
    aspect: 'aspect-[3/4]',
  },
  {
    id: 10,
    title: 'Play Activity',
    category: 'activities',
    categoryLabel: 'Play Activities',
    image: '/images/activity_1.mp4',
    aspect: 'aspect-[3/4]',
    type: 'video',
  },
  {
    id: 11,
    title: 'Play Activity',
    category: 'activities',
    categoryLabel: 'Play Activities',
    image: '/images/activity_2.mp4',
    aspect: 'aspect-[3/4]',
    type: 'video',
  },
  {
    id: 12,
    title: 'Play Activity',
    category: 'activities',
    categoryLabel: 'Play Activities',
    image: '/images/activity_3.mp4',
    aspect: 'aspect-[3/4]',
    type: 'video',
  },
];

function GalleryVideoCard({
  item,
  onOpen,
}: {
  item: GalleryItem;
  onOpen: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const play = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    void v.play().then(() => setPlaying(true)).catch(() => {});
  };

  const pause = () => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
    setPlaying(false);
  };

  return (
    <div
      onClick={onOpen}
      onMouseEnter={play}
      onMouseLeave={pause}
      onTouchStart={play}
      onTouchEnd={pause}
      className={`break-inside-avoid relative overflow-hidden rounded-3xl border border-neutral-100 bg-neutral-900 group cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300 ${item.aspect}`}
    >
      <video
        ref={videoRef}
        src={item.image}
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {!playing && (
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-900/25 pointer-events-none">
          <span className="p-3 rounded-full bg-white/90 text-brand-blue-600 shadow-md">
            <Play className="w-5 h-5 fill-current" />
          </span>
        </div>
      )}

      <div className="absolute inset-0 bg-neutral-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 pointer-events-none">
        <div className="self-end p-2 bg-white/20 backdrop-blur-md rounded-full text-white">
          <Play className="w-4 h-4 fill-current" />
        </div>
        <div className="text-white">
          <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-md">
            {item.categoryLabel}
          </span>
          <h3 className="text-sm font-bold mt-2 font-outfit">{item.title}</h3>
        </div>
      </div>
    </div>
  );
}

export default function GalleryPage() {
  const [filter, setFilter] = useState<string>('all');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const filteredItems = galleryItems.filter(
    (item) => filter === 'all' || item.category === filter
  );

  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-brand-blue-50/50 to-white py-16 md:py-20 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-brand-blue-50 border border-brand-blue-100 text-brand-blue-600 rounded-full text-xs font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Center Tour
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-800 tracking-tight font-outfit">
            Our Center Photo Gallery
          </h1>
          <p className="text-sm sm:text-base text-neutral-500 mt-4 max-w-xl mx-auto leading-relaxed font-semibold">
            Take a virtual tour of our special school classrooms, sensory integration setups, and therapy play spaces in Delhi.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-neutral-50/30 border-b border-neutral-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-3">
          {[
            { id: 'all', label: 'Show All' },
            { id: 'rooms', label: 'Therapy Rooms' },
            { id: 'classrooms', label: 'Classrooms' },
            { id: 'activities', label: 'Play Activities' },
            { id: 'events', label: 'Events & Info' },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                filter === btn.id
                  ? 'bg-brand-blue-500 text-white shadow-md shadow-brand-blue-100'
                  : 'bg-white border border-neutral-200 text-neutral-600 hover:bg-neutral-50'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredItems.map((item) =>
              item.type === 'video' ? (
                <GalleryVideoCard
                  key={item.id}
                  item={item}
                  onOpen={() => setLightboxItem(item)}
                />
              ) : (
                <div
                  key={item.id}
                  onClick={() => setLightboxItem(item)}
                  className={`break-inside-avoid relative overflow-hidden rounded-3xl border border-neutral-100 bg-white group cursor-zoom-in shadow-sm hover:shadow-md transition-shadow duration-300 ${item.aspect}`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Cover Overlay on Hover */}
                  <div className="absolute inset-0 bg-neutral-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                    <div className="self-end p-2 bg-white/20 backdrop-blur-md rounded-full text-white">
                      <Eye className="w-4 h-4" />
                    </div>
                    <div className="text-white">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-md">
                        {item.categoryLabel}
                      </span>
                      <h3 className="text-sm font-bold mt-2 font-outfit">{item.title}</h3>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            onClick={() => setLightboxItem(null)}
            className="absolute inset-0 bg-neutral-900/90"
            aria-hidden="true"
          />
          {/* Content */}
          <div className="relative max-w-4xl max-h-[85vh] w-full aspect-video z-10 flex flex-col items-center justify-center">
            {/* Close Button */}
            <button
              onClick={() => setLightboxItem(null)}
              className="absolute -top-12 right-0 p-2 text-white/70 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Close image viewer"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative w-full h-full bg-neutral-950 rounded-2xl overflow-hidden shadow-2xl">
              {lightboxItem.type === 'video' ? (
                <video
                  src={lightboxItem.image}
                  controls
                  autoPlay
                  playsInline
                  className="absolute inset-0 h-full w-full object-contain"
                />
              ) : (
                <Image
                  src={lightboxItem.image}
                  alt={lightboxItem.title}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              )}
            </div>
            <p className="text-white text-sm font-semibold mt-4 text-center">
              {lightboxItem.title} — <span className="text-neutral-400">{lightboxItem.categoryLabel}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
