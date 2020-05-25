import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// COMPONENTS
import Spinner from './components/Spinner/Spinner';
import Header from './components/Header/Header';

// STYLES
import { AppContainer, SpinnerContainer } from './app.styles';

// PAGES
const TopNewsPage = lazy(() => import('./pages/TopNews/TopNews'));
const CategoriesPage = lazy(() => import('./pages/Categories/Categories'));
const SearchPage = lazy(() => import('./pages/Search/Search'));
const SingleArticlePage = lazy(() =>
  import('./containers/SingleArticleContainer'),
);
const CategoryPage = lazy(() =>
  import('./pages/SingleCategory/SingleCategory'),
);

function App() {
  return (
    <Router>
      <AppContainer>
        <Header />

        <Suspense
          fallback={
            <SpinnerContainer>
              <Spinner />
            </SpinnerContainer>
          }>
          <Switch>
            {/* Top Level Pages */}
            <Route exact path='/' component={TopNewsPage} />
            <Route exact path='/categories' component={CategoriesPage} />
            <Route exact path='/search' component={SearchPage} />

            <Route
              exact
              path='/categories/:category'
              component={CategoryPage}
            />

            {/*  Single Article pages for each of above routes */}
            <Route exact path='/:articleId' component={SingleArticlePage} />
            <Route
              path='/categories/:category/:articleId'
              component={SingleArticlePage}
            />
            <Route path='/search/:articleId' component={SingleArticlePage} />
          </Switch>
        </Suspense>
      </AppContainer>
    </Router>
  );
}

export default App;
