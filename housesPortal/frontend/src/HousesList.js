import  React, { Component } from  'react';
import  HousesService  from  './HouseService';

const  housesService  =  new HousesService();

class  HousesList  extends  Component {

constructor(props) {
    super(props);
    this.state  = {
        houses: [],
        nextPageURL:  ''
    };
    this.nextPage  =  this.nextPage.bind(this);
}

componentDidMount() {
    let  self  =  this;
    housesService.getHouses().then(function (result) {
        self.setState({ houses:  result.data, nextPageURL:  result.nextlink})
    });
}

nextPage(){
    let  self  =  this;
    housesService.getHousessByURL(this.state.nextPageURL).then((result) => {
        self.setState({ houses:  result.data, nextPageURL:  result.nextlink})
    });
}
render() {
    return (
	    <div>
	    {this.state.houses.map( c =>


		    <div className="card">
		    <span><h2>{c.address}</h2> by <a href={"landlords/" + c.id}>
		    {c.landlord.full_name}</a> </span>
		    <img src={c.image} alt="House Profile Image"  />
		    <p>{c.description}</p>
		    <div className="container">
		    <a href={"/houses/" + c.id} className="btn btn-primary">See More</a>
		    </div>
		    </div>

	    )}
	    </div>
        );
  }
}
export  default  HousesList;
