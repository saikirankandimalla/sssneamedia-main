import { Menu, X } from 'lucide-react';
import logo from '../image.png';
import { useState } from 'react';

interface HeaderProps {
  onNavigate?: (page: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Education', href: '#education' },
    { label: 'News', href: '#news' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <img src={logo} alt="SSS News & Media" className="w-20 h-20 object-contain" />
            <div>
              <div className="text-xl font-bold text-blue-900">SSS News & Media</div>
              <div className="text-xs text-gray-600">Informing & Educating</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  if (onNavigate) {
                    e.preventDefault();
                    // if News link, route to news page; otherwise switch to home and jump to anchor
                    if (item.label === 'News') {
                      onNavigate('news');
                    } else if (item.label === 'Home') {
                      onNavigate('home');
                      setTimeout(() => (window.location.hash = item.href), 50);
                    } else {
                      onNavigate('home');
                      setTimeout(() => (window.location.hash = item.href), 50);
                    }
                    setIsMenuOpen(false);
                  }
                }}
                className="text-gray-700 hover:text-blue-900 transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
            <button 
              onClick={() => {
                onNavigate?.('getstarted');
                setIsMenuOpen(false);
              }}
              className="px-6 py-2 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-800 transition-colors"
            >
              Get Started
            </button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-3 text-gray-700 hover:text-blue-900 transition-colors font-medium"
                onClick={(e) => {
                  if (onNavigate) {
                    e.preventDefault();
                    if (item.label === 'News') {
                      onNavigate('news');
                    } else if (item.label === 'Home') {
                      onNavigate('home');
                      setTimeout(() => (window.location.hash = item.href), 50);
                    } else {
                      onNavigate('home');
                      setTimeout(() => (window.location.hash = item.href), 50);
                    }
                  }
                  setIsMenuOpen(false);
                }}
              >
                {item.label}
              </a>
            ))}
            <button 
              onClick={() => {
                onNavigate?.('getstarted');
                setIsMenuOpen(false);
              }}
              className="w-full mt-2 px-6 py-2 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-800 transition-colors"
            >
              Get Started
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
