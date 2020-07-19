import React, { useState } from 'react'
import NutritionLabel from './NutritionLabel'

function MealsTable(props) {
    const { meal, addToMeals, addToTodayMeals } = props

    const [isActive, setActive] = useState(true)
    const toggleClass = () => {
        setActive(!isActive)
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
    const lFiber = toNumberUnits(fiber, 1)

    const calories = findNutrient(208)
    const lCalories = toNumberUnits(calories, 1)

    const totalFat = findNutrient(204)
    const lTotalFat = toNumberUnits(totalFat, 1)

    const protein = findNutrient(203)
    const lProtein = toNumberUnits(protein, 1)

    const carbs = findNutrient(205)
    const lCarbs = toNumberUnits(carbs, 1)

    const cholest = findNutrient(601)
    const lCholest = toNumberUnits(cholest, 1)

    // const sodium = findNutrient(307)
    // const lSodium = toNumberUnits(sodium, 1)

    // const sugar = findNutrient(269)
    // const lSugar = toNumberUnits(sugar, 1)
    // const sFat = findNutrient(606)
    // const transFat = findNutrient(605)

    function handleClick(event) {
        const mealData = {
            date: new Date().toDateString(),
            foodName: meal.food_name,
            serveQty: meal.serving_qty,
            serveUnit: meal.serving_unit,
            calories: lCalories,
            allFat: lTotalFat,
            protein: lProtein,
            carbohydrates: lCarbs,
            cholesterol: lCholest
        }
        addToTodayMeals(mealData)
        addToMeals(mealData)

        fetch('http://localhost:3000/meals', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(mealData)
        })

        props.clearForm()
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
                                <td id="qty">{meal.serving_qty}</td>
                                <td id="unit">{meal.serving_unit}</td>
                                <td id="calories">{lCalories}</td>
                                <td id="total-fat">{lTotalFat}</td>
                                <td id="protein">{lProtein}</td>
                                <td id="fiber">{lFiber}</td>
                                <td id="carbs">{lCarbs}</td>
                                <td id="cholesterol">{lCholest}</td>
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
                            <NutritionLabel meal={props.meal} />
                        </div>
                    </div>
                </div>

                : null
            }
        </div>
    )
}



export default MealsTable