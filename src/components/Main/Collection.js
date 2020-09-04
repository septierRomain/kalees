import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import './main.scss';

// Image
import Jessie from '../../assets/Jessie.jpg';
import Buffalo from '../../assets/buffalo-low.jpg';
import Portman from '../../assets/portman.jpg';

function Collection() {
  return (
    <div className="Collection">
      <Card>
        <Image src={ Jessie } className="pictures"/>
        <Card.Content>
          <Card.Description>
            Lorem ipsum dolor sit amet.
          </Card.Description>
        </Card.Content>
      </Card>
      <Card>
        <Image src={ Portman } className="pictures"/>
        <Card.Content>
          <Card.Description>
            Lorem ipsum dolor sit amet.
          </Card.Description>
        </Card.Content>
      </Card>
      <Card>
        <Image src={ Buffalo } className="pictures"/>
        <Card.Content>
          <Card.Description>
            Lorem ipsum dolor sit amet.
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
}

export default Collection;