import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import {Provider} from 'react-redux';
import store, {history} from './store';

//Import Css
import css from './styles/style.styl';

//Import Components
import Main from './components/Main';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';

const routes = (
  <Provider store={store}>
    <Router history={history}>
    	<Route path='/' component={Main}>
    	  <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path='/view/:postId' component={Single}></Route>
    	</Route>
    </Router>
  </Provider>
);

ReactDOM.render(routes ,document.getElementById('root'));