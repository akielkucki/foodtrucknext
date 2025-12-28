'use client';

import { useState } from 'react';


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

    const helpOptions = ['Custom Build Quote', 'Parts & Service', 'General Inquiry'];

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add your form submission logic here
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
        <div className="mx-auto bg-white rounded-2xl shadow-lg p-5 h-full md:h-1/2">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>

            <form onSubmit={handleSubmit} className="space-y-6 text-black min-w-full">
                {/* Name Field */}
                <div>
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-600 mb-2"
                    >
                        NAME *
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                        placeholder=""
                    />
                </div>

                {/* Email Field */}
                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-600 mb-2"
                    >
                        EMAIL *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                        placeholder=""
                    />
                </div>

                {/* Custom Dropdown */}
                <div>
                    <label
                        htmlFor="helpType"
                        className="block text-sm font-medium text-gray-600 mb-2"
                    >
                        HOW CAN WE HELP YOU? *
                    </label>
                    <div className="relative">
                        <button
                            type="button"
                            onClick={() => setIsOpen(!isOpen)}
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-left focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all flex items-center justify-between bg-white"
                        >
                            <span className="text-gray-900">{formData.helpType}</span>
                            <svg
                                className={`w-5 h-5 text-gray-400 transition-transform ${
                                    isOpen ? 'transform rotate-180' : ''
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>

                        {/* Dropdown Menu */}
                        {isOpen && (
                            <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg animate-fade">
                                {helpOptions.map((option) => (
                                    <button
                                        key={option}
                                        type="button"
                                        onClick={() => handleSelectChange(option)}
                                        className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors flex items-center justify-between group"
                                    >
                                        <span className="text-gray-900">{option}</span>
                                        {formData.helpType === option && (
                                            <svg
                                                className="w-5 h-5 text-secondary"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                        )}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Message/Textarea Field (shown when "General Inquiry" is selected) */}
                {formData.helpType === 'General Inquiry' && (
                    <div>
            <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                placeholder="Please describe how we can help you..."
            />
                    </div>
                )}

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-accent bg-[#D6452F] hover:bg-[#952d1d] cursor-pointer text-white font-semibold py-4 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                    Submit Form
                </button>
            </form>
        </div>
    );
}