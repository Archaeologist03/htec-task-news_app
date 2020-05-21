import newsTypes from './newsTypes';

export const countrySwitch = (country) => ({
  type: newsTypes.COUNTRY_SWITCH,
  payload: country,
});

export const isCountrySwitcherEnabled = (bool) => ({
  type: newsTypes.COUNTRY_SWITCHER_DISABLED,
  payload: bool,
});

export const fetchTopNews = () => ({
  type: newsTypes.FETCH_TOP_NEWS,
});
