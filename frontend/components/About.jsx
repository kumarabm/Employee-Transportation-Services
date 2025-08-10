export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-32 bg-white">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left content */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-6">
                Your Trusted Transportation Partner
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed mb-8">
                For over a decade, TransportPro has been revolutionizing how companies 
                move their most valuable asset - their people. We understand that reliable 
                transportation isn't just about getting from point A to point B.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                It's about creating a stress-free experience that allows your employees to 
                focus on what matters most - their work and well-being. That's why we've built 
                a comprehensive transportation ecosystem that adapts to your unique business needs.
              </p>
            </div>

            <div className="space-y-6 mb-10">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full mt-1 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                    Established Excellence
                  </h3>
                  <p className="text-gray-600">
                    Over 10 years of proven track record serving Fortune 500 companies 
                    and growing startups alike.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full mt-1 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                    Technology-Driven Solutions
                  </h3>
                  <p className="text-gray-600">
                    Advanced fleet management, real-time tracking, and smart routing 
                    powered by cutting-edge technology.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-purple-500 rounded-full mt-1 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                    Sustainability Focus
                  </h3>
                  <p className="text-gray-600">
                    Committed to reducing carbon footprint with eco-friendly vehicles 
                    and optimized routing algorithms.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
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
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Start Your Journey
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-200 font-semibold text-lg">
                Learn More
              </button>
            </div>
          </div>

          {/* Right content - Mission & Values */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 sm:p-10 lg:p-12 border border-blue-100">
              
              <div className="mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
                  Our Mission
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  "To connect businesses and their people through safe, reliable, and 
                  innovative transportation solutions that enhance productivity and 
                  improve quality of life."
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">
                    Our Core Values
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Safety Above All</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Reliable Service</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Customer Excellence</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Innovation & Technology</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-blue-200">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">
                    Industry Recognition
                  </h4>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">🏆 Transportation Provider of the Year 2023</p>
                    <p className="text-sm text-gray-600">⭐ 4.9/5 Customer Satisfaction Rating</p>
                    <p className="text-sm text-gray-600">🌱 Green Fleet Certification</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-200 rounded-full opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-cyan-200 rounded-full opacity-30 animate-pulse delay-1000"></div>
          </div>
        </div>

        {/* Team section */}
        <div className="mt-20 lg:mt-32">
          <div className="text-center mb-12 lg:mb-16">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Leadership Team
            </h3>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals who drive our vision forward and 
              ensure exceptional service delivery every day.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                name: "Sarah Johnson",
                role: "Chief Executive Officer",
                description: "15+ years in transportation logistics with expertise in scaling operations nationwide.",
                image: "/api/placeholder/300/300"
              },
              {
                name: "Michael Chen",
                role: "Chief Technology Officer", 
                description: "Former Google engineer specializing in fleet optimization and real-time tracking systems.",
                image: "/api/placeholder/300/300"
              },
              {
                name: "Lisa Rodriguez",
                role: "Head of Operations",
                description: "Transportation industry veteran with deep experience in safety protocols and driver management.",
                image: "/api/placeholder/300/300"
              }
            ].map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-40 h-40 sm:w-48 sm:h-48 mx-auto bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                  {member.name}
                </h4>
                <p className="text-blue-600 font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}