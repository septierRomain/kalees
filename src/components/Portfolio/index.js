import React from 'react';

import Navbar from '../Navbar';
import PortfolioMain from './Portfolio';
import Footer from '../Footer';

function Portfolio() {
  return (
    <div className="Portfolio">
      <Navbar />
      <PortfolioMain />
      <Footer />
    </div>
  );
}

export default Portfolio;