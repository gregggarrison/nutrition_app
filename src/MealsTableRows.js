import React from 'react'

function MealsTableRows(props) {

    const { meal } = props

    function fixDate() {
        let mealDate = new Date(meal.created_at).toDateString()
        return mealDate
    }

    return (
        <tr>
            <td id="date">{fixDate()}</td>
            <td id="food">{meal.foodName}</td>
            <td id="qty">{meal.serveQty}</td>
            <td id="unit">{meal.serveUnit}</td>
            <td id="calories">{meal.calories}</td>
            <td id="total-fat">{meal.allFat}</td>
            <td id="protein">{meal.protein}</td>
            <td id="carbs">{meal.carbohydrates}</td>
            <td id="cholesterol">{meal.cholesterol}</td>
        </tr>
    )
}

export default MealsTableRows