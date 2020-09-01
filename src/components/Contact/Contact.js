import React from 'react';

import './contact.scss';


function ContactMain() {
  return (
    <div className="Contact-Main">
      <h1>Connectons-nous !</h1>
      <p>
        Peu importe la raison, n’hésitez pas à envoyer un message. A partir du moment où le projet, la demande ou tout autre motif est sérieux, n’hésitez pas. La vie est ponctuée de rencontres, de connexions, d’idées qui naissent de toutes sortes de confrontations et collaborations…
      </p>
      <p>
        Alors que vous soyez une personne qui s’intéresse au graffiti, un journaliste, un média, un artiste, une marque, un organisateur d’événements, une association, un établissement culturel … 
      </p>
      <h3 id="mail">Mon mail</h3>
      <a href="mailto:lartevolution@yahoo.fr">lartevolution@yahoo.fr</a>
    </div>
  );
}

export default ContactMain;