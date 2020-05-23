import {
  TOP_HEADLINES_ENDPOINT,
  TESTING_API_KEY,
} from '../constants/constants';

// const corsTapeFix = 'https://cors-anywhere.herokuapp.com/';

const apiUrl = (country = 'gb', ...restArgs) => {
  const [category, searchTerm] = restArgs;

  const topHeadlinesBaseUrl = `/${TOP_HEADLINES_ENDPOINT}`;

  if (category) {
    return `${topHeadlinesBaseUrl}?country=${country}&category=${category}&apiKey=${TESTING_API_KEY}`;
  }
  if (searchTerm) {
    return `${topHeadlinesBaseUrl}?country=${country}&q=${searchTerm}&apiKey=${TESTING_API_KEY}`;
  }

  return `${topHeadlinesBaseUrl}?country=${country}&apiKey=${TESTING_API_KEY}`;
};

export default apiUrl;

// Examples:

// Top News from US = https://newsapi.org/v2/top-headlines?country=us&apiKey=61386a82d4274faf9ba1787cb253033c

// Top News from DE in CATEGORY business = https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=61386a82d4274faf9ba1787cb253033c

// Top News from GB by TERM basketball https://newsapi.org/v2/top-headlines?country=gb&q=basketball&apiKey=61386a82d4274faf9ba1787cb253033c

// Categories = business entertainment general health science sports technology
