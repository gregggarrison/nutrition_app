import React from 'react'
import SearchForm from './SearchForm'

function MealPlan(props) {

    return (
        <>
            <SearchForm
                addToMeals={props.addToMeals}
                addToTodayMeals={props.addToTodayMeals}
                todayMeals={props.todayMeals}
            />
        </>
    )
}

export default MealPlan