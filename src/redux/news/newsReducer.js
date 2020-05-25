import NewsTypes from './newsTypes';

import CATEGORIES_LIST from '../../constants/categories';

// Populate topNews categories with nulls for initial state.
let topNewsByCategories = {};
CATEGORIES_LIST.forEach((categoryName) => {
  topNewsByCategories[categoryName] = null;
});

const INITIAL_STATE = {
  country: 'gb', // gb / us
  countrySwitcherState: true,
  topNewsArticles: null,
  topNewsByTermArticles: null,
  topNewsByCategories,
  error: null,
};

const errorMessage = 'Error occured, try to refresh page.';

const newsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // COUNTRY
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

    // TOP NEWS
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

    // CATEGORIES
    case NewsTypes.FETCH_TOP_NEWS_BY_CATEGORY_SUCCESS:
      const { articles, category } = action.payload;
      console.log(state, 44444);

      return {
        ...state,
        topNewsByCategories: {
          ...state.topNewsByCategories,
          [category]: articles,
        },
        error: null,
      };
    case NewsTypes.FETCH_TOP_NEWS_BY_CATEGORY_FAIL:
      return {
        ...state,
        error: errorMessage,
      };

    // SEARCH TERM
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
