'use client';

import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, User, Phone, Baby, MessageSquare, MapPin } from 'lucide-react';
import { useModal } from '@/context/ModalContext';

const bookingSchema = z.object({
  parentName: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit mobile number (e.g. 9876543210)'),
  childName: z.string().min(1, 'Child name is required'),
  childAge: z.string().min(1, 'Please select child\'s age'),
  service: z.string().min(1, 'Please select a service'),
  branch: z.string().min(1, 'Please select a preferred branch'),
  notes: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

export default function BookAssessmentModal() {
  const { isBookModalOpen, closeBookModal } = useModal();
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [submitError, setSubmitError] = React.useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
  });

  useEffect(() => {
    if (isBookModalOpen) {
      document.body.style.overflow = 'hidden';
      setIsSubmitted(false);
      setSubmitError(null);
      reset();
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isBookModalOpen, reset]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeBookModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [closeBookModal]);

  const onSubmit = async (data: BookingFormValues) => {
    if (!formspreeEndpoint) {
      setSubmitError('Form endpoint is not configured.');
      return;
    }

    setSubmitError(null);

    const res = await fetch(formspreeEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        ...data,
        _subject: 'Book Free Assessment',
        form: 'book-assessment',
      }),
    });

    if (!res.ok) {
      setSubmitError('Something went wrong. Please try again.');
      return;
    }

    setIsSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isBookModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={closeBookModal}
            className="absolute inset-0 bg-neutral-900"
            aria-hidden="true"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-xl overflow-hidden z-10"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Top wave decorator in coral */}
            <div className="h-3 bg-gradient-to-r from-brand-blue-500 via-brand-coral-500 to-brand-purple-500" />

            {/* Close Button */}
            <button
              onClick={closeBookModal}
              className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-neutral-600 rounded-full hover:bg-neutral-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 md:p-8">
              {!isSubmitted ? (
                <>
                  <div className="text-center mb-6">
                    <span className="inline-block px-3 py-1 bg-brand-blue-50 text-brand-blue-600 text-xs font-semibold rounded-full mb-2">
                      Start Your Journey
                    </span>
                    <h2 id="modal-title" className="text-2xl font-bold text-neutral-800 font-outfit">
                      Book a Free Assessment
                    </h2>
                    <p className="text-sm text-neutral-500 mt-1">
                      Our specialists will evaluate your child and create a custom learning plan.
                    </p>
                  </div>

                  <form
                    action={formspreeEndpoint}
                    method="POST"
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-4"
                  >
                    {/* Parent Name */}
                    <div>
                      <label className="block text-xs font-semibold text-neutral-600 mb-1 flex items-center gap-1">
                        <User className="w-3.5 h-3.5 text-brand-blue-500" /> Parent&apos;s Full Name
                      </label>
                      <input
                        type="text"
                        {...register('parentName')}
                        name="parentName"
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent transition-all"
                      />
                      {errors.parentName && (
                        <p className="text-xs text-red-500 mt-1">{errors.parentName.message}</p>
                      )}
                    </div>

                    {/* Contact Number */}
                    <div>
                      <label className="block text-xs font-semibold text-neutral-600 mb-1 flex items-center gap-1">
                        <Phone className="w-3.5 h-3.5 text-brand-coral-500" /> Mobile Number
                      </label>
                      <input
                        type="tel"
                        {...register('phone')}
                        name="phone"
                        placeholder="9876543210"
                        className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent transition-all"
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {/* Child Name */}
                      <div>
                        <label className="block text-xs font-semibold text-neutral-600 mb-1 flex items-center gap-1">
                          <Baby className="w-3.5 h-3.5 text-brand-green-500" /> Child&apos;s Name
                        </label>
                        <input
                          type="text"
                          {...register('childName')}
                          name="childName"
                          placeholder="Leo"
                          className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent transition-all"
                        />
                        {errors.childName && (
                          <p className="text-xs text-red-500 mt-1">{errors.childName.message}</p>
                        )}
                      </div>

                      {/* Child Age */}
                      <div>
                        <label className="block text-xs font-semibold text-neutral-600 mb-1 flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-brand-yellow-500" /> Child&apos;s Age
                        </label>
                        <select
                          {...register('childAge')}
                          name="childAge"
                          className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent transition-all appearance-none"
                        >
                          <option value="">Select Age</option>
                          <option value="Under 2">Under 2 years</option>
                          <option value="2-4">2 - 4 years</option>
                          <option value="5-7">5 - 7 years</option>
                          <option value="8-12">8 - 12 years</option>
                          <option value="12+">Above 12 years</option>
                        </select>
                        {errors.childAge && (
                          <p className="text-xs text-red-500 mt-1">{errors.childAge.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Services and Branches */}
                    <div className="grid grid-cols-2 gap-4">
                      {/* Service Needed */}
                      <div>
                        <label className="block text-xs font-semibold text-neutral-600 mb-1">
                          Service Needed
                        </label>
                        <select
                          {...register('service')}
                          name="service"
                          className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent transition-all appearance-none"
                        >
                          <option value="">Select Service</option>
                          <option value="speech">Speech Therapy</option>
                          <option value="occupational">Occupational Therapy</option>
                          <option value="behavioral">Behavioral Therapy</option>
                          <option value="special-ed">Special Education</option>
                          <option value="sensory">Sensory Integration</option>
                          <option value="early-interv">Early Intervention</option>
                          <option value="social-skills">Social Skills Training</option>
                          <option value="counseling">Parent Counseling</option>
                        </select>
                        {errors.service && (
                          <p className="text-xs text-red-500 mt-1">{errors.service.message}</p>
                        )}
                      </div>

                      {/* Preferred Location */}
                      <div>
                        <label className="block text-xs font-semibold text-neutral-600 mb-1 flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-brand-purple-500" /> Preferred Branch
                        </label>
                        <select
                          {...register('branch')}
                          name="branch"
                          className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent transition-all appearance-none"
                        >
                          <option value="">Select Branch</option>
                          <option value="shakti-nagar">Shakti Nagar (North Delhi)</option>
                          <option value="virtual">Virtual / Online Consultation</option>
                        </select>
                        {errors.branch && (
                          <p className="text-xs text-red-500 mt-1">{errors.branch.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Notes */}
                    <div>
                      <label className="block text-xs font-semibold text-neutral-600 mb-1 flex items-center gap-1">
                        <MessageSquare className="w-3.5 h-3.5 text-neutral-400" /> Additional Details (Optional)
                      </label>
                      <textarea
                        {...register('notes')}
                        name="notes"
                        rows={2}
                        placeholder="Please share any specific delays or diagnosis (e.g. Speech delay, Autism, ADHD)..."
                        className="w-full px-4 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent transition-all resize-none"
                      />
                    </div>

                    {submitError && (
                      <p className="text-xs text-red-500">{submitError}</p>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-2 py-3 bg-brand-coral-500 hover:bg-brand-coral-600 text-white font-bold rounded-xl text-sm transition-all duration-200 transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 shadow-md shadow-brand-coral-100 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Processing Request...
                        </>
                      ) : (
                        'Request Free Assessment'
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-brand-green-50 text-brand-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-800 font-outfit">Assessment Requested!</h3>
                  <p className="text-sm text-neutral-500 mt-2 max-w-sm mx-auto">
                    Thank you! We have received your details. One of our special educators will contact you within 24 hours to schedule the assessment visit.
                  </p>
                  <button
                    onClick={closeBookModal}
                    className="mt-6 px-6 py-2 bg-neutral-800 hover:bg-neutral-900 text-white font-semibold text-sm rounded-xl transition-all"
                  >
                    Close Window
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}


