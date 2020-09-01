import React from 'react';
import { observer } from 'mobx-react';
import { Switch, Route, Router } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import { history } from './router/routerStore';
import { css } from 'emotion';
import Hamburger from './components/Layout/Hamburger';
import { useWindowSize } from 'react-use';
import { breakpoints } from './assets';

interface Props {
  repos: Array<object>;
}

const mainContentStyle = css({
  flexGrow: 1,
});

const ApplicationRouter = observer((props: Props) => {
  const { width } = useWindowSize();

  return (
    <Router history={history}>
      <Navbar />
      <div className={mainContentStyle}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route
            exact
            path='/projects/:id'
            component={() => <Projects repos={props.repos} />}
          />
        </Switch>
      </div>
      <Footer />
      {width > breakpoints[1] ? '' : <Hamburger />}
    </Router>
  );
});

export default ApplicationRouter;
