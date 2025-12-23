import { Newspaper, Video, GraduationCap, BookOpen, TrendingUp, Radio } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Newspaper,
      title: 'Digital News & Journalism',
      description: 'Breaking news, in-depth analysis, and investigative journalism across politics, business, technology, and culture.',
      color: 'from-blue-600 to-blue-800',
      iconBg: 'bg-blue-100 text-blue-900',
    },
    {
      icon: Video,
      title: 'Media Production',
      description: 'Professional video content, documentaries, podcasts, and multimedia storytelling for modern audiences.',
      color: 'from-red-600 to-red-800',
      iconBg: 'bg-red-100 text-red-900',
    },
    {
      icon: GraduationCap,
      title: 'Online Courses & Training',
      description: 'Comprehensive learning programs in journalism, media production, digital marketing, and professional skills.',
      color: 'from-green-600 to-green-800',
      iconBg: 'bg-green-100 text-green-900',
    },
    {
      icon: BookOpen,
      title: 'Educational Content',
      description: 'Curated learning materials, e-books, tutorials, and resources designed for continuous skill development.',
      color: 'from-blue-600 to-blue-800',
      iconBg: 'bg-blue-100 text-blue-900',
    },
    {
      icon: TrendingUp,
      title: 'Skill Development Programs',
      description: 'Career-focused training in communication, leadership, technical skills, and industry-specific expertise.',
      color: 'from-green-600 to-green-800',
      iconBg: 'bg-green-100 text-green-900',
    },
    {
      icon: Radio,
      title: 'Broadcasting Services',
      description: 'Live news coverage, radio programs, streaming services, and real-time event broadcasting worldwide.',
      color: 'from-red-600 to-red-800',
      iconBg: 'bg-red-100 text-red-900',
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-900">Services</span>
          </h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions spanning news, media, and education to keep you informed
            and empowered in today's fast-paced world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                <div className="relative">
                  <div className={`w-16 h-16 ${service.iconBg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <Icon className="w-8 h-8" strokeWidth={2} />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-900 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <button className="text-blue-900 font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
                    Learn More
                    <span className="text-xl">→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-blue-900 text-white rounded-lg font-semibold text-lg hover:bg-blue-800 transition-all duration-300 hover:scale-105 hover:shadow-xl">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
}
