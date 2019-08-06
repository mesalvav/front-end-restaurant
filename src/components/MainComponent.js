import React, { Component } from 'react';

import Menu from './MenuComponent';

import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import DishDetail from './DishdetailComponent';

import { Switch, Route, Redirect } from 'react-router-dom';

import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

import DishService from '../services/dishService';
import AuthService from '../services/AuthService';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      readyAllDishes: false,
      currentlyLoggedIn: null,
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    };
    this.dishservice = new DishService();
    this.authservice = new AuthService();
  }
  
  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
    console.log("==== was clicked. line 19 id ===> "  );
  }

  componentDidMount(){
    this.dishservice.getAllDishes()
    .then((datum)=>{
      //console.log(datum[0].comments);
      //datum[0].comments.map(eachComment=>{ console.log(eachComment); return true;});

      this.setState({dishes: datum, readyAllDishes: true});
    })
    .catch(err=>{console.log("dish service call " + err)})
  }

  getCurrentlyLoggedInUser = () =>{
    this.authservice.currentUser()
    .then((theUser)=>{
      this.setState({currentlyLoggedIn: theUser})
      console.log("getCurrentlyLoggedInUser=>  " + JSON.stringify(this.state.currentlyLoggedIn));
    })
    .catch((err)=>{
      console.log("err getCurrentlyLoggedInUser  " + err)
      this.setState({currentlyLoggedIn: null})
    })
  }

  render() {

    const HomePage = () => {
      return(
          <Home 
              dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }
 
    const DishWithId = ({match}) => {
      // <DishDetail dish={this.state.dishes.filter((dish) => dish._id === parseInt(match.params.dishId,10))[0]} 

      return(
          <DishDetail dish={this.state.dishes.filter((dish) => dish._id === match.params.dishId)[0]} 
            // comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
             />
      );
    };
    
    return (
      <div>
         
        <Header 
            getCurrentlyLoggedInUser={this.getCurrentlyLoggedInUser}
            currentlyLoggedIn={this.state.currentlyLoggedIn}
            serviceLogMeOut={this.authservice.logout}
            />

        <Switch>
            <Route path='/home' component={HomePage} />
            <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
            <Route path='/menu/:dishId' component={DishWithId} />
            <Route exact path='/contactus' component={Contact} />} />
            <Redirect to="/home" />
        </Switch>

        <Footer/>
      </div>
    );
  }
}

export default Main;