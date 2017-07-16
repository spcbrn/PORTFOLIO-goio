import React, { Component } from 'react';
import './styles/App.css';
import Header from './components/Header/Header';
import Search from './components/Search/Search';



class App extends Component {
  render() {
    return (
      <main className="site-wrapper">
           <Header />  

          <Search />

      </main>
    );
  }
}

function mapStateToProps(state) {
  return state;
}
export default (mapStateToProps)(App);
