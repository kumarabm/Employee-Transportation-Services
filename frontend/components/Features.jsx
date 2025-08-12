export default function Features() {
  const features = [
    {
      title: "Real-Time Tracking",
      description: "Monitor your fleet in real-time with GPS tracking, live updates, and smart notifications for complete peace of mind.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      ),
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      title: "Professional Drivers",
      description: "All drivers undergo thorough background checks, professional training, and maintain clean driving records.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      ),
      color: "text-green-500",
      bgColor: "bg-green-50"
    },
    {
      title: "Flexible Scheduling",
      description: "Customizable routes and schedules that adapt to your business needs with easy online booking and management.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
          <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
        </svg>
      ),
      color: "text-purple-500",
      bgColor: "bg-purple-50"
    },
    {
      title: "Safety First",
      description: "Regular vehicle maintenance, insurance coverage, and comprehensive safety protocols ensure secure transportation.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"/>
        </svg>
      ),
      color: "text-red-500",
      bgColor: "bg-red-50"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock customer support with dedicated account managers and emergency assistance when needed.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      color: "text-cyan-500",
      bgColor: "bg-cyan-50"
    },
    {
      title: "Cost Effective",
      description: "Reduce transportation costs by up to 40% compared to individual employee commute reimbursements.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
        </svg>
      ),
      color: "text-yellow-500",
      bgColor: "bg-yellow-50"
    }
  ];

  return (
    <section id="features" className="py-16 sm:py-20 lg:py-32 bg-gray-50">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-6">
            Why Choose Transportation Service?
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Experience the difference with our comprehensive transportation solutions designed 
            specifically for modern businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-14 h-14 ${feature.bgColor} ${feature.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Statistics section */}
        <div className="mt-16 lg:mt-24">
          <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl border border-gray-100">
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                Trusted by Industry Leaders
              </h3>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                Join hundreds of companies who have streamlined their transportation with Transportation Service
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 mb-2">
                  500+
                </div>
                <div className="text-gray-600 font-medium">
                  Companies Served
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-600 mb-2">
                  50k+
                </div>
                <div className="text-gray-600 font-medium">
                  Employees Transported
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-purple-600 mb-2">
                  99.9%
                </div>
                <div className="text-gray-600 font-medium">
                  Reliability Rate
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cyan-600 mb-2">
                  40%
                </div>
                <div className="text-gray-600 font-medium">
                  Cost Savings
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company logos */}
        <div className="mt-16 lg:mt-20">
          <div className="text-center mb-12">
            <h4 className="text-xl sm:text-2xl font-bold text-gray-700 mb-8">
              Trusted by Leading Companies
            </h4>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 opacity-60">
            {/* Company logo placeholders - these would be replaced with actual company logos */}
            <div className="w-24 h-12 sm:w-32 sm:h-16 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 font-bold text-xs sm:text-sm">COMPANY 1</span>
            </div>
            <div className="w-24 h-12 sm:w-32 sm:h-16 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 font-bold text-xs sm:text-sm">COMPANY 2</span>
            </div>
            <div className="w-24 h-12 sm:w-32 sm:h-16 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 font-bold text-xs sm:text-sm">COMPANY 3</span>
            </div>
            <div className="w-24 h-12 sm:w-32 sm:h-16 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 font-bold text-xs sm:text-sm">COMPANY 4</span>
            </div>
            <div className="w-24 h-12 sm:w-32 sm:h-16 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 font-bold text-xs sm:text-sm">COMPANY 5</span>
            </div>
            <div className="w-24 h-12 sm:w-32 sm:h-16 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 font-bold text-xs sm:text-sm">COMPANY 6</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}