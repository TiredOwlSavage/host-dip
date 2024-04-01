import React, { useState } from 'react';
import Header from './Header';
import Features from './Features';
import HowItWorks from './HowItWorks';
import Testimonials from './Testimonials';
import Footer from './Footer';
import Hero from './Hero';

const LandingPage = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <div>
      <Header/>
      <Hero/>
      <Features />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default LandingPage;
