import React, { Component } from 'react'
import RSearchForm from './RSearchForm'

class Recipes extends Component {

    state = {
        recipes: [],
        ingredients: []
    }

    addToIngredients = (ingredient) => {
        this.setState({
            ingredients: [...this.state.ingredients, ingredient]
        })
    }

    render() {
        return (

            <div>
                <RSearchForm
                    recipes={this.state.recipes}
                    addToIngredients={this.addToIngredients}
                    ingredients={this.state.ingredients}
                />

                <div className="container">
                    <form className="new-recipe">
                        <h4>Create New Recipe</h4>
                        <label>Title</label>
                        <input className="form-control" type="text" name="title" placeholder="enter Recipe Name"></input>
                        <label>Img</label>
                        <input className="form-control" type="text" name="title" placeholder="enter Image URL"></input>
                        <label>Ingredients </label>
                        <textarea className="form-control" type="text" name="title" placeholder="enter Recipe Name"></textarea>
                        <label>Instructions</label>
                        <textarea className="form-control" type="text" name="title" placeholder="enter Recipe Name"></textarea>
                        <button>Save</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Recipes