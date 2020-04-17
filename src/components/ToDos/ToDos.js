import ToDo from '../ToDo/ToDo';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/action';

import React, { Component } from 'react';

class ToDos extends Component {
	render() {
		const todos = this.props.posts.map((post) => (
			<ToDo
				key={post.id}
				data={post.text}
				test={post.id}
				clicked={() => this.props.deletePost(post.id)}
			/>
		));

		return <div>{todos}</div>;
	}
}

const mapStateToProps = (state) => {
	return {
		posts: state.posts,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		deletePost: (id) => dispatch({ type: actionTypes.DELETE_POST, postId: id }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDos);
