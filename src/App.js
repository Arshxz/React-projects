import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/home'
import ExploreSpace from './Designs/exploreSpace'
import London from './Designs/London'
import Wolf from './Designs/wolf'
import Ecstacy from './Designs/ecstacy'


const App = () => {
  return (
    <BrowserRouter>
      {/* <Link to="/design/london">London</Link> - */}
      <>
        <Route path="/design/explore-space" exact component={ExploreSpace}/>
        <Route path="/design/london" exact component={London}/>
        <Route path="/design/wolf" exact component={Wolf}/>
        <Route path="/design/ecstacy" exact component={Ecstacy}/>
        <Route path="/" exact component={Home}/>
      </>
    </BrowserRouter>
  );
}

export default App;