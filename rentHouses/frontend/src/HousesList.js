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

    return (
	    <div classNameName="housesList" style={{display: 'flex'}}>
	    {this.state.houses.map( c =>
		    <div class="card" style={{width: '18rem', margin: '2rem'}}>
		    <img class="card-img-top" src={require('./test.png')} alt="Card image cap" />
  <div class="card-body">
		    <p classNameName="card-text"> {c.address} </p>
		    <a href="#" className="btn btn-primary">See More</a>
  </div>
</div>

	    )}
	    </div>
        );
  }
}
export  default  HousesList;
