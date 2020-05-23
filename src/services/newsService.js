import axios from 'axios';

import apiUrl from '../utils/apiUrl';

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
