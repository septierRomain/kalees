import React from 'react';
import './footer.css';
import { Icon } from 'semantic-ui-react';

function Reseaux() {
  return (
    <div className="Reseaux">
      <h1>Reseaux sociaux</h1>
      <li>
        <Icon name="instagram"/> Instagram
      </li>
      <li>
        <Icon name="facebook square" />Facebook
      </li>
    </div>
  );
}

export default Reseaux;