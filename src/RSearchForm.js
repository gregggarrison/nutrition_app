import React, { Component } from 'react'
import RMealsTable from './RMealsTable'



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

    clearForm = () => {
        document.getElementById('search-form').reset();
        this.setState({ meal: {} })
    }

    render() {

        return (
            <>
                <div className="form-container">
                    <form id="search-form" >
                        <div className="label-container">
                            <input type="text" placeholder="food/beverage search" name="search" onChange={this.handleChange}></input>
                            <button onClick={this.handleSubmit} id="search">Search</button>
                        </div>
                    </form>
                </div>

                <RMealsTable
                    meal={this.state.meal}
                    ingredient={this.state.meal}
                    addToRecipes={this.props.addToRecipes}
                    addToIngredients={this.props.addToIngredients}
                    clearForm={this.clearForm}
                />
            </>
        )
    }
}

export default RSearchForm