import React, { useState } from 'react';
import { Megaphone, Send, Shield, Users, User } from 'lucide-react';
import speak_up from '../../assets/speak_up.png';
import { regionLocationBinding } from '../../fakeJsons/speakup_locationdata';

// const regionLocationBinding = {
//     AMESA: ["Ho", "VSIND", "MURBAD", "WADA", "SILVASA"],
//     AMERICAS: ["DAN", "EPL Propack de Mexico"]
// };
export default function SpeakUp() {
    const [formData, setFormData] = useState({
        reporterType: '',
        keepConfidential: '',
        firstName: '',
        lastName: '',
        email: '',
        category: '',
        stateRegion: '',
        location: '',
        subCategory: '',
        lineDescription: '',
        situationDescription: '',
        incidentDetails: '',
        suggestions: ''
    });

    const [isIndividual, setIsIndividual] = useState(true);
    const [isConfidential, setIsConfidential] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === "reporterType") {
            setIsIndividual(value === "individual");
            if (value === "group") {
                setIsConfidential(false);
                setFormData(prev => ({ ...prev, keepConfidential: '' }));
            }
        } else if (name === 'keepConfidential') {
            setIsConfidential(value === "yes");
        }

        setFormData((prev) => {
            const newState = { ...prev, [name]: value };
            if (name === 'stateRegion') {
                newState.location = ''; // Reset location when region changes
            }
            return newState;
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setIsSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                reporterType: '',
                keepConfidential: '',
                firstName: '',
                lastName: '',
                email: '',
                category: '',
                stateRegion: '',
                location: '',
                subCategory: '',
                lineDescription: '',
                situationDescription: '',
                incidentDetails: '',
                suggestions: ''
            });
            setIsIndividual(true);
            setIsConfidential(false);
        }, 3000);
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-gray-50 py-8 px-4 flex items-center justify-center">
                <div className="max-w-md mx-auto text-center">
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Send className="w-8 h-8 text-green-600" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
                        <p className="text-gray-600 mb-4">
                            Your feedback has been submitted successfully. We appreciate you speaking up!
                        </p>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-green-600 h-2 rounded-full animate-pulse" style={{ width: '100%' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen  py-8 px-4">
            <div className="max-w-full mx-auto">
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-start'>
                    {/* Header */}
                    <img
                        src={speak_up}
                        alt="EPL India"
                        className="rounded-lg object-contain sticky top-24"
                    />
                    {/* Form */}
                    <div className="bg-white rounded-md shadow-lg border border-gray-200 p-8">
                        {/* Reporter Type */}
                        <div className="mb-8">
                            <label className="block text-sm font-semibold text-gray-800 mb-4">
                                Is this an Individual or Group SPEAK UP?
                            </label>
                            <div className="grid grid-cols-2 gap-4">
                                <label className="flex items-center p-2  rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                                    <input
                                        type="radio"
                                        name="reporterType"
                                        value="individual"
                                        checked={formData.reporterType === 'individual'}
                                        onChange={handleInputChange}
                                        className="w-4 h-4 text-blue-800 border-gray-300 focus:ring-blue-800"
                                    />

                                    <User className="w-5 h-5 ml-3 mr-2 text-gray-600" />
                                    <span className="text-sm font-medium text-gray-700">Individual</span>
                                </label>
                                <label className="flex items-center p-4  rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                                    <input
                                        type="radio"
                                        name="reporterType"
                                        value="group"
                                        checked={formData.reporterType === 'group'}
                                        onChange={handleInputChange}
                                        className="w-4 h-4 text-orange-500 border-gray-300 focus:ring-blue-900"
                                    />
                                    <Users className="w-5 h-5 ml-3 mr-2 text-gray-600" />
                                    <span className="text-sm font-medium text-gray-700">Group</span>
                                </label>
                            </div>
                        </div>

                        {/* Keep Confidential */}
                        {isIndividual && (
                            <div className="mb-8">
                                <label className="block text-sm font-semibold text-gray-800 mb-4">
                                    Would you like to keep this confidential?
                                </label>
                                <div className="grid grid-cols-2 gap-4">
                                    <label className="flex items-center p-2  rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                                        <input
                                            type="radio"
                                            name="keepConfidential"
                                            value="yes"
                                            checked={formData.keepConfidential === 'yes'}
                                            onChange={handleInputChange}
                                            className="w-4 h-4 text-orange-500 border-gray-300 focus:ring-blue-900"
                                        />
                                        <Shield className="w-5 h-5 ml-3 mr-2 text-green-600" />
                                        <span className="text-sm font-medium text-gray-700">Yes, keep confidential</span>
                                    </label>
                                    <label className="flex items-center p-4  rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                                        <input
                                            type="radio"
                                            name="keepConfidential"
                                            value="no"
                                            checked={formData.keepConfidential === 'no'}
                                            onChange={handleInputChange}
                                            className="w-4 h-4 text-orange-500 border-gray-300 focus:ring-blue-900"
                                        />
                                        <User className="w-5 h-5 ml-3 mr-2 text-blue-600" />
                                        <span className="text-sm font-medium text-gray-700">No, I'll share my details</span>
                                    </label>
                                </div>
                            </div>
                        )}

                        {/* Name Fields - Show when not confidential */}
                        {!isConfidential && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        className="w-full text-sm px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-900 focus:border-transparent transition-colors"
                                        placeholder="Enter your first name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        className="w-full text-sm px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-900 focus:border-transparent transition-colors"
                                        placeholder="Enter your last name"
                                    />
                                </div>
                            </div>
                        )}

                        {/* Email */}
                        <div className="mb-6">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Email {isConfidential && <span className="text-xs text-gray-500">(for follow-up communication only)</span>}
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full text-sm px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-900 focus:border-transparent transition-colors"
                                placeholder="Enter your email address"
                            />
                        </div>

                        {/* Category */}
                        <div className="mb-6">
                            <label className="block text-sm font-semibold text-gray-800 mb-4">
                                Category of SPEAK UP
                            </label>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {[
                                    { value: 'suggestion', label: 'Suggestion', color: 'blue' },
                                    { value: 'misconduct', label: 'Unacceptable Behavior', color: 'red' },
                                    { value: 'grievance', label: 'Grievance', color: 'yellow' }
                                ].map(({ value, label, color }) => (
                                    <label key={value} className="flex items-center p-4  rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                                        <input
                                            type="radio"
                                            name="category"
                                            value={value}
                                            checked={formData.category === value}
                                            onChange={handleInputChange}
                                            className="w-4 h-4 text-orange-500 border-gray-300 focus:ring-blue-900"
                                        />
                                        <span className="ml-3 text-sm font-medium text-gray-700">{label}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Location Fields - Show when not confidential */}
                        {!isConfidential && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        State/Region
                                    </label>
                                    <select
                                        name="stateRegion"
                                        value={formData.stateRegion}
                                        onChange={handleInputChange}
                                        className="w-full text-sm px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-900 focus:border-transparent transition-colors"
                                    >
                                        <option value="">Select Region</option>
                                        <option value="AMESA">AMESA</option>
                                        <option value="AMERICAS">AMERICAS</option>
                                      
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Location
                                    </label>
                                    <select
                                        name="location"
                                        value={formData.location}
                                        onChange={handleInputChange}
                                        disabled={!regionLocationBinding[formData.stateRegion]} // disable if region not selected
                                        className="w-full text-sm px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-900 focus:border-transparent transition-colors"
                                    >
                                        <option value="">Please Select Location</option>
                                        {regionLocationBinding[formData.stateRegion]?.map((loc) => (
                                            <option key={loc} value={loc}>
                                                {loc}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        )}

                        {/* Sub Category */}
                        <div className="mb-6">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Sub Category of SPEAK UP
                            </label>
                            <select
                                name="subCategory"
                                value={formData.subCategory}
                                onChange={handleInputChange}
                                className="w-full text-sm px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-900 focus:border-transparent transition-colors"
                            >
                                <option value="">Select Sub Category</option>
                                <option value="safety">Safety</option>
                                <option value="ethics">Ethics</option>
                                <option value="quality">Quality</option>
                                <option value="process">Process</option>
                                <option value="harassment">Harassment</option>
                                <option value="discrimination">Discrimination</option>
                                <option value="financial">Financial Irregularities</option>
                                <option value="environment">Environment</option>
                            </select>
                        </div>

                        {/* Text Areas */}
                        <div className="mb-6">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Subject <span className="text-red-500">*</span>
                                <span className="text-xs text-gray-500 block">Brief description of the SPEAK UP issue</span>
                            </label>
                            <textarea
                                name="lineDescription"
                                value={formData.lineDescription}
                                onChange={handleInputChange}
                                rows={3}
                                required
                                className="w-full text-sm px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-900 focus:border-transparent transition-colors resize-none"
                                placeholder="Provide a brief summary of your concern..."
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Describe the situation in detail <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                name="situationDescription"
                                value={formData.situationDescription}
                                onChange={handleInputChange}
                                rows={5}
                                required
                                className="w-full text-sm px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-900 focus:border-transparent transition-colors resize-none"
                                placeholder="Provide detailed information about the situation..."
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                If this is an incident, when did this happen?
                            </label>
                            <textarea
                                name="incidentDetails"
                                value={formData.incidentDetails}
                                onChange={handleInputChange}
                                rows={3}
                                className="w-full text-sm px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-900 focus:border-transparent transition-colors resize-none"
                                placeholder="Date, time, and any relevant timeline details..."
                            />
                        </div>

                        <div className="mb-8">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Suggestions to improve & resolve the situation/issue
                            </label>
                            <textarea
                                name="suggestions"
                                value={formData.suggestions}
                                onChange={handleInputChange}
                                rows={4}
                                className="w-full text-sm px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-900 focus:border-transparent transition-colors resize-none"
                                placeholder="Your suggestions for resolution or improvement..."
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="text-center">
                            <button
                                type="submit"
                                className="px-10 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-lg hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-1 focus:ring-green-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105 shadow-lg"
                            >
                                <Send className="w-5 h-5 inline mr-2" />
                                Speak Up
                            </button>
                        </div>

                        <div className="mt-6 text-center text-xs text-gray-500">
                            <p>Your submission will be handled confidentially and reviewed by the appropriate team.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
