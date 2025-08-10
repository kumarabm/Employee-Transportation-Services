import { useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [quickQuote, setQuickQuote] = useState({
    serviceType: "",
    employeeCount: ""
  });

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({ 
        top: offsetTop, 
        behavior: "smooth" 
      });
    }
  };

  const handleQuickQuote = (e) => {
    e.preventDefault();
    if (quickQuote.serviceType && quickQuote.employeeCount) {
      scrollToContact();
      // Auto-populate contact form with quick quote data
      setTimeout(() => {
        const serviceCheckboxes = document.querySelectorAll('input[type="checkbox"][name="serviceTypes"]');
        serviceCheckboxes.forEach(checkbox => {
          if (checkbox.value === quickQuote.serviceType) {
            checkbox.checked = true;
          }
        });
        const employeeSelect = document.querySelector('select[name="employeeCount"]');
        if (employeeSelect) {
          employeeSelect.value = quickQuote.employeeCount;
        }
      }, 500);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-blue-500/20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-cyan-500/20 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-blue-600/10 to-cyan-600/10 blur-3xl animate-spin-slow"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <div className="relative z-10 max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
            >
              Professional
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent block">
                Employee Transport
              </span>
              Solutions
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed max-w-2xl"
            >
              Keep your workforce moving efficiently with our reliable, safe, and cost-effective 
              transportation services. Trusted by 500+ companies nationwide.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-12"
            >
              <button 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 font-bold text-lg sm:text-xl shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Get Free Quote
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById("services");
                  if (element) {
                    const offsetTop = element.offsetTop - 80;
                    window.scrollTo({ 
                      top: offsetTop, 
                      behavior: "smooth" 
                    });
                  }
                }}
                className="border-2 border-white/30 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-200 font-bold text-lg sm:text-xl backdrop-blur-sm"
              >
                View Services
              </button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap items-center gap-6 text-blue-200"
            >
              <div className="flex items-center">
                <svg className="w-6 h-6 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="font-semibold">4.9/5 Rating</span>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">500+ Companies</span>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Fully Licensed</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right content - Quick Quote Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl border border-white/20">
              <div className="text-center mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  Get Instant Quote
                </h3>
                <p className="text-blue-100">
                  Tell us about your needs and we'll provide a custom solution
                </p>
              </div>

              <form onSubmit={handleQuickQuote} className="space-y-6">
                <div>
                  <label htmlFor="service-type" className="block text-white font-semibold mb-3">
                    Service Type
                  </label>
                  <select
                    id="service-type"
                    value={quickQuote.serviceType}
                    onChange={(e) => setQuickQuote({...quickQuote, serviceType: e.target.value})}
                    className="w-full px-4 py-4 rounded-xl bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent backdrop-blur-sm"
                    required
                  >
                    <option value="" className="text-gray-800">Select a service</option>
                    <option value="Employee Shuttles" className="text-gray-800">Employee Shuttles</option>
                    <option value="Corporate Cars" className="text-gray-800">Corporate Cars</option>
                    <option value="Airport Transfers" className="text-gray-800">Airport Transfers</option>
                    <option value="Event Transportation" className="text-gray-800">Event Transportation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="employee-count" className="block text-white font-semibold mb-3">
                    Number of Employees
                  </label>
                  <select
                    id="employee-count"
                    value={quickQuote.employeeCount}
                    onChange={(e) => setQuickQuote({...quickQuote, employeeCount: e.target.value})}
                    className="w-full px-4 py-4 rounded-xl bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent backdrop-blur-sm"
                    required
                  >
                    <option value="" className="text-gray-800">Select employee count</option>
                    <option value="1-10" className="text-gray-800">1-10 employees</option>
                    <option value="11-50" className="text-gray-800">11-50 employees</option>
                    <option value="51-200" className="text-gray-800">51-200 employees</option>
                    <option value="201-500" className="text-gray-800">201-500 employees</option>
                    <option value="500+" className="text-gray-800">500+ employees</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-4 rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Get My Quote Now
                </button>
              </form>

              <div className="mt-8 text-center">
                <p className="text-blue-100 text-sm">
                  ⚡ Get your custom quote in under 24 hours
                </p>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-20 animate-bounce"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-bounce delay-1000"></div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center text-white/70">
          <span className="text-sm font-medium mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full animate-bounce mt-2"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}