/**
 * NPM import
 */
// import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

/**
 * Local import
 */
import './index.css';
// Component
import App from './components/App';


/**
 * Render
 */
// 1. Le composant racine à rendre (le tronc de l'arbre)
const rootComponent = (
    <Router>
      <Route component={App} />
    </Router>
);
// 2. La cible dans le DOM
const target = document.getElementById('root');

// rendu de react-dom : react VERS dom
render(rootComponent, target);