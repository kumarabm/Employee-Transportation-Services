export default function MegaMenu() {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18 8.5V5c0-1.1-.9-2-2-2H8C6.9 3 6 3.9 6 5v3.5c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2zM3 12v8c0 1.1.9 2 2 2h14c0-1.1-.9-2-2-2V12H3z" />
        </svg>
      ),
      title: "Employee Shuttles",
      description: "Daily office commute solutions with multiple pickup points",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      features: ["Multiple routes", "Real-time tracking", "Comfortable seating"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
        </svg>
      ),
      title: "Corporate Cars",
      description: "Premium executive transportation with professional chauffeurs",
      color: "text-cyan-600",
      bgColor: "bg-cyan-100",
      features: ["Professional drivers", "Luxury vehicles", "24/7 availability"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
        </svg>
      ),
      title: "Airport Transfers",
      description: "Reliable pickup and drop-off services with flight monitoring",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
      features: ["Flight tracking", "Meet & greet", "Luggage assistance"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
      title: "Event Transportation",
      description: "Specialized transport for corporate events and conferences",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      features: ["Event coordination", "Group transport", "Flexible scheduling"]
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({ 
        top: offsetTop, 
        behavior: "smooth" 
      });
    }
  };

  return (
    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[800px] max-w-4xl bg-white rounded-2xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-4 group-hover:translate-y-0 z-50">
      <div className="p-8">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Transportation Services</h3>
          <p className="text-gray-600">Professional mobility solutions for your business needs</p>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group/item p-6 rounded-xl hover:bg-gray-50 transition-all duration-200 cursor-pointer border border-transparent hover:border-gray-200"
              onClick={() => scrollToSection("services")}
            >
              <div className="flex items-start space-x-4">
                <div className={`${service.bgColor} ${service.color} p-3 rounded-lg flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200`}>
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800 mb-2 group-hover/item:text-blue-600 transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-gray-500">
                        <svg className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
          <div className="text-sm text-gray-500">
            Need a custom solution? Contact our team for personalized quotes.
          </div>
          <button 
            onClick={() => scrollToSection("contact")}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 font-semibold text-sm"
          >
            Get Custom Quote
          </button>
        </div>
      </div>
    </div>
  );
}