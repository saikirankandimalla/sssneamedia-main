import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import EduTech from './components/EduTech';
import News from './components/News';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import GetStartedPage from './components/GetStartedPage';
import NewsPage from './components/NewsPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigate={setCurrentPage} />
      {currentPage === 'home' ? (
        <main id="home">
          <Hero onGetStarted={() => setCurrentPage('getstarted')} onLearn={() => setCurrentPage('news')} />
          <About />
          <Services />
          <EduTech />
          <News />
          <WhyChooseUs />
          <Testimonials />
          <CallToAction onGetStarted={() => setCurrentPage('getstarted')} />
        </main>
      ) : currentPage === 'getstarted' ? (
        <GetStartedPage />
      ) : currentPage === 'news' ? (
        <NewsPage />
      ) : (
        <GetStartedPage />
      )}
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}

export default App;
