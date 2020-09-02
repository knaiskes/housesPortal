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

		<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
		<ol className="carousel-indicators">
		<li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
		<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
		<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
		</ol>
		<div className="container">
		<div className="carousel-inner">
		<div className="carousel-item active">
		<img src={house.image} className="d-block img-fluid"  alt="First slide" />
		</div>
		<div className="carousel-item">
		<img src={require('./hackerrank.png')}  className="d-block img-fluid" alt="Second slide" />
		</div>
		<div className="carousel-item">
		<img src={house.image} className="d-block img-fluid" alt="Third slide" />
		</div>
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




		<table>
		<thead>
		<tr>
		<th>Owner</th>
		<th>Address</th>
		<th></th>
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
