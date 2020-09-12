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
		<div>

		<span><h2>{landlord.email}</h2> {landlord.full_name} </span>

	    </div>
        );
    }
}
export  default  SingleLandlord;
