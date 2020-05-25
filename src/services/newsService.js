import axios from 'axios';

import apiUrl from '../utils/apiUrl';

// TOP NEWS
export const fetchTopNewsService = async (country) => {
  try {
    const response = await axios(apiUrl(country));
    const { articles } = response.data;

    return articles;
  } catch (error) {
    return Promise.reject({
      status: error.response.status,
      data: error.response.data,
    });
  }
};

// CATEGORIES News
export const fetchTopNewsByCategoryService = async (country, category) => {
  try {
    // Sending as object in order to recognize whether it is category or search in apiUrl util
    const categoryObj = { category };

    const response = await axios(apiUrl(country, categoryObj));
    const { articles } = response.data;

    return articles;
  } catch (error) {
    return Promise.reject({
      status: error.response.status,
      data: error.response.data,
    });
  }
};

// SEARCH TERM News
export const fetchTopNewsByTermService = async (country, searchTerm) => {
  try {
    // Sending as object in order to recognize whether it is category or search in apiUrl util
    const searchTermObj = { searchTerm };

    const response = await axios(apiUrl(country, searchTermObj));
    const { articles } = response.data;

    return articles;
  } catch (error) {
    return Promise.reject({
      status: error.response.status,
      data: error.response.data,
    });
  }
};
