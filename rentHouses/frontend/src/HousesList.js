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
        console.log(result);
        self.setState({ houses:  result.data, nextPageURL:  result.nextlink})
    });
}

nextPage(){
    let  self  =  this;
    console.log(this.state.nextPageURL);
    housesService.getHousessByURL(this.state.nextPageURL).then((result) => {
        self.setState({ houses:  result.data, nextPageURL:  result.nextlink})
    });
}
render() {
    console.log(this.props);
    return (
	    <div>
	    {this.state.houses.map( c =>


		    <div className="card">
		    <h2>{c.owner.full_name}</h2>
		    <img src={c.image} alt="House Profile Image"  />
		    <div className="container">
		    <h4><b>{c.address}</b></h4>
		    <p>{c.owner.full_name}</p>
		    <a href={"/houses/" + c.id} className="btn btn-primary">See More</a>
		    </div>
		    </div>

	    )}
	    </div>
        );
  }
}
export  default  HousesList;
