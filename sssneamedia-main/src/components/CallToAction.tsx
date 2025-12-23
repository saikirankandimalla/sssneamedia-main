import { ArrowRight, Mail, MessageCircle } from 'lucide-react';

interface CallToActionProps {
  onGetStarted?: () => void;
}

export default function CallToAction({ onGetStarted }: CallToActionProps) {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
          Join the Future of
          <br />
          <span className="text-green-300">News & Education</span>
        </h2>

        <p className="text-xl sm:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
          Start your journey with trusted news coverage and world-class education.
          Transform your career and stay ahead in a rapidly changing world.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button 
            onClick={onGetStarted}
            className="group px-8 py-4 bg-white text-blue-900 rounded-lg font-semibold text-lg hover:bg-green-300 hover:text-blue-900 transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
          >
            Get Started
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 hover:scale-105">
            Learn More
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <a
            href="mailto:info@sssnews.com"
            className="group flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <div className="text-white font-semibold mb-1">Email Us</div>
              <div className="text-blue-200">admin@sssnewsmediaservices.online</div>
            </div>
          </a>

            <a
            href="https://wa.me/9390428464"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <div className="text-white font-semibold mb-1">WhatsApp</div>
              <div className="text-blue-200">Connect Instantly</div>
            </div>
            </a>
        </div>

        <div className="mt-16 pt-16 border-t border-white/20">
          <p className="text-blue-200 text-lg">
            Trusted by <span className="font-bold text-white">50,000+</span> professionals worldwide
          </p>
        </div>
      </div>
    </section>
  );
}
