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
            self.setState({ houses:  result, landlord: result.landlord, nextPageURL:  result.nextlink})
	});

	housesService.getHouseImages(params.id).then(function (result) {
	    self.setState({ images: result})
	});

    }

    nextPage(){
	let  self  =  this;
	housesService.getHousessByURL(this.state.nextPageURL).then((result) => {
            self.setState({ houses:  result.data, nextPageURL:  result.nextlink})
	});
    }
    render() {
	const house = this.state.houses;
	const images = this.state.images;
	const landlord = this.state.landlord;
	return (
		<div>

		<span><h2>{house.address}</h2> by {landlord.full_name} </span>
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

		<div className="contactForm">
		<h2>Contact Form</h2>

		<form action="mailto:kiriakosnaiskes@gmail.com" method="post" enctype="text/plain">

		<input type="text" id="fname" name="firstname" placeholder="First Name" required />

		<input type="text" id="lname" name="lastname" placeholder="Last Name" required />

		<label for="arrival">Arrival</label>
		<input type="date" id="arrival" name="arrival" required />

		<label for="departure">Departure</label>
		<input type="date" id="departure" name="departure" required />

		<textarea id="comments" name="comments" placeholder="Comments"></textarea>

		<input type="submit" value="Send" />
		</form>
		</div>
	    </div>
        );
    }
}
export  default  HousesList;
