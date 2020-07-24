import React, { useState } from 'react'
import NutritionLabel from './NutritionLabel'


function RMealsTable(props) {
    const { meal, addToMeals, addToTodayMeals } = props

    const [isActive, setActive] = useState(true)
    const [serveQty, setServQty] = useState(1)

    const toggleClass = () => {
        setActive(!isActive)
    }

    function handleChange(event) {
        if(meal.serving_qty ===1){
            setServQty(event.target.value)
        }
    }

    function resetState() {
        setServQty(1)
    }

    function findNutrient(id) {
        if (meal.full_nutrients) {
            return meal.full_nutrients.find(nutrient => nutrient["attr_id"] === id)
        }
    }

    function toNumberUnits(nutrient, decimals) {
        const amount = nutrient ? nutrient.value : 0
        return parseFloat(amount).toFixed(decimals)
    }

    const fiber = findNutrient(291)
    const lFiber = toNumberUnits(fiber, 0)

    const calories = findNutrient(208)
    const lCalories = toNumberUnits(calories, 0)

    const totalFat = findNutrient(204)
    const lTotalFat = toNumberUnits(totalFat, 0)

    const protein = findNutrient(203)
    const lProtein = toNumberUnits(protein, 0)

    const carbs = findNutrient(205)
    const lCarbs = toNumberUnits(carbs, 0)

    const cholest = findNutrient(601)
    const lCholest = toNumberUnits(cholest, 0)

    // const sodium = findNutrient(307)
    // const lSodium = toNumberUnits(sodium, 1)

    // const sugar = findNutrient(269)
    // const lSugar = toNumberUnits(sugar, 1)
    // const sFat = findNutrient(606)
    // const transFat = findNutrient(605)


    function handleClick(event) {
        props.addToIngredients(props.ingredient)

        props.clearForm()
        resetState()
    }

    function handleClear(event) {
        props.clearForm()
    }

    return (
        <div>
            {meal.tag_id
                ?
                <div>
                    <table className="table table-sm" id="results-table">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Food</th>
                                <th scope="col">Qty</th>
                                <th scope="col">Unit</th>
                                <th scope="col">Calories</th>
                                <th scope="col">Total Fat</th>
                                <th scope="col">Protein</th>
                                <th scope="col">Fiber</th>
                                <th scope="col">Carbs</th>
                                <th scope="col">Cholesterol</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <img onClick={toggleClass} className="fetch-img" alt="" src={meal.photo.thumb}></img>
                                </td>

                                <td id="food">{meal.food_name}</td>


                                <td>
                                    <input
                                        id="search-qty"
                                        type='number'
                                        min={meal.serving_qty}
                                        value={meal.serving_qty === 1 ? serveQty : meal.serving_qty}
                                        onChange= { handleChange }>
                                    </input>
                                </td>
                                <td id="unit">{meal.serving_unit}</td>
                                <td id="calories">{parseInt(lCalories * serveQty)}</td>
                                <td id="total-fat">{parseInt(lTotalFat * serveQty)}</td>
                                <td id="protein">{parseInt(lProtein * serveQty)}</td>
                                <td id="fiber">{parseInt(lFiber * serveQty)}</td>
                                <td id="carbs">{parseInt(lCarbs * serveQty)}</td>
                                <td id="cholesterol">{parseInt(lCholest * serveQty)}</td>
                                <td>
                                    <button className="save-button" onClick={handleClick}>Save</button>
                                    <button className="clear-button" onClick={handleClear}>Clear</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div className={isActive ? "row mb-2 hidden" : "row mb-2"}>
                        <div className="col-md-6">
                            <img className="search-img"
                                alt=""
                                src={meal.photo.thumb}
                            >
                            </img>
                        </div>
                        <div className="col-md-6">
                            <NutritionLabel meal={props.meal} qty={serveQty} />
                        </div>
                    </div>
                </div>

                : null
            }
        </div>
    )
}

export default RMealsTable