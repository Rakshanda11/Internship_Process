import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponents';
import DishDetail from './DishDetailComponent';
import { DISHES } from '../shared/dishes';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      dishes : DISHES,
      selectedDish:null
    }
  }
  onDishSelect = (dishId) => {
    console.log("in dish");
    console.log(dishId)
    this.setState({
      selectedDish: dishId
    })
  }
  
  render(){
    return (
      <div >
       <Navbar dark color = "primary">
         <div className = "container">
           <NavbarBrand href = '/'>Ristorante Con Fusion</NavbarBrand>
         </div>
       </Navbar>
       <Menu dishes = {this.state.dishes}
        onClick={ this.onDishSelect}/>
       <DishDetail selectedDish={this.state.selectedDish}/>
      </div>
    );
  }
  
}

export default Main;
