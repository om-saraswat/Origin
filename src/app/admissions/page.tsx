'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Sparkles, CheckCircle2, FileText, Calendar, Building, HelpCircle } from 'lucide-react';

const admissionSchema = z.object({
  parentName: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit mobile number'),
  email: z.string().email('Please enter a valid email address'),
  childName: z.string().min(1, 'Child name is required'),
  childAge: z.string().min(1, 'Please select child age'),
  branch: z.string().min(1, 'Please select a branch'),
  visitDate: z.string().min(1, 'Preferred visit date is required'),
  notes: z.string().optional(),
});

type AdmissionFormValues = z.infer<typeof admissionSchema>;

export default function AdmissionsPage() {
  const [submitted, setSubmitted] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AdmissionFormValues>({
    resolver: zodResolver(admissionSchema),
  });

  const onSubmit = async (data: AdmissionFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Admissions Inquiry:', data);
    setSubmitted(true);
    reset();
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-brand-blue-50/50 to-white py-16 md:py-20 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-brand-coral-50 border border-brand-coral-100 text-brand-coral-600 rounded-full text-xs font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Open Admissions
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-800 tracking-tight font-outfit">
            Admissions & Visit Scheduler
          </h1>
          <p className="text-sm sm:text-base text-neutral-500 mt-4 max-w-xl mx-auto leading-relaxed font-semibold">
            We welcome children with diverse needs. Read our eligibility and admission checklists, and schedule a physical school tour below.
          </p>
        </div>
      </section>

      {/* Main content grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Eligibility, Documents & Process (8 cols) */}
            <div className="lg:col-span-7 space-y-12">
              
              {/* Eligibility */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-neutral-800 font-outfit">Eligibility Criteria</h2>
                <p className="text-xs text-neutral-500 leading-relaxed font-semibold">
                  Origin caters to kids showing motor, communication, or cognitive delays. Our program is designed for:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex gap-2 items-start text-xs font-semibold text-neutral-600">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue-500 shrink-0 mt-0.5" />
                    <span>Ages 1.5 - 12 Years old</span>
                  </div>
                  <div className="flex gap-2 items-start text-xs font-semibold text-neutral-600">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue-500 shrink-0 mt-0.5" />
                    <span>Speech delays or Articulation concerns</span>
                  </div>
                  <div className="flex gap-2 items-start text-xs font-semibold text-neutral-600">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue-500 shrink-0 mt-0.5" />
                    <span>Autism Spectrum Delays (ASD)</span>
                  </div>
                  <div className="flex gap-2 items-start text-xs font-semibold text-neutral-600">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue-500 shrink-0 mt-0.5" />
                    <span>ADHD or Hyperactivity processing issues</span>
                  </div>
                </div>
              </div>

              {/* Required Documents */}
              <div className="bg-neutral-50 p-6 sm:p-8 rounded-3xl border border-neutral-100 space-y-4">
                <h2 className="text-lg font-bold text-neutral-800 font-outfit flex items-center gap-2">
                  <FileText className="w-5 h-5 text-brand-coral-500" /> Required Documents Checklist
                </h2>
                <p className="text-xs text-neutral-500 font-semibold mb-2">
                  Please keep copies of the following documents ready for the trial evaluation session:
                </p>
                <ul className="space-y-3.5 text-xs text-neutral-600 font-semibold">
                  <li className="flex gap-2">📄 Child&apos;s Birth Certificate copy</li>
                  <li className="flex gap-2">📄 Pediatrician clinical recommendation reports (if any)</li>
                  <li className="flex gap-2">📄 Previous speech/occupational therapy summaries (if any)</li>
                  <li className="flex gap-2">📄 Child&apos;s Aadhaar Card / ID proof copy</li>
                  <li className="flex gap-2">📄 4 passport-size photographs of the child</li>
                </ul>
              </div>

              {/* Steps process */}
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-neutral-800 font-outfit">Admissions Workflow</h2>
                <div className="relative border-l border-neutral-100 pl-6 space-y-6">
                  <div>
                    <span className="absolute -left-[31px] top-0 w-4 h-4 bg-white border-2 border-brand-blue-500 rounded-full flex items-center justify-center text-[8px] font-extrabold text-brand-blue-600">1</span>
                    <h4 className="text-xs font-extrabold text-neutral-800 font-outfit">Submit Online Inquiry</h4>
                    <p className="text-[11px] text-neutral-500 leading-relaxed font-semibold mt-1">Fill out the visitation scheduler form on the right. Our admissions desk will call you to confirm.</p>
                  </div>
                  <div>
                    <span className="absolute -left-[31px] top-0 w-4 h-4 bg-white border-2 border-brand-blue-500 rounded-full flex items-center justify-center text-[8px] font-extrabold text-brand-blue-600">2</span>
                    <h4 className="text-xs font-extrabold text-neutral-800 font-outfit">Center Visit & Evaluation</h4>
                    <p className="text-[11px] text-neutral-500 leading-relaxed font-semibold mt-1">Tour our classroom/sensory rooms. Our developmental therapist runs a baseline cognitive-motor assessment.</p>
                  </div>
                  <div>
                    <span className="absolute -left-[31px] top-0 w-4 h-4 bg-white border-2 border-brand-blue-500 rounded-full flex items-center justify-center text-[8px] font-extrabold text-brand-blue-600">3</span>
                    <h4 className="text-xs font-extrabold text-neutral-800 font-outfit">2-Day Class Trial</h4>
                    <p className="text-[11px] text-neutral-500 leading-relaxed font-semibold mt-1">Your child joins trial play hours so special educators can monitor peer cooperation and sensory habits.</p>
                  </div>
                  <div>
                    <span className="absolute -left-[31px] top-0 w-4 h-4 bg-white border-2 border-brand-blue-500 rounded-full flex items-center justify-center text-[8px] font-extrabold text-brand-blue-600">4</span>
                    <h4 className="text-xs font-extrabold text-neutral-800 font-outfit">IEP Design & Enrollment</h4>
                    <p className="text-[11px] text-neutral-500 leading-relaxed font-semibold mt-1">Upon confirmation, we create the IEP program and coordinate session timings for enrollment.</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Inquiry & Visit Scheduler Form (4 cols) */}
            <div className="lg:col-span-5">
              <div className="bg-white border border-neutral-100 shadow-xl rounded-3xl p-6 md:p-8 space-y-6">
                {!submitted ? (
                  <>
                    <div>
                      <span className="text-[10px] font-extrabold text-brand-blue-600 uppercase tracking-widest block mb-1">Admissions Desk</span>
                      <h3 className="text-xl font-bold text-neutral-800 font-outfit">Schedule Center Visit</h3>
                      <p className="text-xs text-neutral-400 mt-1">Schedule a tour and free trial slot.</p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                      {/* Parent Name */}
                      <div>
                        <label className="block text-[11px] font-semibold text-neutral-600 mb-1">Parent&apos;s Name</label>
                        <input
                          type="text"
                          {...register('parentName')}
                          placeholder="Jane Doe"
                          className="w-full px-4 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-xs focus:ring-2 focus:ring-brand-blue-500 focus:outline-none"
                        />
                        {errors.parentName && (
                          <p className="text-[11px] text-red-500 mt-1">{errors.parentName.message}</p>
                        )}
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-[11px] font-semibold text-neutral-600 mb-1">Mobile Number</label>
                        <input
                          type="tel"
                          {...register('phone')}
                          placeholder="9876543210"
                          className="w-full px-4 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-xs focus:ring-2 focus:ring-brand-blue-500 focus:outline-none"
                        />
                        {errors.phone && (
                          <p className="text-[11px] text-red-500 mt-1">{errors.phone.message}</p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-[11px] font-semibold text-neutral-600 mb-1">Email Address</label>
                        <input
                          type="email"
                          {...register('email')}
                          placeholder="john@example.com"
                          className="w-full px-4 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-xs focus:ring-2 focus:ring-brand-blue-500 focus:outline-none"
                        />
                        {errors.email && (
                          <p className="text-[11px] text-red-500 mt-1">{errors.email.message}</p>
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        {/* Child Name */}
                        <div>
                          <label className="block text-[11px] font-semibold text-neutral-600 mb-1">Child&apos;s Name</label>
                          <input
                            type="text"
                            {...register('childName')}
                            placeholder="Leo"
                            className="w-full px-4 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-xs focus:ring-2 focus:ring-brand-blue-500 focus:outline-none"
                          />
                          {errors.childName && (
                            <p className="text-[11px] text-red-500 mt-1">{errors.childName.message}</p>
                          )}
                        </div>

                        {/* Child Age */}
                        <div>
                          <label className="block text-[11px] font-semibold text-neutral-600 mb-1">Child&apos;s Age</label>
                          <select
                            {...register('childAge')}
                            className="w-full px-4 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-xs focus:ring-2 focus:ring-brand-blue-500 focus:outline-none appearance-none"
                          >
                            <option value="">Select Age</option>
                            <option value="Under 2">Under 2 years</option>
                            <option value="2-4">2-4 years</option>
                            <option value="5-7">5-7 years</option>
                            <option value="8-12">8-12 years</option>
                          </select>
                          {errors.childAge && (
                            <p className="text-[11px] text-red-500 mt-1">{errors.childAge.message}</p>
                          )}
                        </div>
                      </div>

                      {/* Select Branch */}
                      <div>
                        <label className="block text-[11px] font-semibold text-neutral-600 mb-1 flex items-center gap-1">
                          <Building className="w-3.5 h-3.5 text-brand-blue-500" /> Center Location
                        </label>
                        <select
                          {...register('branch')}
                          className="w-full px-4 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-xs focus:ring-2 focus:ring-brand-blue-500 focus:outline-none appearance-none"
                        >
                          <option value="">Select Branch</option>
                          <option value="shakti-nagar">Shakti Nagar (Delhi-110007)</option>
                          <option value="bhajan-pura">Bhajan Pura (Delhi-110053)</option>
                        </select>
                        {errors.branch && (
                          <p className="text-[11px] text-red-500 mt-1">{errors.branch.message}</p>
                        )}
                      </div>

                      {/* Preferred Visit Date */}
                      <div>
                        <label className="block text-[11px] font-semibold text-neutral-600 mb-1 flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-brand-green-500" /> Preferred Visit Date
                        </label>
                        <input
                          type="date"
                          {...register('visitDate')}
                          className="w-full px-4 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-xs focus:ring-2 focus:ring-brand-blue-500 focus:outline-none"
                        />
                        {errors.visitDate && (
                          <p className="text-[11px] text-red-500 mt-1">{errors.visitDate.message}</p>
                        )}
                      </div>

                      {/* Notes */}
                      <div>
                        <label className="block text-[11px] font-semibold text-neutral-600 mb-1 flex items-center gap-1">
                          <HelpCircle className="w-3.5 h-3.5 text-neutral-400" /> Concerns (Optional)
                        </label>
                        <textarea
                          {...register('notes')}
                          rows={2}
                          placeholder="Mention speech, motor delays, hyperactivity, or previous diagnostic reviews..."
                          className="w-full px-4 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-xs focus:ring-2 focus:ring-brand-blue-500 focus:outline-none resize-none font-semibold"
                        />
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 bg-brand-coral-500 hover:bg-brand-coral-600 text-white font-extrabold rounded-xl text-xs uppercase tracking-wider transition-colors shadow-md shadow-brand-coral-100 disabled:opacity-50 cursor-pointer"
                      >
                        {isSubmitting ? 'Submitting Request...' : 'Schedule School Visit'}
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 bg-brand-green-50 text-brand-green-600 rounded-full flex items-center justify-center mx-auto">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-800 font-outfit">Visit Request Received!</h3>
                    <p className="text-xs text-neutral-500 leading-relaxed font-semibold">
                      Thank you for scheduling a visit. Our admissions supervisor will call you within 12 hours to confirm your trial slot and coordinate the required paperwork.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 px-6 py-2 bg-neutral-800 hover:bg-neutral-900 text-white font-bold text-xs rounded-xl transition-all"
                    >
                      Book Another Visit
                    </button>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
