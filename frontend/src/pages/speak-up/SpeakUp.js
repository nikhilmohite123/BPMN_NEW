import { useState } from 'react';
import { Megaphone, Send, Shield, Users, User, AlertCircle } from 'lucide-react';
import speak_up from '../../assets/speak_up.png';
import { regionLocationBinding } from '../../fakeJsons/speakup_locationdata';
import axios from 'axios';

const subcategoryRecipients = {
    "2": {
        name: "Code of Conduct (Anti-Bribery, Anti-Corruption, Whistle blower, etc)",
        recipients: [
            "Listening Officer",
            "MD",
            "CHRO",
            "MD & CHRO"
        ]
    },
    "3": {
        name: "Grievance / Complaints (Equal Opportunity, Workplace Grievance, Harassment, Discrimination etc)",
        recipients: [
            "Listening Officer",
            "MD",
            "CHRO",
            "MD & CHRO"
        ]
    },
    "4": {
        name: "Sexual Harassment",
        recipients: [
            "Listening Officer(SH)"
        ]
    },
    "8": {
        name: "Suggestions / Employee Comments / Others",
        recipients: [
            "Listening Officer",
        ]
    }
};

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
        suggestions: '',
        recipient: ''
    });

    const [errors, setErrors] = useState({});
    const [isIndividual, setIsIndividual] = useState(true);
    const [isConfidential, setIsConfidential] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [showConfidentialPopup, setShowConfidentialPopup] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }

        if (name === "reporterType") {
            setIsIndividual(value === "individual");
            if (value === "group") {
                setIsConfidential(false);
                setFormData(prev => ({ ...prev, keepConfidential: '' }));
            }
        } else if (name === 'keepConfidential') {
            setIsConfidential(value === "yes");
            if (value === "yes") {
                setShowConfidentialPopup(true);
            }
        }

        setFormData((prev) => {
            const newState = { ...prev, [name]: value };
            if (name === 'stateRegion') {
                newState.location = ''; // Reset location when region changes
            }
            if (name === 'subCategory') {
                newState.recipient = ''; // Reset recipient when subcategory changes
            }
            return newState;
        });
    };

    const validateForm = () => {
        const newErrors = {};

        // Required fields validation
        if (!formData.reporterType) {
            newErrors.reporterType = 'Please select reporter type';
        }

        if (isIndividual && !formData.keepConfidential) {
            newErrors.keepConfidential = 'Please select confidentiality option';
        }

        if (!isConfidential) {
            if (!formData.firstName.trim()) {
                newErrors.firstName = 'First name is required';
            }
            if (!formData.lastName.trim()) {
                newErrors.lastName = 'Last name is required';
            }
            if (!formData.stateRegion) {
                newErrors.stateRegion = 'State/Region is required';
            }
            if (!formData.location) {
                newErrors.location = 'Location is required';
            }
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!isValidEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.category) {
            newErrors.category = 'Please select a category';
        }

        if (!formData.subCategory) {
            newErrors.subCategory = 'Please select a sub category';
        }

        if (!formData.lineDescription.trim()) {
            newErrors.lineDescription = 'Subject is required';
        }

        if (!formData.situationDescription.trim()) {
            newErrors.situationDescription = 'Situation description is required';
        }

        if (formData.subCategory && !formData.recipient) {
            newErrors.recipient = 'Please select a recipient';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            // Scroll to first error
            const firstErrorField = document.querySelector('.border-red-500');
            if (firstErrorField) {
                firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            return;
        }

        console.log('Form submitted:', formData);
        try {
            //     const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/login`, {
            //     username: formData.email,
            //   });
        } catch (error) {

        }

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
                suggestions: '',
                recipient: ''
            });
            setErrors({});
            setIsIndividual(true);
            setIsConfidential(false);
            setShowConfidentialPopup(false);
        }, 3000);
    };

    const maskEmail = (email) => {
        if (!email) return '';
        return '•'.repeat(email.length);
    };

    const renderError = (fieldName) => {
        if (errors[fieldName]) {
            return (
                <div className="flex items-center mt-1 text-red-600 text-xs">
                    <AlertCircle className="w-3 h-3 mr-1" />
                    {errors[fieldName]}
                </div>
            );
        }
        return null;
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
                            EPL is Committed to ensuring a healthy working environment and `Speak Up Culture` allows you to feel free to share ideas, opinions and concerns without fear of retaliation or penalty
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
        <div className="min-h-screen py-8 px-4">
            <div className="max-w-full mx-auto">
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 items-start'>
                    {/* Header */}
                    <img
                        src={speak_up}
                        alt="EPL India"
                        className="rounded-lg object-contain sticky top-24"
                    />
                    {/* Form */}
                    <div className="bg-white rounded-md shadow-lg border border-gray-200 p-8">
                        <form onSubmit={handleSubmit}>
                            {/* Reporter Type */}
                            <div className="mb-8">
                                <label className="block text-sm font-semibold text-gray-800 mb-4">
                                    Is this an Individual or Group SPEAK UP? <span className="text-red-500">*</span>
                                </label>
                                <div className="grid grid-cols-2 gap-4">
                                    <label className={`flex items-center p-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors ${errors.reporterType ? 'border border-red-500' : ''}`}>
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
                                    <label className={`flex items-center p-4 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors ${errors.reporterType ? 'border border-red-500' : ''}`}>
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
                                {renderError('reporterType')}
                            </div>

                            {/* Keep Confidential */}
                            {isIndividual && (
                                <div className="mb-8">
                                    <label className="block text-sm font-semibold text-gray-800 mb-4">
                                        Would you like to keep this confidential? <span className="text-red-500">*</span>
                                    </label>
                                    <div className="grid grid-cols-2 gap-4">
                                        <label className={`flex items-center p-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors ${errors.keepConfidential ? 'border border-red-500' : ''}`}>
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
                                        <label className={`flex items-center p-4 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors ${errors.keepConfidential ? 'border border-red-500' : ''}`}>
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
                                    {renderError('keepConfidential')}
                                </div>
                            )}

                            {/* Name Fields - Show when not confidential */}
                            {!isConfidential && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            First Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            className={`w-full text-sm px-2 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-900 focus:border-transparent transition-colors ${errors.firstName ? 'border-red-500' : 'border-gray-300'
                                                }`}
                                            placeholder="Enter your first name"
                                        />
                                        {renderError('firstName')}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Last Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            className={`w-full text-sm px-2 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-900 focus:border-transparent transition-colors ${errors.lastName ? 'border-red-500' : 'border-gray-300'
                                                }`}
                                            placeholder="Enter your last name"
                                        />
                                        {renderError('lastName')}
                                    </div>
                                </div>
                            )}

                            {/* Email */}
                            <div className="mb-6 relative">
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Email <span className="text-red-500">*</span>
                                    {isConfidential && <span className="text-xs text-gray-500 ml-1">(for follow-up communication only)</span>}
                                </label>
                                <input
                                    type={isConfidential ? "text" : "email"}
                                    name="email"
                                    value={isConfidential && formData.email ? maskEmail(formData.email) : formData.email}
                                    onChange={handleInputChange}
                                    className={`w-full text-sm px-2 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-900 focus:border-transparent transition-colors ${errors.email ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                    placeholder="Enter your email address"
                                />
                                {renderError('email')}
                            </div>

                            {/* Category */}
                            <div className="mb-6">
                                <label className="block text-sm font-semibold text-gray-800 mb-4">
                                    Category of SPEAK UP <span className="text-red-500">*</span>
                                </label>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {[
                                        { value: 'suggestion', label: 'Suggestion', color: 'blue' },
                                        { value: 'misconduct', label: 'Unacceptable Behavior', color: 'red' },
                                        { value: 'grievance', label: 'Grievance', color: 'yellow' }
                                    ].map(({ value, label, color }) => (
                                        <label key={value} className={`flex items-center p-4 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors ${errors.category ? 'border border-red-500' : ''}`}>
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
                                {renderError('category')}
                            </div>

                            {/* Location Fields - Show when not confidential */}
                            {!isConfidential && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            State/Region <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            name="stateRegion"
                                            value={formData.stateRegion}
                                            onChange={handleInputChange}
                                            className={`w-full text-sm px-2 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-900 focus:border-transparent transition-colors ${errors.stateRegion ? 'border-red-500' : 'border-gray-300'
                                                }`}
                                        >
                                            <option value="">Select Region</option>
                                            <option value="AMESA">AMESA</option>
                                            <option value="AMERICAS">AMERICAS</option>
                                        </select>
                                        {renderError('stateRegion')}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Location <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            name="location"
                                            value={formData.location}
                                            onChange={handleInputChange}
                                            disabled={!regionLocationBinding[formData.stateRegion]}
                                            className={`w-full text-sm px-2 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-900 focus:border-transparent transition-colors ${errors.location ? 'border-red-500' : 'border-gray-300'
                                                }`}
                                        >
                                            <option value="">Please Select Location</option>
                                            {regionLocationBinding[formData.stateRegion]?.map((loc) => (
                                                <option key={loc} value={loc}>
                                                    {loc}
                                                </option>
                                            ))}
                                        </select>
                                        {renderError('location')}
                                    </div>
                                </div>
                            )}

                            {/* Sub Category */}
                            <div className="mb-6">
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Sub Category of SPEAK UP <span className="text-red-500">*</span>
                                </label>
                                <select
                                    name="subCategory"
                                    value={formData.subCategory}
                                    onChange={handleInputChange}
                                    className={`w-full text-sm px-2 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-900 focus:border-transparent transition-colors ${errors.subCategory ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                >
                                    <option value="">Select Sub Category</option>
                                    <option value="2">Code of Conduct (Anti-Bribery, Anti-Corruption, Whistle blower, etc)</option>
                                    <option value="3">Grievance / Complaints (Equal Opportunity, Workplace Grievance, Harassment, Discrimination etc)</option>
                                    <option value="4">Sexual Harassment</option>
                                    <option value="8">Suggestions / Employee Comments /Others</option>
                                </select>
                                {renderError('subCategory')}
                            </div>

                            {/* Text Areas */}
                            <div className="mb-6">
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Subject <span className="text-red-500">*</span>

                                </label>
                                <textarea
                                    name="lineDescription"
                                    value={formData.lineDescription}
                                    onChange={handleInputChange}
                                    rows={2}
                                    className={`w-full text-sm px-2 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-900 focus:border-transparent transition-colors resize-none ${errors.lineDescription ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                    placeholder='one-line description of the SPEAK UP issue'
                                />
                                {renderError('lineDescription')}
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
                                    className={`w-full text-sm px-2 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-900 focus:border-transparent transition-colors resize-none ${errors.situationDescription ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                    placeholder="Provide detailed information about the situation..."
                                />
                                {renderError('situationDescription')}
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

                            {/* Dynamic Recipient Field - Show when subcategory is selected */}
                            {formData.subCategory && subcategoryRecipients[formData.subCategory] && (
                                <div className="mb-6">
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Who will receive this Message <span className="text-red-500">*</span>
                                        <span className="text-xs text-gray-500 block">({subcategoryRecipients[formData.subCategory].name})</span>
                                    </label>
                                    <select
                                        name="recipient"
                                        value={formData.recipient}
                                        onChange={handleInputChange}
                                        className={`w-full text-sm px-2 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-900 focus:border-transparent transition-colors ${errors.recipient ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                    >
                                        <option value="">Select Recipient</option>
                                        {subcategoryRecipients[formData.subCategory].recipients.map((recipient) => (
                                            <option key={recipient} value={recipient}>
                                                {recipient}
                                            </option>
                                        ))}
                                    </select>
                                    {renderError('recipient')}
                                </div>
                            )}

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
                        </form>
                    </div>
                </div>
            </div>

            {/* Confidential Popup Modal */}
            {showConfidentialPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-xl p-6 m-4 max-w-md w-full">
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                                <Shield className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900">Confidential Submission</h3>
                        </div>
                        <div className="mb-4">
                            <p className="text-sm text-gray-600 mb-3">
                                Confidential SPEAK UP messages will be shared with the chosen recipient directly (without sharing name/contact/email id details). You will not receive any email responses/intimations as your contact details will not be visible/available. Are you sure you want to continue sharing details confidentially?
                            </p>
                        </div>
                        <div className="flex justify-end space-x-3">
                            <button
                                onClick={() => setShowConfidentialPopup(false)}
                                className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
                            >
                                Yes, Proceed Confidentially
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}