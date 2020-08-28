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
    var  self  =  this;
    housesService.getHouses().then(function (result) {
        console.log(result);
        self.setState({ houses:  result.data, nextPageURL:  result.nextlink})
    });
}

nextPage(){
    var  self  =  this;
    console.log(this.state.nextPageURL);
    housesService.getHousessByURL(this.state.nextPageURL).then((result) => {
        self.setState({ houses:  result.data, nextPageURL:  result.nextlink})
    });
}
render() {

    return (
        <div  className="houses--list">
            <table  className="table">
            <thead  key="thead">
            <tr>
                <th>#</th>
                <th>Owner Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Address</th>
                <th>Description</th>
            </tr>
            </thead>
            <tbody>
            {this.state.houses.map( c  =>
                <tr  key={c.pk}>
                <td>{c.pk}  </td>
                <td>{c.owner}</td>
                <td>{c.phone}</td>
                <td>{c.email}</td>
                <td>{c.address}</td>
                <td>{c.description}</td>
                <td>
                </td>
            </tr>)}
            </tbody>
            </table>
        </div>
        );
  }
}
export  default  HousesList;
