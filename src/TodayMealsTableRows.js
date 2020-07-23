import React from 'react'

function TodayMealsTableRows(props) {

    function handleClick(event) {
        console.log('it clicked')
        props.deleteMeal(props.meal)
    }

    return (
        <>
            {props.meal.foodName ?

                <tr>
                    <td id="food">{props.meal.foodName}</td>
                    <td id="qty">{props.meal.serveQty}</td>
                    <td id="unit">{props.meal.serveUnit}</td>
                    <td id="calories">{props.meal.calories}</td>
                    <td id="total-fat">{props.meal.allFat}</td>
                    <td id="protein">{props.meal.protein}</td>
                    <td id="carbs">{props.meal.carbohydrates}</td>
                    <td id="cholesterol">{props.meal.cholesterol}</td>
                    <td>
                        <button onClick={handleClick}>Delete</button>
                    </td>
                </tr>
                : null
            }
        </>
    )
}


export default TodayMealsTableRows


