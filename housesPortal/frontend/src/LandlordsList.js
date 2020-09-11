import  React, { Component } from  'react';
import  HousesService  from  './HouseService';

const  housesService  =  new HousesService();

class  LandlordsList  extends  Component {

constructor(props) {
    super(props);
    this.state  = {
        landlords: [],
        nextPageURL:  ''
    };
    this.nextPage  =  this.nextPage.bind(this);
}

componentDidMount() {
    let  self  =  this;
    housesService.getLandlords().then(function (result) {
        console.log(result);
        self.setState({ landlords:  result.data, nextPageURL:  result.nextlink})
    });
}

nextPage(){
    let  self  =  this;
    console.log(this.state.nextPageURL);
    housesService.getHousessByURL(this.state.nextPageURL).then((result) => {
        self.setState({ landlords:  result.data, nextPageURL:  result.nextlink})
    });
}

render() {
    console.log(this.props);
    return (

	    <div>
	    {this.state.landlords.map( c =>
		    <h1>{c.email}</h1>

	    )}
	    </div>
        );
  }
}
export  default  LandlordsList;
