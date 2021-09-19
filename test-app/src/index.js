import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppFooter from './AppFooter';
import AppContent from './AppContent';
import AppHeader from './AppHeader';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';


class App extends Component {

  render() {
    return(
      <div className = "app">
        <AppHeader title = "Cool app" />
        <AppContent />
        <AppFooter />
      </div>
    );
  }

}


ReactDOM.render(<App />, document.getElementById('root'));