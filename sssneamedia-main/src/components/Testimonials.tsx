import { Quote, Star } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Rama krishna',
      role: 'Journalist',
      company: 'Global Times',
      image: 'https://st.depositphotos.com/1011643/4430/i/950/depositphotos_44309759-stock-photo-young-indian-man-outdoors.jpg',
      quote: 'SSS News & Media transformed my career. The Digital Journalism course gave me the skills I needed to excel in modern newsrooms. The instructors are world-class.',
      rating: 5,
    },
    {
      name: 'Anusha',
      role: 'Content Creator',
      company: 'MediaHub',
      image: 'https://as2.ftcdn.net/v2/jpg/02/09/41/35/1000_F_209413547_IE1Pab5ln6YcZCiNbasPI1tnQAHtzoo8.jpg',
      quote: 'The best platform for staying informed while building skills. I read their news daily and completed three courses that directly led to my promotion.',
      rating: 5,
    },
    {
      name: 'Priya ',
      role: 'Educator',
      company: 'EduLearn',
      image: 'https://thumbs.dreamstime.com/b/simple-indian-girl-sweet-smile-happy-face-44021920.jpg',
      quote: 'As an educator, I appreciate their commitment to quality and accuracy. Their EdTech solutions are innovative and truly effective for modern learners.',
      rating: 5,
    },
    {
      name: 'sai teja',
      role: 'Business Analyst',
      company: 'TechCorp',
      image: 'https://cops-iitbhu.github.io/IG-website/images/teampic/YashShimpi.jpg',
      quote: 'Reliable news coverage and exceptional learning resources. SSS has become my go-to platform for both staying informed and upskilling in my career.',
      rating: 5,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-blue-900">Community Says</span>
          </h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from professionals, journalists, and learners who have transformed
            their careers with SSS News & Media Services.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-2xl p-8 sm:p-12">
            <Quote className="w-16 h-16 text-blue-200 absolute top-8 left-8" />

            <div className="relative z-10">
              <div className="flex items-center gap-1 mb-6 justify-center">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed mb-8 text-center italic">
                "{testimonials[activeIndex].quote}"
              </p>

              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  className="w-16 h-16 rounded-full object-cover shadow-lg"
                />
                <div className="text-left">
                  <div className="font-bold text-gray-900 text-lg">
                    {testimonials[activeIndex].name}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[activeIndex].role} at {testimonials[activeIndex].company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to testimonial ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === activeIndex
                    ? 'w-12 h-3 bg-blue-900'
                    : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-900 mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-700 mb-2">10K+</div>
            <div className="text-gray-600">Happy Students</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-700 mb-2">98%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}
