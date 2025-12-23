import { Target, Eye, Lightbulb, Award } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To deliver accurate, timely news and quality education that empowers individuals and communities worldwide.',
      color: 'bg-blue-100 text-blue-900',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be the leading platform where news meets education, creating informed and skilled global citizens.',
      color: 'bg-green-100 text-green-900',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Leveraging cutting-edge technology to revolutionize how people access news and acquire knowledge.',
      color: 'bg-red-100 text-red-900',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to the highest standards of journalism, education, and digital content creation.',
      color: 'bg-blue-100 text-blue-900',
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-blue-900">SSS News & Media</span>
          </h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are a forward-thinking organization bridging the gap between news,
            media, and education. Our integrated approach combines trusted journalism
            with innovative learning solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-16 h-16 ${value.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-8 h-8" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-20 bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Who We Are</h3>
              <p className="text-blue-100 leading-relaxed mb-4">
                SSS News & Media Services is a pioneering organization operating at the
                intersection of journalism, digital media, and education technology. Since
                our inception, we've been dedicated to informing minds and shaping futures.
              </p>
              <p className="text-blue-100 leading-relaxed">
                Our team of experienced journalists, educators, and technologists work
                together to create content that matters, courses that transform, and a
                platform that connects learners and readers worldwide.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-blue-100">Years Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl font-bold mb-2">100+</div>
                <div className="text-blue-100">Expert Team</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl font-bold mb-2">50K+</div>
                <div className="text-blue-100">Active Users</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl font-bold mb-2">25+</div>
                <div className="text-blue-100">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
