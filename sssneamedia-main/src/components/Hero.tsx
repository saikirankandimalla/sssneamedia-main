import { Globe, BookOpen, GraduationCap, Radio } from 'lucide-react';

interface HeroProps {
  onGetStarted?: () => void;
  onLearn?: () => void;
}

export default function Hero({ onGetStarted, onLearn }: HeroProps) {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 animate-float">
          <Globe className="w-24 h-24 text-blue-900" strokeWidth={1} />
        </div>
        <div className="absolute top-40 right-20 animate-float-delayed">
          <BookOpen className="w-20 h-20 text-green-700" strokeWidth={1} />
        </div>
        <div className="absolute bottom-40 left-1/4 animate-float">
          <GraduationCap className="w-28 h-28 text-blue-800" strokeWidth={1} />
        </div>
        <div className="absolute bottom-20 right-1/3 animate-float-delayed">
          <Radio className="w-16 h-16 text-red-700" strokeWidth={1} />
        </div>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.1),transparent)]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 flex items-center min-h-screen">
        <div className="text-center w-full animate-fade-in-up">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 blur-2xl opacity-20 animate-pulse-slow"></div>
              <Globe className="w-20 h-20 text-blue-900 relative" strokeWidth={1.5} />
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Informing Minds.
            <br />
            <span className="text-red-900">Educating Futures.</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            SSS News & Media Services delivers trusted news, digital media,
            <br className="hidden sm:block" />
            and modern education for a connected world.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onGetStarted}
              className="group relative px-8 py-4 bg-blue-900 text-white rounded-lg font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-900 transition-opacity duration-300 group-hover:opacity-0"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-blue-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <span className="relative flex items-center gap-2">
                Explore Courses
                <Radio className="w-5 h-5" />
              </span>
            </button>

            <button
              onClick={onLearn}
              className="group px-8 py-4 bg-white text-blue-900 rounded-lg font-semibold text-lg border-2 border-blue-900 transition-all duration-300 hover:bg-blue-900 hover:text-white hover:scale-105 hover:shadow-xl"
            >
              <span className="flex items-center gap-2">
                Learn With Us
                <GraduationCap className="w-5 h-5" />
              </span>
            </button>
          </div>

          <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-blue-900 mb-2">500+</div>
              <div className="text-gray-600">Daily Articles</div>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl font-bold text-green-700 mb-2">50K+</div>
              <div className="text-gray-600">Students</div>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-4xl font-bold text-red-700 mb-2">200+</div>
              <div className="text-gray-600">Courses</div>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <div className="text-4xl font-bold text-blue-900 mb-2">24/7</div>
              <div className="text-gray-600">Coverage</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
