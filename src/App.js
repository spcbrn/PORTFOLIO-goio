import React, { Component } from 'react';
import './styles/App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// import Search from './components/Search/Search';
// import IATA from './components/IATA/IATA';
import Router from './router';



class App extends Component {
  render() {
    return (
      <main className="site-wrapper">
          <Header />  
            {Router}
            {/* <Search />   */}
            {/* <IATA />  */}

          <Footer />
      </main>
    );
  }
}

function mapStateToProps(state) {
  return state;
}
export default (mapStateToProps)(App);
