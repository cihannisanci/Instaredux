import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

//Import Css
import css from './styles/style.styl';

//Import Components
import Main from './components/Main';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';

const routes = (
  <Router history={browserHistory}>
  	<Route path='/' component={Main}>
  	  <IndexRoute component={PhotoGrid}></IndexRoute>
      <Route path='/view/:postId' component={Single}></Route>
  	</Route>
  </Router>
);

ReactDOM.render(routes ,document.getElementById('root'));