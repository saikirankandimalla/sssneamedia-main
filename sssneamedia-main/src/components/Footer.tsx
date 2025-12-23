import { Globe, Facebook, Twitter, Linkedin, Youtube, Instagram, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Our Services', href: '#services' },
    { label: 'Courses', href: '#education' },
    { label: 'Latest News', href: '#news' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', href: '#contact' },
  ];

  const services = [
    { label: 'Digital Journalism', href: '#' },
    { label: 'Media Production', href: '#' },
    { label: 'Online Courses', href: '#' },
    { label: 'Skill Development', href: '#' },
    { label: 'Broadcasting', href: '#' },
    { label: 'EdTech Solutions', href: '#' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-10 h-10" strokeWidth={2} />
              <div>
                <div className="text-xl font-bold">SSS News & Media</div>
                <div className="text-sm text-blue-200">Informing & Educating</div>
              </div>
            </div>
            <p className="text-blue-200 leading-relaxed mb-6">
              Your trusted source for news, media, and education. Empowering minds
              and shaping futures through quality journalism and innovative learning.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-blue-200 hover:text-white hover:translate-x-2 inline-block transition-all duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-blue-200 hover:text-white hover:translate-x-2 inline-block transition-all duration-300"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-300 flex-shrink-0 mt-1" />
                <span className="text-blue-200">
                  Flat No. 4-6-384/3, Annapurna Colony, NTPC Block,
Medipally Road, Opp. Badraiah Hotel,
Ramagundam, Peddapalli, Telangana – 505215
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-300 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-blue-200 hover:text-white transition-colors">
                  +91 93904 28464
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-300 flex-shrink-0" />
                <a href="mailto:info@sssnews.com" className="text-blue-200 hover:text-white transition-colors">
                  admin@sssnewsmediaservices.online
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="font-semibold mb-3">Subscribe to Newsletter</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-white/40"
                />
                <button className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-200 text-sm">
              © 2025 SSS News & Media Services. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
