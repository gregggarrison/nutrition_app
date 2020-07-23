import React, { Component } from 'react'
import MealsTable from './MealsTable'

class RSearchForm extends Component {

    state = {
        query: "",
        meal: {}
    }

    handleChange = (event) => {
        const query = event.target.value
        this.setState({ query })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.clearForm()

        const searchURL = `https://trackapi.nutritionix.com/v2/search/instant?query=${this.state.query}&detailed=true`
        fetch(searchURL, {
            method: "GET",
            headers: {
                "x-app-id": process.env.REACT_APP_API_ID,
                "x-app-key": process.env.REACT_APP_API_KEY
            }
        }).then(response => response.json())
            .then(meal => this.setState({
                meal: meal.common[0]
            }))
    }
    //Not active but may want to use for later
    handleData = () => {
        if (this.state.meal) {
            let newMealArr = { ...this.state.meal }
            let newCommon = newMealArr.meal.common[0]
            let newBranded = newMealArr.meal.branded[0]
            let newCombined = [{ ...newCommon }, newBranded]
            this.setState({ meal: newCombined })
        }
    }

    clearForm = () => {
        document.getElementById('search-form').reset();
        this.setState({ meal: {} })
    }


    showMeals = () => {}

    render() {

        return (
            <>
                <div className="form-container">
                    <form id="search-form" onSubmit={this.handleSubmit}>
                        <div className="label-container">
                            <input type="text" placeholder="food/beverage search" name="search" onChange={this.handleChange}></input>
                            <input type="submit" id="search"></input>
                        </div>
                    </form>
                </div>

                <MealsTable
                    meal={this.state.meal}
                    addToMeals={this.props.addToMeals}
                    addToTodayMeals={this.props.addToTodayMeals}
                    clearForm={this.clearForm}
                    todayMeals={this.props.todayMeals}
                />
            </>
        )
    }
}

export default RSearchForm