import React from 'react';
import { Image } from 'semantic-ui-react';

import './main.css';
import Liberty from '../../assets/liberty.jpg';

function Caroussel() {
  return (
    <div className="Caroussel">
      <Image src={Liberty} alt="Statue de la liberté" fluid/>
    </div>
  );
}

export default Caroussel;