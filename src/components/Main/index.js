import React from 'react';
import './main.css';

import Caroussel from './Caroussel';
import Presentation from './Presentation';
import Collection from './Collection';

function Main() {
  return (
    <div className="Main">
      <Caroussel />
      <Presentation />
      <Collection />
    </div>
  );
}

export default Main;