import newsTypes from './newsTypes';

export const countrySwitch = (country) => ({
  type: newsTypes.COUNTRY_SWITCH,
  payload: country,
});

export const countrySwitcherState = (bool) => ({
  type: newsTypes.COUNTRY_SWITCHER_STATE,
  payload: bool,
});

export const fetchTopNews = (country) => ({
  type: newsTypes.FETCH_TOP_NEWS,
  country,
});
