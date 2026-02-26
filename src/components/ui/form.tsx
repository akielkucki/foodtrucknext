'use client';

import { useState } from 'react';
import { ChevronDown, Send, User, Mail, MessageSquare, CheckCircle2, Loader2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FormData {
    name: string;
    email: string;
    helpType: string;
    message: string;
}

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        helpType: 'Custom Build Quote',
        message: '',
    });

    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const helpOptions = ['Custom Build Quote', 'Parts & Service', 'General Inquiry'];

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        // Simulate API call for UI demonstration
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            setFormData({ name: '', email: '', helpType: 'Custom Build Quote', message: '' });
            setTimeout(() => setIsSuccess(false), 3000);
        }, 1500);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSelectChange = (value: string) => {
        setFormData((prev) => ({ ...prev, helpType: value }));
        setIsOpen(false);
    };

    // Shared input styles
    const inputClasses = "w-full rounded-none border-b border-neutral-700 bg-transparent py-4 pl-10 pr-4 text-white placeholder:text-neutral-600 focus:border-[#9B3A4E] focus:bg-neutral-900/30 focus:outline-none transition-all duration-300 font-light";
    const labelClasses = "mb-2 block text-[10px] uppercase tracking-[0.2em] font-medium text-neutral-500";

    return (
        <div className="w-full">
            <form onSubmit={handleSubmit} className="space-y-8">

                {/* Header */}
                <div className="mb-8 border-l-2 border-[#9B3A4E] pl-4">
                    <h3 className="text-xl font-light text-white">Inquiry Details</h3>
                    <p className="text-xs text-neutral-500 font-mono mt-1">Tell us about your project</p>
                </div>

                {/* Name Field */}
                <div className="group">
                    <label htmlFor="name" className={labelClasses}>Your Name</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center text-neutral-600 group-focus-within:text-[#9B3A4E] transition-colors">
                            <User className="h-4 w-4" />
                        </div>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            placeholder="FULL NAME"
                            value={formData.name}
                            onChange={handleInputChange}
                            className={inputClasses}
                        />
                    </div>
                </div>

                {/* Email Field */}
                <div className="group">
                    <label htmlFor="email" className={labelClasses}>Your Email</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center text-neutral-600 group-focus-within:text-[#9B3A4E] transition-colors">
                            <Mail className="h-4 w-4" />
                        </div>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="EMAIL ADDRESS"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={inputClasses}
                        />
                    </div>
                </div>

                {/* Custom Dropdown */}
                <div className="relative group">
                    <label className={labelClasses}>This is about...</label>
                    <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        className="relative w-full cursor-pointer text-left py-4 pl-4 pr-10 border-b border-neutral-700 bg-neutral-900/20 text-white focus:border-[#9B3A4E] hover:bg-neutral-900/40 transition-all duration-300"
                    >
                        <span className="block truncate text-sm font-light tracking-wide">{formData.helpType}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                            <ChevronDown className={`h-4 w-4 text-neutral-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#9B3A4E]' : ''}`} />
                        </span>
                    </button>

                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="absolute z-50 mt-1 w-full overflow-hidden rounded-b-lg bg-[#0f0f0f] border border-neutral-800 shadow-2xl"
                            >
                                {helpOptions.map((option) => (
                                    <button
                                        key={option}
                                        type="button"
                                        onClick={() => handleSelectChange(option)}
                                        className={`relative w-full text-left py-3 pl-4 pr-4 text-sm hover:bg-[#9B3A4E]/10 hover:text-[#9B3A4E] transition-colors border-l-2 ${
                                            formData.helpType === option ? 'border-[#9B3A4E] text-white bg-[#9B3A4E]/5' : 'border-transparent text-neutral-400'
                                        }`}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Message Field */}
                <div className="group">
                    <label htmlFor="message" className={labelClasses}>Tell us what we can do for you</label>
                    <div className="relative">
                        <div className="absolute top-4 left-0 text-neutral-600 group-focus-within:text-[#9B3A4E] transition-colors">
                            <MessageSquare className="h-4 w-4" />
                        </div>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            required
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="ENTER PROJECT DETAILS..."
                            className={`${inputClasses} resize-none`}
                        />
                    </div>
                </div>

                {/* Status Messages */}
                {error && (
                    <div className="bg-red-900/20 border border-red-900/50 p-3 text-xs text-red-400 font-mono">
                        ERROR: {error}
                    </div>
                )}

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isSubmitting || isSuccess}
                    className={`relative w-full overflow-hidden group flex items-center justify-center py-4 text-sm font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
                        isSuccess ? 'bg-emerald-900/30 text-emerald-500 border border-emerald-500/30' : 'bg-[#9B3A4E] text-white hover:bg-[#7a2e3d]'
                    }`}
                >
                    {isSubmitting ? (
                        <div className="flex items-center gap-2">
                            <Loader2 className="h-4 w-4 animate-spin" />
                            <span>Sending...</span>
                        </div>
                    ) : isSuccess ? (
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4" />
                            <span>Received</span>
                        </div>
                    ) : (
                        <div className="flex items-center gap-2">
                            <span>Contact Us</span>
                            <Send className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                        </div>
                    )}
                </button>
            </form>
        </div>
    );
}