import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom'

import './App.css';

import AllMeals from './AllMeals'
import TodayMeals from './TodayMeals';
import Nav from './staticComponents/Nav'
import Intro from './staticComponents/Intro'
import Header from './staticComponents/Header'
import MealPlan from './MealPlan'
import Summary from './Summary'
import TodayMealsTable2 from './TodayMealsTable2'
import Recipes from './Recipes'
import Login from './Login'

const mealsURL = "http://localhost:3000/meals/"
const key = process.env.REACT_APP_WEATHER_API_KEY
const weatherURL = "http://api.weatherstack.com/current?units=f&query=Denver&access_key=" + key

class App extends Component {

  state = {
    meals: [],
    todayMeals: [],
    date: "",
    weather: [],
    recipes: []
  }

  componentDidMount() {
    this.getDate()
    this.getWeather()
    fetch(mealsURL)
      .then(response => response.json())
      .then(meals => this.setState({ meals }))
      .then(this.filterMealDate)

    fetch(weatherURL)
      .then(response => response.json())
      .then(weather => this.setState({ weather }))
  }

  getWeather = () => {
    fetch(weatherURL)
      .then(response => response.json())
      .then(weather => this.setState({ weather }))
  }

  addToMeals = (meal) => {
    console.log(meal)
    this.setState({
      meals: [...this.state.meals, meal]
    })
  }

  addToTodayMeals = (meal) => {
    console.log(meal)
    this.setState({
      todayMeals: [...this.state.todayMeals, meal]
    })
  }

  deleteMeal = (meal) => {
    let newMeals = this.state.meals.filter(badMeal => meal.id !== badMeal.id)
    let newTodayMeals = this.state.todayMeals.filter(badMeal => meal.id !== badMeal.id)
    this.setState({
      meals: newMeals,
      todayMeals: newTodayMeals
    })

    fetch(mealsURL + meal.id, {
      method: "DELETE"
    })
  }

  getDate = () => {
    const date = new Date().toDateString()
    this.setState({ date })
  }

  filterMealDate = () => {
    let currentMeals = this.state.meals.filter(meal => {
      let mealDate = new Date(meal.created_at).toDateString()
      let today = new Date().toDateString()
      return mealDate === today
    })
    this.setState({ todayMeals: currentMeals })
  }

  tallyCalories = () => {
    const cal = this.state.todayMeals.calories
    return cal
  }

  tallyFat = () => {
    const fat = this.state.todayMeals.allFat
    return fat
  }

  tallyCalories = () => {
    const cal = this.state.todayMeals.calories
    return cal
  }

  render() {

    return (
      <div className="App">
        <div className="container">
          <Header date={this.state.date} weather={this.state.weather} />
          <Nav date={this.state.date} />

          <Route exact path="/"
            render={(routerProps) =>
              <Intro />}
          />
          <Route exact path="/login"
            render={(routerProps) =>
              <Login />}
          />

          <Route exact path="/all-meals"
            render={(routerProps) =>
              <AllMeals
                meals={this.state.meals}
                date={this.state.date}
              />}
          />

          <Route exact path="/today-meals2"
            render={(routerProps) =>
              <TodayMealsTable2
                meals={this.state.meals}
                calories={this.state.todayMeals.calories}
                tallyCalories={this.tallyCalories}
                tallyFat={this.tallyFat}
                date={this.state.date}
                deleteMeal={this.deleteMeal}

              />}
          />

          <Route exact path="/meal-plan"
            render={(routerProps) =>

              <>
                <MealPlan
                  addToMeals={this.addToMeals}
                  addToTodayMeals={this.addToTodayMeals}
                  todayMeals={this.state.todayMeals}
                  date={this.state.date}
                  tallyCalories={this.tallyCalories}
                  tallyFat={this.tallyFat}
                />

                <TodayMeals
                  todayMeals={this.state.todayMeals}
                  calories={this.state.todayMeals.calories}
                  tallyCalories={this.tallyCalories}
                  tallyFat={this.tallyFat}
                  date={this.state.date}
                  deleteMeal={this.deleteMeal}
                />

                <Summary
                  todayMeals={this.state.todayMeals}
                  tallyCalories={this.tallyCalories}
                  tallyFat={this.tallyFat}
                />

              </>}
          />

          <Route exact path="/recipes"
            render={(routerProps) =>
              <Recipes />}
          />


          
        </div >
      </div>
    );
  }
}

export default withRouter(App);
