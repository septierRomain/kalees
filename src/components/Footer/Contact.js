import React from 'react';

import { Icon } from 'semantic-ui-react';

import './footer.scss';

function Contact() {
  return (
    <div className="Contact">
      <h1>Contact</h1>
      <li>
        <Icon name="mail"/>Mail
      </li>
    </div>
  );
}

export default Contact;