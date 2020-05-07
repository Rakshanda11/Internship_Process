import React, { Component } from 'react';
import Menu from './MenuComponents';
import DishDetail from './DishDetailComponent';
import Contact from './ContactComponent'; 
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import About from './AboutUs';
import {connect} from 'react-redux';

const mapStateToProps =(state) => {
    return{
      dishes: state.dishes,
      leaders: state.leaders,
      comments: state.comments,
      promotion: state.promotions,
    }
}

class Main extends Component {
  constructor(props){
    super(props);
  }

  onDishSelect = (dishId) => {
    console.log("in dish");
    console.log(dishId)
    this.setState({
      selectedDish: dishId
    })
  }
  DishWithId = ({match}) =>{
    return(
      <DishDetail dish={this.props.dishes.filter((dish)=>dish.dishId === parseInt(match.params.dishId,10))[0]}
      comments={this.props.Comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}/>
    );
  }
  
  render(){
    const HomePage =() =>{
      return(
        <Home dish={this.props.dishes.filter((dish)=>dish.featured)[0]}
          promotion={this.props.promotion.filter((dish)=>dish.featured)[0]}
          leader={this.props.leaders.filter((dish)=>dish.featured)[0]}
        />
      );
    }
    return (
      <div >
       <Header></Header>
       <Switch>
         <Route path="/home" component={HomePage}/>
         <Route exact path = "/aboutus" component={()=> <About leaders={this.props.leaders}/>}/>
         <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />}/>
         <Route path = "/menu/:dishId" component={this.DishWithId}></Route>
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

export default withRouter(connect(mapStateToProps)(Main));
