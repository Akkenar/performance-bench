import React, { Component } from 'react';
import Header from './header/Header';

import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginPage from './login-page/LoginPage';
import HomePage from './home-page/HomePage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Header />
          </header>
          <main>
            <Route exact path="/" component={HomePage} />
            <Route path={'/login'} component={LoginPage} />
            <Route path={'/home'} component={HomePage} />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
