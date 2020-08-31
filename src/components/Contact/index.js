import React from 'react';

import Navbar from '../Navbar';
import ContactMain from './Contact';
import Footer from '../Footer';


function Contact() {
  return (
    <div className="Contact">
      <Navbar />
      <ContactMain />
      <Footer />
    </div>
  );
}

export default Contact;