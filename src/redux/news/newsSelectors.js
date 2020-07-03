import { createSelector } from 'reselect';

const selectNewsState = (state) => state.news;

export const selectCountry = createSelector(
  [selectNewsState],
  (newsState) => newsState.country,
);

export const selectTopNews = createSelector(
  [selectNewsState],
  (newsState) => newsState.topNewsArticles,
);

export const selectTopNewsByTerm = createSelector(
  [selectNewsState],
  (newsState) => newsState.topNewsByTermArticles,
);

// export const selectTopNewsByCategories = (category) =>
//   createSelector(
//     [selectNewsState],
//     (newsState) => newsState.topNewsByCategories[category],
//   );
