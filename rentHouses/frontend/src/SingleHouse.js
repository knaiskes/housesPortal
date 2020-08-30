import  React, { Component } from  'react';
import  HousesService  from  './HouseService';
import "react-router-dom";
import { useParams } from "react-router-dom";
const  housesService  =  new HousesService();

class  SingleHouse  extends  Component {

constructor(props) {
    super(props);
}

componentDidMount() {
    let  self  =  this;
    const { params } = this.props.match;
    housesService.getHouse(params.id).then(function (result) {
        console.log(result);
        self.setState({ houses:  result.data, nextPageURL:  result.nextlink})
    });
}

    render() {
	console.log(this.props);
	return (
	    null
	);
  }
}
export  default  SingleHouse;
