import React, {useState}   from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios   from 'axios';
import Header  from './components/Header';
import Global  from './pages/Global';
import Details from './pages/Details';

// toggle dark/light theme
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global-style';

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => { (theme === 'light') ? setTheme('dark') : setTheme('light'); }

  return (
    <>
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <GlobalStyles />

    <BrowserRouter>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="p-5 m-5 text-center">
        <Switch>
          <Route path="/:name" component={Details} addHandlerKey={true} />
          <Route path="/" component={Global} addHandlerKey={true} />
        </Switch>
      </main>
      <footer className="text-center w-100">
        <p>API provided by <a className="credits" href="https://restcountries.eu/">restcountries.eu</a></p>
      </footer>
    </BrowserRouter>

    </ThemeProvider>
    </>
  );
}

export default App;
