import React from 'react';
import { Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import OrderBuilder from "./containers/OrderBuilder/OrderBuilder";
import Orders from './containers/Orders/Orders';

const App = () => (
  <Layout>
    <Switch>
      <Route path="/" exact component={OrderBuilder} />
      <Route path="/orders" exact component={Orders} />
      <Route render={() => <h1>Not found</h1>}/>
    </Switch>
  </Layout>
);

export default App;