import * as actionTypes from './action';

const initialState = {
	posts: [],
	text: '',
};

const reducer = (state = initialState, action, value) => {
	switch (action.type) {
		case actionTypes.ADD_POST:
			const newPost = {
				id: Math.random(),
				text: state.text,
			};
			return {
				...state,
				posts: state.posts.concat(newPost),
			};

		case actionTypes.INPUT_CHANGE:
			return {
				...state,
				text: action.value,
			};

		case actionTypes.DELETE_POST: {
			return {
				...state,
				posts: state.posts.filter((post) => post.id !== action.postId),
			};
		}
		default:
			return state;
	}
};

export default reducer;
