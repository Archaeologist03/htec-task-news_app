import NewsTypes from './newsTypes';

import CATEGORIES_LIST from '../../constants/categories';

// Populate topNews categories with nulls for initial state.
let topNewsCategories = {};
CATEGORIES_LIST.forEach((categoryName) => {
  topNewsCategories[categoryName] = null;
});

const INITIAL_STATE = {
  country: 'gb', // gb / us
  countrySwitcherState: true,
  topNewsArticles: null,
  topNewsByTermArticles: null,
  topNewsCategories,
  error: null,
};

const errorMessage = 'Error occured, try to refresh page.';

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
      return {
        ...state,
        error: errorMessage,
      };

    case NewsTypes.FETCH_TOP_NEWS_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        topNewsArticles: action.payload,
        error: null,
      };
    case NewsTypes.FETCH_TOP_NEWS_BY_CATEGORY_FAIL:
      return {
        ...state,
        error: errorMessage,
      };

    case NewsTypes.FETCH_TOP_NEWS_BY_TERM_SUCCESS:
      return {
        ...state,
        topNewsByTermArticles: action.payload,
        error: null,
      };
    case NewsTypes.FETCH_TOP_NEWS_BY_TERM_FAIL:
      return {
        ...state,
        error: errorMessage,
      };

    default:
      return state;
  }
};

export default newsReducer;
