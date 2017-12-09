import React, { Component } from 'react';
import './styles/App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Router from './router';



class App extends Component {
  render() {
    return (
      <main className="site-wrapper">
          <Header />  
            {Router}
          <Footer />
      </main>
    );
  }
}

function mapStateToProps(state) {
  return state;
}
export default (mapStateToProps)(App);
