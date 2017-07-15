import React, { Component } from 'react';
import './styles/App.css';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Results from './components/Results/Results';


class App extends Component {
  render() {
    return (
      <main >
         <Header /> 
        <div className="main-wrapper">    

        <Search />
        <Results />
        </div>
      </main>
    );
  }
}

function mapStateToProps(state) {
  return state;
}
export default (mapStateToProps)(App);
