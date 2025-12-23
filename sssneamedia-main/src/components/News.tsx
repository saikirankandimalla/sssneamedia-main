import { Calendar, TrendingUp, Globe2, Briefcase, Laptop, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function News() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    { name: 'All', icon: Globe2 },
    { name: 'Technology', icon: Laptop },
    { name: 'Business', icon: Briefcase },
    { name: 'Trending', icon: TrendingUp },
  ];

  const newsArticles = [
    {
      title: 'The Future of Digital Journalism in the AI Era',
      category: 'Technology',
      date: 'Dec 20, 2025',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true,
    },
    {
      title: 'EdTech Revolution: Transforming Global Education',
      category: 'Technology',
      date: 'Dec 19, 2025',
      readTime: '4 min read',
      image: 'https://images.pexels.com/photos/5905857/pexels-photo-5905857.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
    },
    {
      title: 'Breaking: Global Summit on Media Ethics Announced',
      category: 'Trending',
      date: 'Dec 18, 2025',
      readTime: '3 min read',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
    },
    {
      title: 'Market Analysis: Media Stocks Surge Amid Digital Shift',
      category: 'Business',
      date: 'Dec 17, 2025',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
    },
    {
      title: 'New Skills in Demand: 2025 Job Market Report',
      category: 'Business',
      date: 'Dec 16, 2025',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
    },
    {
      title: 'Innovation in Broadcasting: 5G and Beyond',
      category: 'Technology',
      date: 'Dec 15, 2025',
      readTime: '4 min read',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
    },
  ];

  const filteredNews =
    activeCategory === 'All'
      ? newsArticles
      : newsArticles.filter((article) => article.category === activeCategory);

  return (
    <section id="news" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Latest <span className="text-red-700">News & Insights</span>
          </h2>
          <div className="w-24 h-1 bg-red-700 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay informed with our curated coverage of the most important stories
            in news, media, technology, and education.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.name
                    ? 'bg-red-700 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                }`}
              >
                <Icon className="w-4 h-4" />
                {category.name}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredNews.map((article, index) => (
            <div
              key={index}
              className={`group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                article.featured && index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              <div className={`relative overflow-hidden ${article.featured && index === 0 ? 'h-96' : 'h-48'}`}>
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-red-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {article.category}
                  </span>
                </div>
                {article.featured && index === 0 && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {article.date}
                  </div>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className={`font-bold text-gray-900 mb-4 group-hover:text-red-700 transition-colors ${
                  article.featured && index === 0 ? 'text-2xl' : 'text-lg'
                }`}>
                  {article.title}
                </h3>

                <button className="flex items-center gap-2 text-red-700 font-semibold hover:gap-4 transition-all">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-red-700 text-white rounded-lg font-semibold text-lg hover:bg-red-800 transition-all duration-300 hover:scale-105 hover:shadow-xl">
            View All News
          </button>
        </div>
      </div>
    </section>
  );
}
