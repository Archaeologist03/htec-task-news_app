import NewsTypes from './newsTypes';

const INITIAL_STATE = {
	country: null,
	topGbNews: null,
	topUsNews: null,
	error: null,
};

const newsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case NewsTypes.COUNTRY_SWITCHED:
			return {
				...state,
				country: action.payload,
				error: null,
			};
		case NewsTypes.FETCH_TOP_NEWS:
			return {
				...state,
				error: null,
			};

		default:
			return state;
	}
};

export default newsReducer;
