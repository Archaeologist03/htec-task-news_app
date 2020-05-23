import NewsTypes from './newsTypes';

const INITIAL_STATE = {
  country: 'gb', // gb / us
  countrySwitcherState: true,
  topNewsArticles: null,
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
    case NewsTypes.COUNTRY_SWITCHER_STATE:
      return {
        ...state,
        countrySwitcherState: action.payload,
        error: null,
      };
    case NewsTypes.FETCH_TOP_NEWS_SUCCESS:
      return {
        ...state,
        topNewsArticles: action.payload,
        error: null,
      };
    case NewsTypes.FETCH_TOP_NEWS_FAIL:
      const errorMessage = 'Error occured, try to refresh page.';
      return {
        ...state,
        error: errorMessage,
      };

    default:
      return state;
  }
};

export default newsReducer;
