import  React, { Component } from  'react';
import  HousesService  from  './HouseService';
import { useParams } from "react-router-dom";


const  housesService  =  new HousesService();

class  SingleLandlord  extends  Component {

    constructor(props) {
	super(props);
	this.state  = {
	    landlord: [],
            nextPageURL:  ''
	};
	this.nextPage  =  this.nextPage.bind(this);
    }

    componentDidMount() {
	let  self  =  this;
	const { params } = this.props.match;
	housesService.getLandlord(params.id).then(function (result) {
            console.log(result);
            self.setState({ landlord:  result, nextPageURL:  result.nextlink})
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

	const landlord = this.state.landlord;
	return (
		<div className="singleLandlord">
		<h2>{landlord.full_name}</h2>
		<img src={require('./test.png')} alt="Landlord Image" />
		<p>{landlord.about_me}</p>
		<h1>Information Table</h1>
		<table class="table table-striped">
		<thead>
		</thead>
		<tbody>
		<tr>
		<th scope="row">Full Name</th>
		<td>{landlord.full_name}</td>
		</tr>
		<tr>
		<th scope="row">E-mail</th>
		<td>{landlord.email}</td>
		</tr>
		<tr>
		<th scope="row">Phone Number</th>
		<td>{landlord.phone}</td>
		</tr>
		</tbody>
		</table>
	    </div>
        );
    }
}
export  default  SingleLandlord;
