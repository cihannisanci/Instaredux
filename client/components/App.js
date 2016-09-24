import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

function matStatetoProps(state) {
	return {
		posts: state.posts,
    comments: state.comments
	}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(matStatetoProps, mapDispatchToProps)(Main);

export default App;