'use client';

import { useState } from 'react';
import {
  ChevronDown,
  Send,
  User,
  Mail,
  Phone,
  MessageSquare,
  CheckCircle2,
  Loader2,
  Building2,
  Truck,
  DollarSign,
  Calendar
} from 'lucide-react';

interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  truckType: string;
  budget: string;
  timeline: string;
  message: string;
}

export default function QuoteForm() {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: 'Custom Food Truck Build',
    truckType: '',
    budget: 'Select budget range',
    timeline: 'Select timeline',
    message: '',
  });

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const projectTypes = [
    'Custom Food Truck Build',
    'Food Trailer Build',
    'Truck Retrofit/Conversion',
    'Equipment Installation',
    'Repair & Maintenance',
    'Parts Order'
  ];

  const budgetRanges = [
    'Select budget range',
    'Under $25,000',
    '$25,000 - $50,000',
    '$50,000 - $75,000',
    '$75,000 - $100,000',
    '$100,000 - $150,000',
    '$150,000+'
  ];

  const timelineOptions = [
    'Select timeline',
    'As soon as possible',
    '1-3 months',
    '3-6 months',
    '6-12 months',
    'Flexible / No rush'
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate network request
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log('Quote request submitted:', formData);
    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset success message after 3 seconds
    setTimeout(() => setIsSuccess(false), 3000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    setOpenDropdown(null);
  };

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const inputClasses = "w-full rounded-lg border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-slate-900 placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-orange-500/10 transition-all duration-200";
  const labelClasses = "mb-1.5 block text-sm font-semibold text-slate-700";

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Row 1: Name & Email */}
        <div className="grid gap-5 sm:grid-cols-2">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className={labelClasses}>
              Full Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400 pointer-events-none">
                <User className="h-5 w-5" />
              </div>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="John Doe"
                value={formData.name}
                onChange={handleInputChange}
                className={inputClasses}
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className={labelClasses}>
              Email Address <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400 pointer-events-none">
                <Mail className="h-5 w-5" />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleInputChange}
                className={inputClasses}
              />
            </div>
          </div>
        </div>

        {/* Row 2: Phone & Company */}
        <div className="grid gap-5 sm:grid-cols-2">
          {/* Phone Field */}
          <div>
            <label htmlFor="phone" className={labelClasses}>
              Phone Number
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400 pointer-events-none">
                <Phone className="h-5 w-5" />
              </div>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="(555) 123-4567"
                value={formData.phone}
                onChange={handleInputChange}
                className={inputClasses}
              />
            </div>
          </div>

          {/* Company Field */}
          <div>
            <label htmlFor="company" className={labelClasses}>
              Business / Company Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400 pointer-events-none">
                <Building2 className="h-5 w-5" />
              </div>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Your Business Name"
                value={formData.company}
                onChange={handleInputChange}
                className={inputClasses}
              />
            </div>
          </div>
        </div>

        {/* Row 3: Project Type & Truck Type */}
        <div className="grid gap-5 sm:grid-cols-2">
          {/* Project Type Dropdown */}
          <div className="relative">
            <label className={labelClasses}>
              Project Type <span className="text-red-500">*</span>
            </label>
            <button
              type="button"
              onClick={() => toggleDropdown('projectType')}
              className={`group relative w-full cursor-default rounded-lg border bg-slate-50 py-3 pl-10 pr-10 text-left text-slate-900 focus:outline-none focus:ring-4 focus:ring-orange-500/10 transition-all duration-200 ${
                openDropdown === 'projectType' ? 'border-orange-500 ring-4 ring-orange-500/10' : 'border-slate-200'
              }`}
            >
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400 pointer-events-none">
                <Truck className="h-5 w-5" />
              </div>
              <span className="block truncate font-medium">{formData.projectType}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <ChevronDown
                  className={`h-5 w-5 text-slate-400 transition-transform duration-200 ${openDropdown === 'projectType' ? 'rotate-180' : ''}`}
                />
              </span>
            </button>

            {openDropdown === 'projectType' && (
              <div className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm animate-in fade-in zoom-in-95 duration-100">
                {projectTypes.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => handleSelectChange('projectType', option)}
                    className={`relative w-full cursor-default select-none py-2.5 pl-4 pr-9 text-left hover:bg-slate-50 transition-colors ${
                      formData.projectType === option ? 'text-orange-600 bg-orange-50/50 font-medium' : 'text-slate-900'
                    }`}
                  >
                    <span className="block truncate">{option}</span>
                    {formData.projectType === option && (
                      <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-orange-600">
                        <CheckCircle2 className="h-4 w-4" />
                      </span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Truck Type / Size */}
          <div>
            <label htmlFor="truckType" className={labelClasses}>
              Truck Size / Type Preference
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400 pointer-events-none">
                <Truck className="h-5 w-5" />
              </div>
              <input
                type="text"
                id="truckType"
                name="truckType"
                placeholder="e.g., 18ft Box Truck, Step Van"
                value={formData.truckType}
                onChange={handleInputChange}
                className={inputClasses}
              />
            </div>
          </div>
        </div>

        {/* Row 4: Budget & Timeline */}
        <div className="grid gap-5 sm:grid-cols-2">
          {/* Budget Dropdown */}
          <div className="relative">
            <label className={labelClasses}>
              Budget Range <span className="text-red-500">*</span>
            </label>
            <button
              type="button"
              onClick={() => toggleDropdown('budget')}
              className={`group relative w-full cursor-default rounded-lg border bg-slate-50 py-3 pl-10 pr-10 text-left focus:outline-none focus:ring-4 focus:ring-orange-500/10 transition-all duration-200 ${
                openDropdown === 'budget' ? 'border-orange-500 ring-4 ring-orange-500/10' : 'border-slate-200'
              } ${formData.budget === 'Select budget range' ? 'text-slate-400' : 'text-slate-900'}`}
            >
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400 pointer-events-none">
                <DollarSign className="h-5 w-5" />
              </div>
              <span className="block truncate font-medium">{formData.budget}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <ChevronDown
                  className={`h-5 w-5 text-slate-400 transition-transform duration-200 ${openDropdown === 'budget' ? 'rotate-180' : ''}`}
                />
              </span>
            </button>

            {openDropdown === 'budget' && (
              <div className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm animate-in fade-in zoom-in-95 duration-100">
                {budgetRanges.slice(1).map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => handleSelectChange('budget', option)}
                    className={`relative w-full cursor-default select-none py-2.5 pl-4 pr-9 text-left hover:bg-slate-50 transition-colors ${
                      formData.budget === option ? 'text-orange-600 bg-orange-50/50 font-medium' : 'text-slate-900'
                    }`}
                  >
                    <span className="block truncate">{option}</span>
                    {formData.budget === option && (
                      <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-orange-600">
                        <CheckCircle2 className="h-4 w-4" />
                      </span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Timeline Dropdown */}
          <div className="relative">
            <label className={labelClasses}>
              Desired Timeline
            </label>
            <button
              type="button"
              onClick={() => toggleDropdown('timeline')}
              className={`group relative w-full cursor-default rounded-lg border bg-slate-50 py-3 pl-10 pr-10 text-left focus:outline-none focus:ring-4 focus:ring-orange-500/10 transition-all duration-200 ${
                openDropdown === 'timeline' ? 'border-orange-500 ring-4 ring-orange-500/10' : 'border-slate-200'
              } ${formData.timeline === 'Select timeline' ? 'text-slate-400' : 'text-slate-900'}`}
            >
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400 pointer-events-none">
                <Calendar className="h-5 w-5" />
              </div>
              <span className="block truncate font-medium">{formData.timeline}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <ChevronDown
                  className={`h-5 w-5 text-slate-400 transition-transform duration-200 ${openDropdown === 'timeline' ? 'rotate-180' : ''}`}
                />
              </span>
            </button>

            {openDropdown === 'timeline' && (
              <div className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm animate-in fade-in zoom-in-95 duration-100">
                {timelineOptions.slice(1).map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => handleSelectChange('timeline', option)}
                    className={`relative w-full cursor-default select-none py-2.5 pl-4 pr-9 text-left hover:bg-slate-50 transition-colors ${
                      formData.timeline === option ? 'text-orange-600 bg-orange-50/50 font-medium' : 'text-slate-900'
                    }`}
                  >
                    <span className="block truncate">{option}</span>
                    {formData.timeline === option && (
                      <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-orange-600">
                        <CheckCircle2 className="h-4 w-4" />
                      </span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className={labelClasses}>
            Project Details <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute top-3 left-3 text-slate-400 pointer-events-none">
              <MessageSquare className="h-5 w-5" />
            </div>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell us about your vision! Include details like your menu concept, required equipment (grills, fryers, refrigeration), ventilation needs, and any specific design preferences..."
              className="w-full resize-none rounded-lg border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-slate-900 placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-orange-500/10 transition-all duration-200"
            />
          </div>
          <p className="mt-1.5 text-xs text-slate-500">
            The more details you provide, the more accurate your quote will be.
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting || isSuccess || formData.budget === 'Select budget range'}
          className={`flex w-full items-center justify-center rounded-lg px-8 py-4 text-base font-bold text-white shadow-sm transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 disabled:opacity-50 disabled:cursor-not-allowed ${
            isSuccess
              ? 'bg-green-600 hover:bg-green-500'
              : 'bg-[#D6452F] hover:bg-[#b03623] hover:shadow-lg hover:shadow-orange-900/20'
          }`}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Submitting Request...
            </>
          ) : isSuccess ? (
            <>
              <CheckCircle2 className="mr-2 h-5 w-5" />
              Quote Request Sent!
            </>
          ) : (
            <>
              Get My Free Quote
              <Send className="ml-2 h-4 w-4" />
            </>
          )}
        </button>

        <p className="text-center text-xs text-slate-500">
          By submitting this form, you agree to be contacted about your project.
          We typically respond within 24-48 hours.
        </p>
      </form>
    </div>
  );
}
