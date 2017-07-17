import React, { Component } from 'react';
import './styles/App.css';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Footer from './components/Footer/Footer';



class App extends Component {
  render() {
    return (
      <main className="site-wrapper">
          <Header />  

          <Search />

          <Footer />
      </main>
    );
  }
}

function mapStateToProps(state) {
  return state;
}
export default (mapStateToProps)(App);
