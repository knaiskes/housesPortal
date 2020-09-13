import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'

import  HousesList from './HousesList'
import SingleHouse from './SingleHouse'
import  LandlordsList from './LandlordsList'
import  SingleLandlord from './SingleLandlord'
import './App.css';
import NavBar from './navbar'
import Footer from './footer'


class App extends Component {
    render() {

      return (
	      <div className="App">
	      <NavBar />
	      <BrowserRouter>
	      <Route path="/" exact component={HousesList} />
	      <Route path="/houses/:id" exact component={SingleHouse} />
	      <Route path="/landlords/" exact component={LandlordsList} />
	      <Route path="/landlords/:id" exact component={SingleLandlord} />


	    </BrowserRouter>

	    <Footer/>
	    </div>


    );
  }
}

export default App;
