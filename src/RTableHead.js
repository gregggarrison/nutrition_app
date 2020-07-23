import React from 'react'

function RTableHead(){
    const { meals } = props
    const showMeals = meals.map(meal =>
        <MealsTableRows
            meal={meal}
            key={meal.id}
            date={props.date}
        />)

    return (
        <div>
            <table className="table table-sm" id="results-table">
                <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Food</th>
                        <th scope="col">Qty</th>
                        <th scope="col">Unit</th>
                        <th scope="col">Calories</th>
                        <th scope="col">Total Fat</th>
                        <th scope="col">Protein</th>
                        <th scope="col">Carbs</th>
                        <th scope="col">Cholesterol</th>
                    </tr>
                </thead>
                <tbody>
                    {showMeals}
                </tbody>
            </table>
        </div>
    )

}
export default RTableHead