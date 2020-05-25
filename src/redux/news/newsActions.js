import newsTypes from './newsTypes';

export const countrySwitch = (country) => ({
  type: newsTypes.COUNTRY_SWITCH,
  payload: country,
});

export const countrySwitcherState = (bool) => ({
  type: newsTypes.COUNTRY_SWITCHER_STATE,
  payload: bool,
});

export const fetchTopNews = (country) => {
  return {
    type: newsTypes.FETCH_TOP_NEWS,
    country,
  };
};

export const fetchTopNewsByCategory = (country, category) => {
  return {
    type: newsTypes.FETCH_TOP_NEWS_BY_CATEGORY,
    country,
    category,
  };
};

export const fetchTopNewsByTerm = (country, searchTerm) => {
  return {
    type: newsTypes.FETCH_TOP_NEWS_BY_TERM,
    country,
    searchTerm,
  };
};
