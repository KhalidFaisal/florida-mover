'use client';

import { useState, useRef, useEffect } from 'react';
import {
  MapPin,
  Navigation,
  Calendar,
  Home,
  User,
  Phone,
  Mail,
  ArrowRight,
  ArrowLeft,
  Check,
  Loader2,
  Lock,
} from 'lucide-react';
import { HOME_SIZES, SERVICE_AREAS, SITE_CONFIG } from '@/data/siteData';

const STEPS = [
  { id: 1, label: 'Moving From', icon: MapPin, field: 'movingFrom' },
  { id: 2, label: 'Moving To', icon: Navigation, field: 'movingTo' },
  { id: 3, label: 'Move Date', icon: Calendar, field: 'moveDate' },
  { id: 4, label: 'Home Size', icon: Home, field: 'homeSize' },
  { id: 5, label: 'Contact Info', icon: User, field: 'contact' },
];

export default function QuoteForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    movingFrom: '',
    movingTo: '',
    moveDate: '',
    homeSize: '',
    name: '',
    phone: '',
    email: '',
  });
  const [errors, setErrors] = useState({});
  const formRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    if (formRef.current) {
      const els = formRef.current.querySelectorAll('.animate-on-scroll');
      els?.forEach((el) => observer.observe(el));
    }
    return () => observer.disconnect();
  }, []);

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: null }));
    }
  };

  const validateStep = () => {
    const newErrors = {};
    switch (currentStep) {
      case 1:
        if (!formData.movingFrom.trim()) newErrors.movingFrom = 'Please enter your current location';
        break;
      case 2:
        if (!formData.movingTo.trim()) newErrors.movingTo = 'Please enter your destination';
        break;
      case 3:
        if (!formData.moveDate) newErrors.moveDate = 'Please select a move date';
        break;
      case 4:
        if (!formData.homeSize) newErrors.homeSize = 'Please select your home size';
        break;
      case 5:
        if (!formData.name.trim()) newErrors.name = 'Please enter your name';
        if (!formData.phone.trim()) newErrors.phone = 'Please enter your phone number';
        if (!formData.email.trim()) newErrors.email = 'Please enter your email';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
          newErrors.email = 'Please enter a valid email';
        break;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) {
      if (currentStep < 5) {
        setCurrentStep((prev) => prev + 1);
      } else {
        handleSubmit();
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate form submission — replace with actual endpoint
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  // Get today's date for min date on calendar
  const today = new Date().toISOString().split('T')[0];

  if (isSubmitted) {
    return (
      <section id="quote" className="py-20 sm:py-28 bg-navy-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-gold-500/5 rounded-full blur-3xl" />
        <div className="container-custom relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
              <Check className="w-10 h-10 text-green-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
              Quote Request Received!
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Thanks, {formData.name}! We&apos;ll review your move details and get back to you 
              within 30 minutes during business hours. Need immediate help?
            </p>
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="btn-primary text-lg"
              id="quote-success-call"
            >
              <Phone className="w-5 h-5" />
              Call Us Now: {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="quote" className="py-20 sm:py-28 bg-navy-900 relative overflow-hidden" ref={formRef}>
      <div className="absolute top-0 right-0 w-72 h-72 bg-gold-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-navy-500/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-12 animate-on-scroll">
          <span className="inline-block text-gold-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Free Estimate
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
            Get Your <span className="gold-gradient-text">Free Quote</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Fill out this quick form and we&apos;ll get back to you with a no-obligation estimate.
          </p>
        </div>

        <div className="max-w-2xl mx-auto animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
          {/* Progress bar */}
          <div className="flex items-center justify-between mb-8">
            {STEPS.map((step, index) => {
              const Icon = step.icon;
              const isActive = currentStep === step.id;
              const isComplete = currentStep > step.id;
              return (
                <div key={step.id} className="flex items-center flex-1">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center 
                                transition-all duration-300 ${
                        isComplete
                          ? 'bg-green-500 text-white'
                          : isActive
                          ? 'bg-gold-500 text-navy-900 shadow-gold ring-4 ring-gold-500/20'
                          : 'bg-white/10 text-gray-500'
                      }`}
                    >
                      {isComplete ? (
                        <Check className="w-5 h-5" />
                      ) : (
                        <Icon className="w-5 h-5" />
                      )}
                    </div>
                    <span
                      className={`mt-2 text-xs font-medium hidden sm:block ${
                        isActive ? 'text-gold-400' : isComplete ? 'text-green-400' : 'text-gray-500'
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>
                  {index < STEPS.length - 1 && (
                    <div
                      className={`flex-1 h-0.5 mx-2 sm:mx-3 rounded transition-colors duration-300 ${
                        currentStep > step.id ? 'bg-green-500' : 'bg-white/10'
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Form card */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8">
            {/* Step label (mobile) */}
            <div className="sm:hidden text-gold-400 font-semibold text-sm mb-4">
              Step {currentStep} of 5: {STEPS[currentStep - 1].label}
            </div>

            {/* Step 1: Moving From */}
            {currentStep === 1 && (
              <div>
                <label className="block text-white font-heading font-semibold text-xl mb-2">
                  Where are you moving from?
                </label>
                <p className="text-gray-400 text-sm mb-6">Enter your current city or zip code</p>
                <input
                  type="text"
                  value={formData.movingFrom}
                  onChange={(e) => updateField('movingFrom', e.target.value)}
                  placeholder="e.g., Boca Raton, FL or 33432"
                  className={`w-full bg-white/10 border ${
                    errors.movingFrom ? 'border-red-400' : 'border-white/20'
                  } rounded-xl px-5 py-4 text-white placeholder-gray-500 
                           focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent
                           transition-all text-lg`}
                  id="quote-moving-from"
                />
                {errors.movingFrom && (
                  <p className="text-red-400 text-sm mt-2">{errors.movingFrom}</p>
                )}
              </div>
            )}

            {/* Step 2: Moving To */}
            {currentStep === 2 && (
              <div>
                <label className="block text-white font-heading font-semibold text-xl mb-2">
                  Where are you moving to?
                </label>
                <p className="text-gray-400 text-sm mb-6">Enter your destination city or zip code</p>
                <input
                  type="text"
                  value={formData.movingTo}
                  onChange={(e) => updateField('movingTo', e.target.value)}
                  placeholder="e.g., West Palm Beach, FL or 33401"
                  className={`w-full bg-white/10 border ${
                    errors.movingTo ? 'border-red-400' : 'border-white/20'
                  } rounded-xl px-5 py-4 text-white placeholder-gray-500 
                           focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent
                           transition-all text-lg`}
                  id="quote-moving-to"
                />
                {errors.movingTo && (
                  <p className="text-red-400 text-sm mt-2">{errors.movingTo}</p>
                )}
              </div>
            )}

            {/* Step 3: Move Date */}
            {currentStep === 3 && (
              <div>
                <label className="block text-white font-heading font-semibold text-xl mb-2">
                  When do you want to move?
                </label>
                <p className="text-gray-400 text-sm mb-6">Select your preferred move date</p>
                <input
                  type="date"
                  value={formData.moveDate}
                  onChange={(e) => updateField('moveDate', e.target.value)}
                  min={today}
                  className={`w-full bg-white/10 border ${
                    errors.moveDate ? 'border-red-400' : 'border-white/20'
                  } rounded-xl px-5 py-4 text-white 
                           focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent
                           transition-all text-lg [color-scheme:dark]`}
                  id="quote-move-date"
                />
                {errors.moveDate && (
                  <p className="text-red-400 text-sm mt-2">{errors.moveDate}</p>
                )}
              </div>
            )}

            {/* Step 4: Home Size */}
            {currentStep === 4 && (
              <div>
                <label className="block text-white font-heading font-semibold text-xl mb-2">
                  What size is your home?
                </label>
                <p className="text-gray-400 text-sm mb-6">Select the option that best describes your space</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {HOME_SIZES.map((size) => (
                    <button
                      key={size}
                      onClick={() => updateField('homeSize', size)}
                      className={`text-left px-5 py-4 rounded-xl border transition-all duration-200 text-base ${
                        formData.homeSize === size
                          ? 'bg-gold-500/20 border-gold-500 text-gold-400 ring-1 ring-gold-500/30'
                          : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20'
                      }`}
                      id={`quote-size-${size.toLowerCase().replace(/[\s+/]/g, '-')}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                {errors.homeSize && (
                  <p className="text-red-400 text-sm mt-3">{errors.homeSize}</p>
                )}
              </div>
            )}

            {/* Step 5: Contact Info */}
            {currentStep === 5 && (
              <div>
                <label className="block text-white font-heading font-semibold text-xl mb-2">
                  Almost there! How can we reach you?
                </label>
                <p className="text-gray-400 text-sm mb-6">
                  We&apos;ll use this to send your free quote
                </p>
                <div className="space-y-4">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => updateField('name', e.target.value)}
                      placeholder="Full Name"
                      className={`w-full bg-white/10 border ${
                        errors.name ? 'border-red-400' : 'border-white/20'
                      } rounded-xl pl-12 pr-5 py-4 text-white placeholder-gray-500 
                               focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent
                               transition-all text-lg`}
                      id="quote-name"
                    />
                    {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateField('phone', e.target.value)}
                      placeholder="Phone Number"
                      className={`w-full bg-white/10 border ${
                        errors.phone ? 'border-red-400' : 'border-white/20'
                      } rounded-xl pl-12 pr-5 py-4 text-white placeholder-gray-500 
                               focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent
                               transition-all text-lg`}
                      id="quote-phone"
                    />
                    {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      placeholder="Email Address"
                      className={`w-full bg-white/10 border ${
                        errors.email ? 'border-red-400' : 'border-white/20'
                      } rounded-xl pl-12 pr-5 py-4 text-white placeholder-gray-500 
                               focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent
                               transition-all text-lg`}
                      id="quote-email"
                    />
                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>
              </div>
            )}

            {/* Navigation buttons */}
            <div className="flex items-center justify-between mt-8">
              {currentStep > 1 ? (
                <button
                  onClick={prevStep}
                  className="flex items-center gap-2 text-gray-400 hover:text-white 
                           font-medium transition-colors py-3 px-4 rounded-lg hover:bg-white/5"
                  id="quote-back"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
              ) : (
                <div />
              )}

              <button
                onClick={nextStep}
                disabled={isSubmitting}
                className="btn-primary min-w-[160px] disabled:opacity-50 disabled:cursor-not-allowed"
                id="quote-next"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : currentStep === 5 ? (
                  <>
                    Submit Quote
                    <Check className="w-5 h-5" />
                  </>
                ) : (
                  <>
                    Continue
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Security note */}
          <p className="text-center text-gray-500 text-xs mt-4 flex items-center justify-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-gold-500" />
            Your information is secure and will never be shared with third parties.
          </p>
        </div>
      </div>
    </section>
  );
}
