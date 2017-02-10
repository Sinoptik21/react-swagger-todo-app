import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Main from '../components/Main';
import Home from '../components/Home';

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      // <Route path='playerOne' header='Первый игрок' component={PromptContainer} />
      // <Route path='playerTwo/:playerOne' header='Второй игрок' component={PromptContainer} />
      // <Route path='battle' component={ConfirmBattleContainer} />
      // <Route path='results' component={ResultsContainer} />
    </Route>
  </Router>
);

export default routes;
