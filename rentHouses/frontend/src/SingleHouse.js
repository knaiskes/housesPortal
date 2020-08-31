import  React, { Component } from  'react';
import  HousesService  from  './HouseService';
import { useParams } from "react-router-dom";

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
	const { params } = this.props.match;
	housesService.getHouse(params.id).then(function (result) {
            console.log(result);
            self.setState({ houses:  result, nextPageURL:  result.nextlink})
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
	//  console.log(this.state.houses.owner);
	const house = this.state.houses;
	return (

		<div>

		<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
		<div class="carousel-inner">

		<div class="carousel-item active">
		<img class="d-block w-10" src={house.image} alt="First slide" />
		</div>

		<div class="carousel-item">
		<img class="d-block w-100" src={house.image} alt="Second slide" />
		</div>



		</div>
		<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
		<span class="carousel-control-prev-icon" aria-hidden="true"></span>
		<span class="sr-only">Previous</span>
		</a>
		<a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
		<span class="carousel-control-next-icon" aria-hidden="true"></span>
		<span class="sr-only">Next</span>
		</a>
		</div>

		<p> {house.description} </p>
		<div classNameName="housesList" style={{display: 'flex'}}>
		</div>


		<table class="table table-light">
		<thead>
		<tr>
		<th scope="col">Owner</th>
		<th scope="col">Address</th>
		<th scope="col"></th>
		</tr>
		</thead>
		<tbody>
		<tr>
		<td>{house.owner}</td>
		<td>{house.address}</td>
		</tr>
		</tbody>
		</table>

	    </div>
        );
    }
}
export  default  HousesList;
