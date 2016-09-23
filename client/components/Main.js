import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
  getInitialState() {
    return {name: 'cihan'};
  },

	render() {
		return (
      <div>
        <h1>
          <Link to='/'>Instaredux</Link> 
        </h1>
        {this.props.children}
      </div>
    );
	}
});

export default Main;

