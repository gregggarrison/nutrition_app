import React from 'react'
import TodayMealsTableRows from './TodayMealsTableRows'

function TodayMeals(props) {
    const { todayMeals } = props

    const showMeals = todayMeals.map(meal =>
        <TodayMealsTableRows
            meal={meal}
            key={meal.id}
            formatDate={props.formatDate}
            filterMealDate={props.filterMealDate}
            todayMeals={props.todayMeals}
            addToTodayMeals={props.addToTodayMeals}
            deleteMeal={props.deleteMeal}
        />)

    return (

        <div>
            <div className="date-weather">
                <h3>{props.date}</h3>
            </div>
            <table className="table table-sm" id="results-table">
                <thead>
                    <tr>
                        <th scope="col">Food</th>
                        <th scope="col">Qty</th>
                        <th scope="col">Unit</th>
                        <th scope="col">Calories</th>
                        <th scope="col">Total Fat(g)</th>
                        <th scope="col">Protein(g)</th>
                        <th scope="col">Carbs(g)</th>
                        <th scope="col">Cholesterol(mg)</th>
                    </tr>
                </thead>
                <tbody>
                    {showMeals}
                </tbody>
            </table>

        </div>
    )
}

export default TodayMeals 