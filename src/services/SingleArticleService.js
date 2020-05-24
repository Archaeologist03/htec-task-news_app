// If Articles are empty - returns back pathname of previous page.
// E.G. - /search/1 -> /search/
export const SingleArticleOutterPathname = (path, articleId, articles) => {
  if (!articles) {
    const pathname = path;
    const outterPathname = pathname.replace(`${articleId}`, '');

    return outterPathname;
  }
};

// Find Article by ID
export const FindArticleById = (articles, articleId) => {
  const article = articles && articles[articleId];

  return article;
};
