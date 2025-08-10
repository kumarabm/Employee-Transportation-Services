import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import axios from 'axios';

const contactFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters").regex(/^[a-zA-Z\s]+$/, "First name must contain only letters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters").regex(/^[a-zA-Z\s]+$/, "Last name must contain only letters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().regex(/^[\+]?[\d\s\-\(\)]+$/, "Please enter a valid phone number"),
  company: z.string().min(2, "Company name is required"),
  employeeCount: z.string().min(1, "Please select employee count range"),
  serviceTypes: z.array(z.string()).min(1, "Please select at least one service type"),
  message: z.string().optional()
});

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export default function ContactForm() {
  const [serviceTypes, setServiceTypes] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      employeeCount: "",
      serviceTypes: [],
      message: ""
    }
  });

  const handleServiceTypeChange = (serviceType, checked) => {
    let newServiceTypes;
    if (checked) {
      newServiceTypes = [...serviceTypes, serviceType];
    } else {
      newServiceTypes = serviceTypes.filter(type => type !== serviceType);
    }
    setServiceTypes(newServiceTypes);
    setValue('serviceTypes', newServiceTypes);
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitMessage('');
    setSubmitStatus(null);

    try {
      const response = await axios.post(`${API_BASE_URL}/api/contact`, data, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.data.success) {
        setSubmitMessage('Success! Your quote request has been submitted. We\'ll contact you within 24 hours.');
        setSubmitStatus('success');
        reset();
        setServiceTypes([]);
      } else {
        setSubmitMessage('Error: ' + (response.data.message || 'Failed to submit request'));
        setSubmitStatus('error');
      }
    } catch (error) {
      let errorMessage = 'Error: Failed to submit request. Please try again.';

      if (error.response?.data?.message) {
        errorMessage = 'Error: ' + error.response.data.message;
      } else if (error.response?.data?.errors) {
        const errorDetails = error.response.data.errors.map((err) => err.message).join(', ');
        errorMessage = 'Validation errors: ' + errorDetails;
      } else if (error.code === 'ECONNREFUSED') {
        errorMessage = 'Error: Unable to connect to server. Please try again later.';
      }

      setSubmitMessage(errorMessage);
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceOptions = [
    { value: "shuttle", label: "Employee Shuttles", icon: "🚌" },
    { value: "corporate", label: "Corporate Cars", icon: "🚗" },
    { value: "airport", label: "Airport Transfers", icon: "✈️" },
    { value: "event", label: "Event Transportation", icon: "🎪" }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-6">
            Get Your Free Transportation Quote
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Fill out the form below and our team will contact you within 24 hours with a customized transportation solution for your company.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl border border-gray-100">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 lg:space-y-8">
              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-bold text-gray-800 mb-3">
                    First Name *
                  </label>
                  <input 
                    {...register("firstName")}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 font-medium"
                    placeholder="Enter your first name"
                  />
                  {errors.firstName && (
                    <div className="text-red-500 text-sm mt-2 font-medium">{errors.firstName.message}</div>
                  )}
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-bold text-gray-800 mb-3">
                    Last Name *
                  </label>
                  <input 
                    {...register("lastName")}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 font-medium"
                    placeholder="Enter your last name"
                  />
                  {errors.lastName && (
                    <div className="text-red-500 text-sm mt-2 font-medium">{errors.lastName.message}</div>
                  )}
                </div>
              </div>

              {/* Contact Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-800 mb-3">
                    Email Address *
                  </label>
                  <input 
                    type="email"
                    {...register("email")}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 font-medium"
                    placeholder="your.email@company.com"
                  />
                  {errors.email && (
                    <div className="text-red-500 text-sm mt-2 font-medium">{errors.email.message}</div>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-800 mb-3">
                    Phone Number *
                  </label>
                  <input 
                    type="tel"
                    {...register("phone")}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 font-medium"
                    placeholder="+1 (555) 123-4567"
                  />
                  {errors.phone && (
                    <div className="text-red-500 text-sm mt-2 font-medium">{errors.phone.message}</div>
                  )}
                </div>
              </div>

              {/* Company & Employee Count */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-bold text-gray-800 mb-3">
                    Company Name *
                  </label>
                  <input 
                    {...register("company")}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 font-medium"
                    placeholder="Your Company Name"
                  />
                  {errors.company && (
                    <div className="text-red-500 text-sm mt-2 font-medium">{errors.company.message}</div>
                  )}
                </div>
                <div>
                  <label htmlFor="employeeCount" className="block text-sm font-bold text-gray-800 mb-3">
                    Number of Employees *
                  </label>
                  <select 
                    {...register("employeeCount")}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 font-medium"
                  >
                    <option value="">Select employee range</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-100">51-100 employees</option>
                    <option value="101-500">101-500 employees</option>
                    <option value="500+">500+ employees</option>
                  </select>
                  {errors.employeeCount && (
                    <div className="text-red-500 text-sm mt-2 font-medium">{errors.employeeCount.message}</div>
                  )}
                </div>
              </div>

              {/* Service Types */}
              <div>
                <label className="block text-sm font-bold text-gray-800 mb-4">
                  Service Types Required *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {serviceOptions.map((option) => (
                    <label key={option.value} className="flex items-center p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 group">
                      <input 
                        type="checkbox" 
                        className="mr-4 w-5 h-5 text-blue-600 rounded border-2 border-gray-300 focus:ring-blue-500"
                        checked={serviceTypes.includes(option.value)}
                        onChange={(e) => handleServiceTypeChange(option.value, e.target.checked)}
                      />
                      <span className="text-2xl mr-3">{option.icon}</span>
                      <span className="font-medium text-gray-800 group-hover:text-blue-600">{option.label}</span>
                    </label>
                  ))}
                </div>
                {errors.serviceTypes && (
                  <div className="text-red-500 text-sm mt-2 font-medium">{errors.serviceTypes.message}</div>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-800 mb-3">
                  Additional Requirements (Optional)
                </label>
                <textarea 
                  {...register("message")}
                  rows={5}
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 resize-none font-medium"
                  placeholder="Tell us about your specific transportation needs, preferred schedule, pickup locations, etc."
                />
              </div>

              {/* Submit Message */}
              {submitMessage && (
                <div className={`p-4 rounded-xl border-2 ${
                  submitStatus === 'success' 
                    ? 'bg-green-50 text-green-800 border-green-200' 
                    : 'bg-red-50 text-red-800 border-red-200'
                } font-medium`}>
                  {submitMessage}
                </div>
              )}

              {/* Submit Button */}
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 sm:py-5 px-8 rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 font-bold text-base sm:text-lg disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105 disabled:transform-none"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting Request...
                  </div>
                ) : (
                  "Get Free Transportation Quote"
                )}
              </button>
            </form>
          </div>

          {/* Contact Info & Process */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8">
                Ready to Get Started?
              </h3>
              <p className="text-blue-100 mb-8 lg:mb-12 leading-relaxed text-base sm:text-lg">
                Our transportation experts are standing by to help you create the perfect mobility solution for your employees.
              </p>

              <div className="space-y-6 lg:space-y-8">
                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-6 group-hover:bg-white/30 transition-colors">
                    <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-lg">Call Us Directly</div>
                    <div className="text-blue-100 text-lg">+1 (800) 123-TRANS</div>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-6 group-hover:bg-white/30 transition-colors">
                    <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-lg">Email Us</div>
                    <div className="text-blue-100 text-lg">quotes@transportpro.com</div>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-6 group-hover:bg-white/30 transition-colors">
                    <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-lg">Business Hours</div>
                    <div className="text-blue-100 text-lg">Mon-Fri: 8AM-8PM EST</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Process Steps */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl border border-gray-100">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">
                What Happens Next?
              </h3>

              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full flex items-center justify-center mr-6 flex-shrink-0 font-bold text-lg group-hover:scale-110 transition-transform">
                    1
                  </div>
                  <div>
                    <div className="font-bold text-gray-800 text-lg mb-2">Initial Consultation</div>
                    <div className="text-gray-600 leading-relaxed">We'll contact you within 24 hours to discuss your transportation needs and requirements</div>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full flex items-center justify-center mr-6 flex-shrink-0 font-bold text-lg group-hover:scale-110 transition-transform">
                    2
                  </div>
                  <div>
                    <div className="font-bold text-gray-800 text-lg mb-2">Custom Proposal</div>
                    <div className="text-gray-600 leading-relaxed">Receive a detailed transportation plan with routes, pricing, and service options</div>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-400 text-gray-900 rounded-full flex items-center justify-center mr-6 flex-shrink-0 font-bold text-lg group-hover:scale-110 transition-transform">
                    3
                  </div>
                  <div>
                    <div className="font-bold text-gray-800 text-lg mb-2">Quick Implementation</div>
                    <div className="text-gray-600 leading-relaxed">Fast setup and launch of your customized employee transportation service</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}