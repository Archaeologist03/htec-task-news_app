import NewsTypes from './newsTypes';

const INITIAL_STATE = {
  country: 'gb', // gb / us
  countrySwitcherDisabled: false,
  topGbNews: null,
  topUsNews: null,
  error: null,
};

const newsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NewsTypes.COUNTRY_SWITCH:
      return {
        ...state,
        country: action.payload,
        error: null,
      };
    case NewsTypes.COUNTRY_SWITCHER_DISABLED:
      return {
        ...state,
        countrySwitcherDisabled: action.payload,
        error: null,
      };
    case NewsTypes.FETCH_TOP_NEWS_SUCCESS:
      // determine country then update accordingly
      return {
        ...state,
        error: null,
      };
    case NewsTypes.FETCH_TOP_NEWS_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default newsReducer;
