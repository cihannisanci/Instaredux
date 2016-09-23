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
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
	}
});

export default Main;

