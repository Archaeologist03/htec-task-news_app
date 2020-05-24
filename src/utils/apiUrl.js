import {
  TOP_HEADLINES_ENDPOINT,
  TESTING_API_KEY,
} from '../constants/constants';

// const corsTapeFix = 'https://cors-anywhere.herokuapp.com/';

const apiUrl = (country = 'gb', ...restArgs) => {
  // Second arg is going to be object with either category or search term property.
  let category = null;
  let searchTerm = null;

  if (restArgs[0] && restArgs[0].category) {
    category = restArgs[0].category;
  }
  if (restArgs[0] && restArgs[0].searchTerm) {
    searchTerm = restArgs[0].searchTerm;
  }

  const topHeadlinesBaseUrl = `/${TOP_HEADLINES_ENDPOINT}`;

  if (category !== null) {
    return `${topHeadlinesBaseUrl}?country=${country}&category=${category}&apiKey=${TESTING_API_KEY}`;
  }
  if (searchTerm !== null) {
    return `${topHeadlinesBaseUrl}?country=${country}&q=${searchTerm}&apiKey=${TESTING_API_KEY}`;
  }

  return `${topHeadlinesBaseUrl}?country=${country}&apiKey=${TESTING_API_KEY}`;
};

export default apiUrl;

//
//
// EXAMPLES:

// Top News from US = https://newsapi.org/v2/top-headlines?country=us&apiKey=61386a82d4274faf9ba1787cb253033c

// Top News from DE in CATEGORY business = https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=61386a82d4274faf9ba1787cb253033c

// Top News from GB by TERM basketball https://newsapi.org/v2/top-headlines?country=gb&q=basketball&apiKey=61386a82d4274faf9ba1787cb253033c

// Categories = business entertainment general health science sports technology
