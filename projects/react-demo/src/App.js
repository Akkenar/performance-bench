import React, { Component } from 'react';
import HeaderContainer from './header/HeaderContainer';

import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginPageContainer from './login-page/LoginPageContainer';
import HomePage from './home-page/HomePage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <HeaderContainer />
          </header>
          <main>
            <Route exact path="/" component={HomePage} />
            <Route path={'/login'} component={LoginPageContainer} />
            <Route path={'/home'} component={HomePage} />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
