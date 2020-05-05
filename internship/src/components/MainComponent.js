import React, { Component } from 'react';
import Menu from './MenuComponents';
import DishDetail from './DishDetailComponent';
import Contact from './ContactComponent';
import { DISHES } from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotion'; 
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import {Switch, Route, Redirect} from 'react-router-dom';
class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      dishes : DISHES,
      selectedDish:null,
      Comments: COMMENTS,
      promotion: PROMOTIONS,
      leaders: LEADERS
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
    const HomePage =() =>{
      return(
        <Home dish={this.state.dishes.filter((dish)=>dish.featured)[0]}
          promotion={this.state.promotion.filter((dish)=>dish.featured)[0]}
          leader={this.state.leaders.filter((dish)=>dish.featured)[0]}
        />
      );
    }
    return (
      <div >
       <Header></Header>
       <Switch>
         <Route path="/home" component={HomePage}/>
         <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />}/>
         <Route exact path ='/contactus' component={Contact}/>
         <Redirect to="/home"/>
       </Switch>
       {/* <Menu dishes = {this.state.dishes}
        onClick={ this.onDishSelect}/>
       <DishDetail 
       selectedDish={this.state.selectedDish}/> */}
       <Footer/>
      </div>
    );
  }
  
}

export default Main;
