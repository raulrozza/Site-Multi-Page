import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Loading from '../components/Loading';
// Home page should not be lazy loaded
import Home from '../pages/Home';

const About = lazy(() => import('../pages/About'));
const Contact = lazy(() => import('../pages/Contact'));
const Portfolio = lazy(() => import('../pages/Portfolio'));
const Services = lazy(() => import('../pages/Services'));

 /*
    The object controls the web page's routes.
*/
const Routes: React.FC = () => {

  return (
  <>
    <Navbar />
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
        <Route path="/portifolio" component={Portfolio} />
        <Route path="*" exact>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Suspense>
  </>
)};

export default Routes;
