import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/home'
import ExploreSpace from './Designs/space/exploreSpace'
import London from './Designs/london/London'
import Ecstacy from './Designs/Portfolio/ecstacy'


const App = () => {
  return (
    <BrowserRouter>
      <Route path="/React-projects/design/explore-space" exact component={ExploreSpace}/>
      <Route path="/React-projects/design/london" exact component={London}/>
      <Route path="/React-projects/design/ecstacy" exact component={Ecstacy}/>
      <Route path="/React-projects/" exact component={Home}/>
    </BrowserRouter>
  );
}

export default App;