import { connect } from 'react-redux';
import Main from './Main';
import { bindActionCreators } from 'redux';
import * as actions from '../redux/actions';
import { withRouter } from 'react-router';

const mapStateToProps = (state) => {
	return {
		posts: state.post, //post dari action.js bagian (post)
		comments: state.comments //comments dari action.js bagian (comments)
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actions, dispatch);
};

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

export default App;
