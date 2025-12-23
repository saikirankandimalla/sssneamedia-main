import { BookOpen, Users, Award, Clock, CheckCircle, Star } from 'lucide-react';

export default function EduTech() {
  const courses = [
    {
      title: 'Digital Journalism Masterclass',
      category: 'Journalism',
      duration: '8 Weeks',
      students: '2,500+',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Media Production & Editing',
      category: 'Media',
      duration: '10 Weeks',
      students: '1,800+',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/7991158/pexels-photo-7991158.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Content Writing & SEO',
      category: 'Content',
      duration: '6 Weeks',
      students: '3,200+',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/4195325/pexels-photo-4195325.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const benefits = [
    { icon: BookOpen, text: 'Expert-Led Curriculum' },
    { icon: Users, text: 'Interactive Learning' },
    { icon: Award, text: 'Industry Certification' },
    { icon: Clock, text: 'Flexible Schedule' },
  ];

  return (
    <section id="education" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Transform Your <span className="text-green-700">Learning Journey</span>
          </h2>
          <div className="w-24 h-1 bg-green-700 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Unlock your potential with our comprehensive courses designed by industry experts.
            Learn at your own pace and gain skills that matter.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {courses.map((course, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-green-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {course.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors">
                  {course.title}
                </h3>

                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {course.students}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    {course.rating}
                  </div>
                </div>

                <button className="w-full py-3 bg-green-700 text-white rounded-lg font-semibold hover:bg-green-800 transition-colors">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose Our Learning Platform?
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our education platform combines cutting-edge technology with proven teaching
                methodologies. We focus on practical skills, real-world applications, and
                continuous support to ensure your success.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-green-700" strokeWidth={2} />
                      </div>
                      <span className="text-lg font-semibold text-gray-900">{benefit.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-700 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Lifetime Access</h4>
                    <p className="text-gray-600">
                      Once enrolled, access course materials anytime, anywhere, forever.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-700 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Practical Projects</h4>
                    <p className="text-gray-600">
                      Build real-world projects and create a portfolio that showcases your skills.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-700 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Career Support</h4>
                    <p className="text-gray-600">
                      Get guidance on career paths, resume reviews, and job placement assistance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button className="px-8 py-4 bg-green-700 text-white rounded-lg font-semibold text-lg hover:bg-green-800 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              Browse All Courses
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
