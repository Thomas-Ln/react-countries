import React, {useState}                from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
// contexts
import CountryContextProvider           from './contexts/CountryContext';
import SearchContextProvider            from './contexts/SearchContext';
import FilterContextProvider            from './contexts/FilterContext';
// components
import Header                           from './components/Header';
import Nav                              from './components/Nav';
import Footer                           from './components/Footer';
import Global                           from './pages/Global';
import Details                          from './pages/Details';
// toggle dark/light theme
import { ThemeProvider }                from 'styled-components';
import { lightTheme, darkTheme }        from './theme';
import { GlobalStyles }                 from './global-style';
//css
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
        <CountryContextProvider>
        <FilterContextProvider>
        <SearchContextProvider>
          <main className="p-md-5 mx-md-5 text-center">
            <Nav />
            <Switch>
              <Route path="/:country" component={Details} addHandlerKey={true} />
              <Route path="/" component={Global} addHandlerKey={true} />
            </Switch>
          </main>
        </SearchContextProvider>
        </FilterContextProvider>
        </CountryContextProvider>
      <Footer/>
    </BrowserRouter>

    </ThemeProvider>
    </>
  );
}

export default App;
