import React from 'react';

import Navbar from '../Navbar';
import Footer from '../Footer';

function NotFound() {
  return (
    <div className="NotFound">
        <Navbar />
        <h1>404 page non trouvée</h1>
        <Footer />
    </div>
  );
}

export default NotFound;