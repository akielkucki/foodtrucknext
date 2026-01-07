'use client';

import { useState } from 'react';
import { ChevronDown, Send, User, Mail, MessageSquare, CheckCircle2, Loader2 } from 'lucide-react';

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

    const helpOptions = ['Custom Build Quote', 'Parts & Service', 'General Inquiry'];

    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.details || data.error || 'Failed to send message');
            }

            console.log('Contact form submitted successfully:', data);
            setIsSuccess(true);
            setFormData({
                name: '',
                email: '',
                helpType: 'Custom Build Quote',
                message: '',
            });

            // Reset success message after 3 seconds
            setTimeout(() => setIsSuccess(false), 3000);
        } catch (err) {
            setError('Failed to send message. Please try again or call us directly.');
            console.error('Form submission error:', err);
        } finally {
            setIsSubmitting(false);
        }
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

    const handleSelectChange = (value: string) => {
        setFormData((prev) => ({
            ...prev,
            helpType: value,
        }));
        setIsOpen(false);
    };

    return (
        <div className="w-full">
            <form onSubmit={handleSubmit} className="space-y-5">

                {/* Name Field */}
                <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-slate-700">
                        Full Name
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
                            className="w-full rounded-lg border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-slate-900 placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-orange-500/10 transition-all duration-200"
                        />
                    </div>
                </div>

                {/* Email Field */}
                <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-slate-700">
                        Email Address
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
                            className="w-full rounded-lg border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-slate-900 placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-orange-500/10 transition-all duration-200"
                        />
                    </div>
                </div>

                {/* Custom Dropdown */}
                <div className="relative">
                    <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                        How can we help?
                    </label>
                    <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        className={`group relative w-full cursor-default rounded-lg border bg-slate-50 py-3 pl-4 pr-10 text-left text-slate-900 focus:outline-none focus:ring-4 focus:ring-orange-500/10 transition-all duration-200 ${
                            isOpen ? 'border-orange-500 ring-4 ring-orange-500/10' : 'border-slate-200'
                        }`}
                    >
                        <span className="block truncate font-medium">{formData.helpType}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                            <ChevronDown
                                className={`h-5 w-5 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                            />
                        </span>
                    </button>

                    {/* Dropdown Options */}
                    {isOpen && (
                        <div className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm animate-in fade-in zoom-in-95 duration-100">
                            {helpOptions.map((option) => (
                                <button
                                    key={option}
                                    type="button"
                                    onClick={() => handleSelectChange(option)}
                                    className={`relative w-full cursor-default select-none py-2.5 pl-4 pr-9 text-left hover:bg-slate-50 transition-colors ${
                                        formData.helpType === option ? 'text-orange-600 bg-orange-50/50 font-medium' : 'text-slate-900'
                                    }`}
                                >
                                    <span className="block truncate">{option}</span>
                                    {formData.helpType === option && (
                                        <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-orange-600">
                                            <CheckCircle2 className="h-4 w-4" />
                                        </span>
                                    )}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Message Field */}
                <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-slate-700">
                        Project Details / Message
                    </label>
                    <div className="relative">
                        <div className="absolute top-3 left-3 text-slate-400 pointer-events-none">
                            <MessageSquare className="h-5 w-5" />
                        </div>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            required
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder={
                                formData.helpType === 'Custom Build Quote'
                                    ? "Tell us about your menu, equipment needs, and truck preference..."
                                    : "How can we assist you today?"
                            }
                            className="w-full resize-none rounded-lg border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-slate-900 placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-orange-500/10 transition-all duration-200"
                        />
                    </div>
                </div>

                {/* Error Message */}
                {error && (
                    <div className="rounded-lg bg-red-50 border border-red-200 p-3 text-sm text-red-700">
                        {error}
                    </div>
                )}

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isSubmitting || isSuccess}
                    className={`flex w-full items-center justify-center rounded-lg px-8 py-3.5 text-base font-bold text-white shadow-sm transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 ${
                        isSuccess
                            ? 'bg-green-600 hover:bg-green-500'
                            : 'bg-[#D6452F] hover:bg-[#b03623] hover:shadow-lg hover:shadow-orange-900/20'
                    }`}
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Sending...
                        </>
                    ) : isSuccess ? (
                        <>
                            <CheckCircle2 className="mr-2 h-5 w-5" />
                            Message Sent!
                        </>
                    ) : (
                        <>
                            Send Message
                            <Send className="ml-2 h-4 w-4" />
                        </>
                    )}
                </button>
            </form>
            <style jsx>{`
                label {
                    color: white;
                }
            `}</style>
        </div>
    );
}