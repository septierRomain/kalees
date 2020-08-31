import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

import Home from '../Home';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import Blog from '../Blog';
// import NotFound from '../404';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/blog" component={Blog} />

        {/* <Route component={NotFound} /> */}
      </Switch>
    </div>
  );
}

export default App;
