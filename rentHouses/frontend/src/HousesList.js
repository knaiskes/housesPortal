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

            <div  classNameName="houses--list">

            <table  classNameName="table">
            <thead  key="thead">
            <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {this.state.houses.map( c  =>
                <tr>
                <td>  </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                    </td>
		    <div className="card" >  <div className="card-body">
		    <img className="card-img-top" src={require('./test.png')} alt="Card image cap" />
    <h5 className="card-title">Card title</h5>
		    <p className="card-text">{c.owner}</p>
		    <a href="#" className="btn btn-primary">See More</a>
  </div>
</div>
            </tr>)}
            </tbody>
            </table>
        </div>
        );
  }
}
export  default  HousesList;
