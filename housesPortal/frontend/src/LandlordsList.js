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
        self.setState({ landlords:  result.data, nextPageURL:  result.nextlink})
    });
}

nextPage(){
    let  self  =  this;
    housesService.getHousessByURL(this.state.nextPageURL).then((result) => {
        self.setState({ landlords:  result.data, nextPageURL:  result.nextlink})
    });
}

render() {
    return (
	    <div className="landlordCard">
	    <h2>Available Landlords</h2>
	    {this.state.landlords.map( c =>
		    <div className="card">
		    <h3>{c.full_name}</h3>
		    <img className="card-img-top" src={c.profile_image} alt="Card image cap" />
		    <div className="card-body">
		    <p className="card-text">{c.about_me}</p>
		    <a href={"/landlords/" + c.id} className="btn btn-primary">See More</a>
                    </div>
		    </div>

	    )}
	</div>
        );
  }
}
export  default  LandlordsList;
