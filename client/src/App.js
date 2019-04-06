import React, { Component } from 'react';
import './App.css';
 import AppNavbar from './components/AppNavbar'
import ShoppingList from './components/ShoppingList';
// import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css';
class App extends Component {
  render() {
    return (
      <div className="App">
<AppNavbar/>
          <ShoppingList/>
      </div>
    );
  }
}

export default App;
