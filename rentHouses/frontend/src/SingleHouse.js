import  React, { Component } from  'react';
import  HousesService  from  './HouseService';
import { useParams } from "react-router-dom";


const  housesService  =  new HousesService();

class  HousesList  extends  Component {

    constructor(props) {
	super(props);
	this.state  = {
            houses: [],
	    images: [],
	    landlord: [],
            nextPageURL:  ''
	};
	this.nextPage  =  this.nextPage.bind(this);
    }

    componentDidMount() {
	let  self  =  this;
	const { params } = this.props.match;
	housesService.getHouse(params.id).then(function (result) {
            console.log(result);
	    console.log("==============================");
	    console.log(result.landlord);
	    console.log("==============================");
            self.setState({ houses:  result, landlord: result.landlord, nextPageURL:  result.nextlink})
	});

	housesService.getHouseImages(params.id).then(function (result) {
	    console.log(result);
	    self.setState({ images: result})
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

	//    console.log(this.props);
	//  console.log(this.state.houses.landlord);
	const house = this.state.houses;
	const images = this.state.images;
	const landlord = this.state.landlord;
	return (
		<div>

	        <h4>{house.address} by {landlord.full_name}</h4>
		<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
		<div className="container">
		<div className="carousel-inner">
		<div className="carousel-item active">
		<img src={house.image} className="d-block img-fluid"  alt="First slide" />
		</div>
		{this.state.images.map( c =>
		<div className="carousel-item">

		<img src={c.images} alt="House Profile Image"  />

		</div>
		  )}
		</div>
		</div>

		<a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
		<span className="carousel-control-prev-icon" aria-hidden="true"></span>
		<span className="sr-only">Previous</span>
		</a>
		<a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
		<span className="carousel-control-next-icon" aria-hidden="true"></span>
		<span className="sr-only">Next</span>
		</a>
		</div>

               <div className="houseDescription">
               <p> {house.description} </p>
               </div>

<div className="infoTable">
<h3>Information Table</h3>
<table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">Number of rooms</th>
      <th scope="col">Number of people</th>
      <th scope="col">Garden</th>
      <th scope="col">Internet</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td scope="row">4</td>
      <td>5</td>
      <td>True</td>
      <td>True</td>
    </tr>
  </tbody>
</table>
</div>
		<address>
		<h4>Contact landlord: <a href={"mailto:" + landlord.email}>{landlord.full_name}</a></h4>
		</address>



	    </div>
        );
    }
}
export  default  HousesList;
