import { Shield, Users, Award, Zap, Clock, Globe } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Shield,
      title: 'Trusted Information',
      description: 'Verified facts, rigorous editorial standards, and commitment to journalistic integrity.',
    },
    {
      icon: Award,
      title: 'Quality Education',
      description: 'Industry-recognized certifications and courses designed by leading experts.',
    },
    {
      icon: Users,
      title: 'Expert Mentors',
      description: 'Learn from seasoned journalists, educators, and industry professionals.',
    },
    {
      icon: Zap,
      title: 'Modern Approach',
      description: 'Cutting-edge technology and innovative methods for learning and news delivery.',
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Round-the-clock news coverage and access to learning materials anytime.',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving audiences and learners across 25+ countries worldwide.',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-blue-900">SSS News & Media</span>
          </h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We combine trust, expertise, and innovation to deliver unparalleled
            news coverage and educational experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                <div className="relative bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-900 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-8 h-8 text-blue-900 group-hover:text-white transition-colors" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-12">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Join 50,000+ Readers and Learners Worldwide
            </h3>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Be part of a global community that values authentic journalism and
              continuous learning. Experience the difference of a platform built
              for both informing and educating.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-blue-900 text-white rounded-lg font-semibold text-lg hover:bg-blue-800 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                Subscribe to News
              </button>
              <button className="px-8 py-4 bg-green-700 text-white rounded-lg font-semibold text-lg hover:bg-green-800 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                Start Learning Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
