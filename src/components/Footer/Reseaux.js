import React from 'react';
import { Icon } from 'semantic-ui-react';

import './footer.css';

function Reseaux() {
  return (
    <div className="Reseaux">
      <h1>Reseaux sociaux</h1>
      <li>
          <a href="http://www.instagram.com/kaleesnok/?hl=fr" target="blank">
            <Icon name="instagram"/> Instagram
          </a>
      </li>
      <li>
        <Icon name="facebook square" />Facebook
      </li>
    </div>
  );
}

export default Reseaux;