import React from 'react';
import {
  Switch,
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';

import HomePage from './page/home';
import Login from './page/login';
import Register from './page/register';
import PageDataObject from './page/pageDataObject';
import pageWithParam from './page/pageWithParams';
import Currency from './page/pageCurrency';
import PokemonDetail from './page/pokemonDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/Login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/page-data-object" component={PageDataObject} />
          <Route path="/product/:nama" component={pageWithParam} />
          <Route path="/mata-uang/:name" component={Currency} />
          <Route path="/pokemon-detail/:namapokemon" component={PokemonDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
