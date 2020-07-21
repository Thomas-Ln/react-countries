import React, {useState}   from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios   from 'axios';
import Header  from './components/Header';
import General from './pages/General';
import Details from './pages/Details';

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './theme.css';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <main className="p-5 m-5 text-center">
        <Switch>
          <Route path="/:name" component={Details} addHandlerKey={true} />
          <Route path="/" component={General} addHandlerKey={true} />
        </Switch>
      </main>
      <footer className="text-center w-100">
        <p>API provided by <a href="https://restcountries.eu/">restcountries.eu</a></p>
      </footer>
    </BrowserRouter>
    </>
  );
}

export default App;
