import React from 'react';
import { Divider } from 'semantic-ui-react';

import './footer.css';
import Reseaux from './Reseaux'
import Contact from './Contact'

function Footer() {
  return (
    <div className="Footer">
      <Reseaux />
      <Divider vertical className="divider"/>
      <Contact />
    </div>
  );
}

export default Footer;