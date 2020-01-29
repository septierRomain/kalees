import React from 'react';

import Navbar from '../Navbar';
import BlogMain from './Blog';
import Footer from '../Footer';

function Blog() {
  return (
    <div className="Blog">
        <Navbar />
        <BlogMain />
        <Footer />
    </div>
  );
}

export default Blog;