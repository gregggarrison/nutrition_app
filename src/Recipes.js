import React, { Component } from 'react'
import RSearchForm from './RSearchForm'
import RCreateRecipe from './RCreateRecipe'
import RRecipeIngredients from './RRecipeIngredients'

const recipesURL = "http://localhost:3000/recipes/"

class Recipes extends Component {

    state = {
        recipes: [],
        ingredients: [],
        title: "",
        instructions: "",
        image: ""
    }

    addToIngredients = (ingredient) => {
        this.setState({
            ingredients: [...this.state.ingredients, ingredient]
        })




        fetch("http://localhost:3000/ingredients", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(this.state.ingredients)
        })
    }

    addToRecipes = (event) => {
        event.preventDefault()
        let newRecipe = {
            title: this.state.title,
            image: this.state.image,
            ingredients: this.state.ingredients,
            instructions: this.state.instructions
        }
        console.log("newRecipe", newRecipe)
        this.setState({
            recipes: [...this.state.recipes, newRecipe]
        })

        fetch(recipesURL, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(newRecipe)
        })

    }



    handleChange = (event) => {
        let { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (

            <div>



                <div className="container">
                    <form className="new-recipe" onSubmit={this.addToRecipes}>
                        <h4>Create New Recipe</h4>
                        <div className='form-row'>
                            <label>Title</label>
                            <input className="form-control" type="text" name="title" placeholder="enter Recipe Name" onChange={this.handleChange}></input>
                            {/* <label>Ingredients </label> */}
                            {/* <input className="form-control" type="text" name="title" placeholder="enter Recipe Name" onChange={this.handleChange}></input> */}



                        </div>
                        <label>Img</label>
                        <input className="form-control" type="text" name="image" placeholder="enter Image URL" onChange={this.handleChange}></input>

                        {/* <textarea className="form-control" type="text" name="ingredients" placeholder="enter Recipe Name" value={this.state.ingredients.map(ingredient => ingredient.food_name) + " "} onChange={this.handleChange}></textarea> */}
                        <label>Instructions</label>

                        <textarea className="form-control" type="text" name="instructions" placeholder="Instructions" onChange={this.handleChange}></textarea>

                        <div className="ingredient-search">
                            <h4>Ingredients Search</h4>
                            <RSearchForm
                                recipes={this.state.recipes}
                                addToIngredients={this.addToIngredients}
                                ingredients={this.state.ingredients}
                                addToRecipes={this.addToRecipes}
                            />

                            <RRecipeIngredients
                                addToIngredients={this.addToIngredients}
                                ingredients={this.state.ingredients}
                            />

                        </div>
                        <input type="submit"></input>
                    </form>
                </div>
            </div>
        )
    }
}

export default Recipes