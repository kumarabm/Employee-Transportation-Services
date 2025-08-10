export default function Services() {
  const services = [
    {
      title: "Employee Shuttles",
      description: "Regular shuttle services connecting residential areas to your workplace with flexible scheduling and route optimization.",
      features: ["Scheduled Routes", "Real-time Tracking", "Comfortable Vehicles", "Professional Drivers"],
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z"/>
        </svg>
      ),
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Corporate Cars",
      description: "Premium vehicle service for executives and client meetings with professional chauffeurs and luxury amenities.",
      features: ["Executive Vehicles", "Professional Chauffeurs", "24/7 Availability", "Premium Amenities"],
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M5 11l1.5-4.5h11L19 11m-1.5 5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m-11 0C5.67 16 5 15.33 5 14.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16M18.92 6c-.2-.58-.76-1-1.42-1H6.5c-.66 0-1.22.42-1.42 1L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-6z"/>
        </svg>
      ),
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Airport Transfers",
      description: "Reliable airport transportation for business travelers with flight tracking and meet-and-greet services.",
      features: ["Flight Tracking", "Meet & Greet", "Luggage Assistance", "Multiple Airports"],
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
        </svg>
      ),
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Event Transportation",
      description: "Coordinated transportation solutions for corporate events, conferences, and team building activities.",
      features: ["Group Coordination", "Event Planning", "Multiple Vehicles", "Custom Routes"],
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6 2c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2s-2-.9-2-2V4c0-1.1.9-2 2-2zm3 6v8c0 1.1.9 2 2 2h9l-2-4h2l-2-4h2l-2-4V8H9z"/>
        </svg>
      ),
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-32 bg-white">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-6">
            Complete Transportation Solutions
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From daily employee commutes to executive travel, we provide comprehensive 
            transportation services tailored to your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-3xl p-8 sm:p-10 lg:p-12 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 hover:-translate-y-2"
            >
              {/* Background gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {service.icon}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features list */}
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn more button */}
                <div className="mt-8">
                  <button className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-200 transform hover:scale-105`}>
                    Learn More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 lg:mt-24">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Ready to Transform Your Transportation?
            </h3>
            <p className="text-blue-100 text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
              Get a custom transportation solution designed specifically for your company's needs and budget.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  const offsetTop = element.offsetTop - 80;
                  window.scrollTo({ 
                    top: offsetTop, 
                    behavior: "smooth" 
                  });
                }
              }}
              className="bg-white text-blue-600 px-8 sm:px-12 py-4 sm:py-5 rounded-xl hover:bg-gray-50 transition-colors duration-200 font-bold text-lg sm:text-xl shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get Your Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}