import React, {Component} from 'react'

class RCreateRecipe extends Component{

    render(){
        return(

            <div className="container">
            <form className="new-recipe" onSubmit={this.addToRecipes}>
                <h4>Create New Recipe</h4>
                <label>Title</label>
                <input className="form-control" type="text" name="name" placeholder="enter Recipe Name" onChange={this.handleChange}></input>
                <label>Img</label>
                <input className="form-control" type="text" name="image" placeholder="enter Image URL" onChange={this.handleChange}></input>

                <label>Ingredients </label>
                <textarea className="form-control" type="text" name="ingredients" placeholder="enter Recipe Name" value={this.state.ingredients.map(ingredient => ingredient.food_name) + " "} onChange={this.handleChange}></textarea>
                <label>Instructions</label>


                <textarea className="form-control" type="text" name="title" placeholder="enter Recipe Name" onChange={this.handlechange}></textarea>
                <button>Save</button>
            </form>
        </div>
        )
    }
}

export default RCreateRecipe