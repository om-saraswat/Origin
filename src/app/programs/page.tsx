import React from 'react';
import { Sparkles, GraduationCap, Clock, Heart, Users } from 'lucide-react';

export const metadata = {
  title: 'Our Programs | Inclusive School & Child Care, Delhi',
  description: 'Discover our developmental and school programs: Inclusive Special School, School Readiness, IEPs, Parent training, and Day Care.',
};

const programs = [
  {
    title: 'Inclusive Special School',
    desc: 'A full-day academic program for children with special needs. We adapt standard education streams to match cognitive capacity, ensuring zero frustration and progressive educational development.',
    icon: GraduationCap,
    colorClass: 'text-brand-blue-500 bg-brand-blue-50 border-brand-blue-100',
    details: 'Ages: 4 - 12 Years • Low Student Ratio (1:3)'
  },
  {
    title: 'Therapeutic Day Care',
    desc: 'Safe, sensory-friendly day care for children with developmental delays. Features structured routines, motor coordination playing, socialization hours, and dedicated clinical support throughout the stay.',
    icon: Clock,
    colorClass: 'text-brand-coral-500 bg-brand-coral-50 border-brand-coral-100',
    details: 'Ages: 2 - 8 Years • Specialized Caregivers'
  },
  {
    title: 'School Readiness Program',
    desc: 'Preparing toddlers for transition into mainstream schools. We focus on building peer sharing, toilet independence, classroom attention spans, and basic phonics/writing habits.',
    icon: Sparkles,
    colorClass: 'text-brand-green-600 bg-brand-green-50 border-brand-green-100',
    details: 'Ages: 3 - 5 Years • Integration Focused'
  },
  {
    title: 'Individual Education Plan (IEP)',
    desc: 'Every child gets a baseline assessment followed by an individualized academic and physical growth syllabus. The plan details cognitive, motor, sensory, and vocabulary targets updated quarterly.',
    icon: Heart,
    colorClass: 'text-brand-yellow-600 bg-brand-yellow-50 border-brand-yellow-100',
    details: 'Custom Targets • Parent Collaboration'
  },
  {
    title: 'Parent Training & Support',
    desc: 'Empowering families with home counseling, behavioral guidance, and milestone education. We provide structured home plans to reinforce occupational or speech therapy outside our clinic.',
    icon: Users,
    colorClass: 'text-brand-purple-500 bg-brand-purple-50 border-brand-purple-100',
    details: 'Weekly Audits • Sibling Guidance'
  },
  {
    title: 'Life Skills & Group Play',
    desc: 'Teaches age-appropriate daily independence (dressing, feeding, basic safety checks) combined with group games to improve peer conversational flow and social self-regulation.',
    icon: GraduationCap,
    colorClass: 'text-brand-blue-600 bg-brand-blue-50 border-brand-blue-100',
    details: 'Ages: 6+ Years • Small Group Settings'
  }
];

export default function ProgramsPage() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-brand-blue-50/50 to-white py-16 md:py-20 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-brand-purple-50 border border-brand-purple-100 text-brand-purple-600 rounded-full text-xs font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Developmental Milestones
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-800 tracking-tight font-outfit">
            Academic & Play Programs
          </h1>
          <p className="text-sm sm:text-base text-neutral-500 mt-4 max-w-xl mx-auto leading-relaxed font-semibold">
            We offer structured academic and behavioral programs designed to foster real independence. Under the supervision of clinical educators, children learn, play, and grow.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-neutral-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((prog, idx) => {
              const Icon = prog.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-3xl border border-neutral-100 shadow-sm flex flex-col justify-between transition-all hover:shadow-md hover:scale-[1.01]"
                >
                  <div className="space-y-6">
                    <div className={`p-4 rounded-2xl w-14 h-14 flex items-center justify-center border ${prog.colorClass}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-neutral-800 font-outfit mb-3">{prog.title}</h3>
                      <p className="text-xs text-neutral-500 leading-relaxed font-semibold">{prog.desc}</p>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-neutral-50 flex justify-between items-center text-[10px] font-extrabold text-neutral-400 uppercase tracking-widest">
                    <span>{prog.details}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
