import React from 'react';
import { Sparkles, Target, Compass, Eye, Heart, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'About Our Center | Origin Inclusive & Special School',
  description: 'Learn about our mission, our story, why early intervention is critical, and meet our certified therapists in Delhi.',
};

const values = [
  {
    title: 'Compassion First',
    description: 'Every  interaction is handled with deep sensitivity, patience, and warmth, creating a safe emotional space for your child.',
    icon: Heart,
    colorClass: 'text-brand-coral-500 bg-brand-coral-50',
  },
  {
    title: 'Clinical Excellence',
    description: 'We adhere strictly to evidence-based practices, clinical standardized tests, and structured therapy protocols.',
    icon: Target,
    colorClass: 'text-brand-blue-500 bg-brand-blue-50',
  },
  {
    title: 'Family Partnership',
    description: 'We believe active parents make successful children. We train and guide families for consistency at home.',
    icon: Users,
    colorClass: 'text-brand-green-600 bg-brand-green-50',
  },
];

const specialists = [
  {
    name: 'Special Educators',
    role: 'Academic & Cognitive Development',
    qual: 'Adapting curricula to match cognitive capacity, designing and reviewing IEPs for progressive development.',
    color: 'bg-brand-blue-50 text-brand-blue-600',
    abbr: 'SE',
  },
  {
    name: 'Speech & Language Pathologists',
    role: 'Speech & Communication Therapy',
    qual: 'Conducting assessments and target speech mappings to help children express themselves clearly.',
    color: 'bg-brand-coral-50 text-brand-coral-600',
    abbr: 'SLP',
  },
  {
    name: 'Occupational Therapists',
    role: 'Motor Skills & Daily Independence',
    qual: 'Building fine-motor dexterity, pencil grip, hand strength, and personal care routines.',
    color: 'bg-brand-green-50 text-brand-green-600',
    abbr: 'OT',
  },
  {
    name: 'Sensory Integration Experts',
    role: 'Sensory & Auditory Regulation',
    qual: 'Using specialised swings, texture boards, and sensory diets to balance sensitivities.',
    color: 'bg-brand-purple-50 text-brand-purple-600',
    abbr: 'SI',
  },
];

const centerSections = [
  { title: 'Multisensory Therapy Room', desc: 'Equipped with swings, sensory mats, sound integration nodes, and light panels for sensory processing.', icon: '🎧' },
  { title: 'Interactive Classrooms', desc: 'Low student-to-teacher ratio spaces designed for cognitive play, storytelling, and early academics.', icon: '🎒' },
  { title: 'Speech & Speech-Language Lab', desc: 'Quiet, distraction-free environment for articulation, language building, and digital learning tools.', icon: '🗣️' },
  { title: 'Indoor Play & Social Area', desc: 'Soft-padded safety play zone for gross motor activities, coordination training, and peer interaction.', icon: '🧸' },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-brand-blue-50/50 to-white py-16 md:py-24 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-brand-blue-50 border border-brand-blue-100 text-brand-blue-600 rounded-full text-xs font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Compassionate Pediatric Care
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-800 tracking-tight font-outfit">
            Nurturing Unique Potentials, Every Day
          </h1>
          <p className="text-sm sm:text-base text-neutral-500 mt-4 max-w-xl mx-auto leading-relaxed font-semibold">
            Origin is a leading Inclusive Special School and Child Development Center in Delhi. We combine special education and clinical therapies under one roof.
          </p>
        </div>
      </section>

      {/* Our Story & Early Intervention */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side: Our Story text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-extrabold text-brand-coral-500 uppercase tracking-widest bg-brand-coral-50 px-3 py-1 rounded-full">
                Our Genesis
              </span>
              <h2 className="text-3xl font-extrabold text-neutral-800 font-outfit">
                Empowering Kids With Diverse Needs
              </h2>
              <p className="text-sm text-neutral-500 leading-relaxed font-semibold">
                Origin was founded by a team of pediatric therapists and special educators who realized parents had to travel to multiple clinics for speech therapy, occupational therapy, and special education. We created a single, state-of-the-art center where therapists and educators collaborate in real time.
              </p>
              <p className="text-sm text-neutral-500 leading-relaxed font-semibold">
                We believe that cognitive or developmental delays shouldn&apos;t isolate a child. By combining school-readiness curriculum with active clinical intervention, we help children transition smoothly into mainstream schools and society.
              </p>
            </div>

            {/* Right side: Why Early Intervention matters */}
            <div className="lg:col-span-5 bg-brand-yellow-50/50 rounded-3xl p-8 border border-brand-yellow-100/50">
              <h3 className="text-lg font-bold text-neutral-800 font-outfit mb-3">
                Why Early Intervention Matters?
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed font-semibold mb-4">
                A child&apos;s brain develops fastest between birth and 5 years old. During this period of high neural plasticity, clinical therapy can reshape cognitive, speech, and sensory paths far more effectively.
              </p>
              <ul className="space-y-2.5 text-xs text-neutral-600 font-bold">
                <li className="flex items-center gap-2">✓ Bridges developmental milestones early</li>
                <li className="flex items-center gap-2">✓ Prevents academic frustration in later years</li>
                <li className="flex items-center gap-2">✓ Builds early independence and vocabulary</li>
                <li className="flex items-center gap-2">✓ Equips parents with behavioral coping skills</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Mission & Vision cards */}
      <section className="py-16 bg-neutral-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white p-8 rounded-3xl border border-neutral-100 shadow-sm flex gap-4">
              <div className="p-3 bg-brand-blue-50 text-brand-blue-500 rounded-xl shrink-0 h-12 w-12 flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-neutral-800 font-outfit mb-2">Our Mission</h3>
                <p className="text-xs text-neutral-500 leading-relaxed font-semibold">
                  To provide compassionate, comprehensive, and scientifically grounded therapy and special education that respects each child&apos;s individual timeline. We aim to equip every child with speech clarity, motor control, and cognitive tools to live independently.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-3xl border border-neutral-100 shadow-sm flex gap-4">
              <div className="p-3 bg-brand-purple-50 text-brand-purple-500 rounded-xl shrink-0 h-12 w-12 flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-neutral-800 font-outfit mb-2">Our Vision</h3>
                <p className="text-xs text-neutral-500 leading-relaxed font-semibold">
                  To build a warm, inclusive society where developmental differences are identified early and supported with empathy. We envision a future where neurodiverse children are celebrated for their unique minds and participate fully in our schools and workspaces.
                </p>
              </div>
            </div>
          </div>

          {/* Values Row */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="bg-white p-6 rounded-2xl border border-neutral-100/50 flex flex-col items-start">
                  <div className={`p-3 rounded-xl mb-4 ${v.colorClass}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-neutral-800 font-outfit mb-2">{v.title}</h4>
                  <p className="text-xs text-neutral-400 leading-relaxed font-bold">{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-extrabold text-brand-green-600 uppercase tracking-widest bg-brand-green-50 px-3 py-1 rounded-full">
              Expert Clinical Team
            </span>
            <h2 className="text-3xl font-extrabold text-neutral-800 tracking-tight mt-4 font-outfit">
              Our Professional Staff
            </h2>
            <p className="text-sm text-neutral-500 mt-2 font-semibold">
              Meet our certified specialists in Speech, OT, ABA, and Special Education.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialists.map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-neutral-100 shadow-sm p-6 flex flex-col justify-between transition-all hover:shadow-md"
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-extrabold text-xl mb-6 ${member.color} font-outfit`}>
                    {member.abbr}
                  </div>
                  <h3 className="text-base font-extrabold text-neutral-800 font-outfit">{member.name}</h3>
                  <p className="text-xs font-bold text-brand-blue-500 uppercase tracking-wide mt-1">{member.role}</p>
                  <p className="text-xs text-neutral-400 font-semibold mt-4 leading-relaxed">{member.qual}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Center Photos / Facilities Overview */}
      <section className="py-20 bg-neutral-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-extrabold text-brand-blue-600 uppercase tracking-widest bg-brand-blue-50 px-3 py-1 rounded-full">
              Center Infrastructure
            </span>
            <h2 className="text-3xl font-extrabold text-neutral-800 tracking-tight mt-4 font-outfit">
              Our Therapy Rooms & Classrooms
            </h2>
            <p className="text-sm text-neutral-500 mt-2 font-semibold">
              Providing positive, safe, child-proof sensory rooms and interactive play labs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {centerSections.map((sec, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl border border-neutral-100 shadow-sm flex items-start gap-4">
                <span className="text-4xl p-2 bg-neutral-50 rounded-2xl shrink-0 select-none">{sec.icon}</span>
                <div>
                  <h3 className="text-base font-extrabold text-neutral-800 font-outfit mb-2">{sec.title}</h3>
                  <p className="text-xs text-neutral-500 leading-relaxed font-semibold">{sec.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-1.5 px-6 py-3 bg-brand-coral-500 hover:bg-brand-coral-600 text-white font-bold rounded-2xl text-xs uppercase tracking-wider transition-all"
            >
              View Full Gallery <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
