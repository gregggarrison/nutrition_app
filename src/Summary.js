import React from 'react'

const Summary = props => {
    const totalCal = props.todayMeals.reduce(
        (prevValue, currentValue) => {
            return prevValue + +currentValue.calories
        }, 0)
    const totalFat = props.todayMeals.reduce(
        (prevValue, currentValue) => {
            return prevValue + +currentValue.allFat
        }, 0)

    const totalCarbs = props.todayMeals.reduce(
        (prevValue, currentValue) => {
            return prevValue + +currentValue.carbohydrates
        }, 0)

    const totalProtein = props.todayMeals.reduce(
        (prevValue, currentValue) => {
            return prevValue + +currentValue.protein
        }, 0)

    const totalCholesterol = props.todayMeals.reduce(
        (prevValue, currentValue) => {
            return prevValue + +currentValue.cholesterol
        }, 0)

    let calDV = 2000
    let sodDV = 2400
    let lSatFatDV = 20
    let tFatDV = 65
    let carbsDV = 300
    let lCholestDV = 300
    let fiberDV = 25

    const pCal = ((parseFloat(totalCal / calDV)) * 100).toFixed(0)+"%"
    const tFat = ((parseFloat(totalFat / tFatDV)) * 100).toFixed(0)+"%"
    const tCarbs = ((parseFloat(totalCarbs / carbsDV)) * 100).toFixed(0)+"%"
    const pChol = ((parseFloat(totalCholesterol / lCholestDV)) * 100).toFixed(0)+"%"

    return (
        <div id="stupid" className="row mb-2">
            <ul id="snapshot" className="col-md-6">
                <h4>Totals</h4>
                <li>Calories: {parseInt(totalCal)}  </li>
                <li>Fat: {parseInt(totalFat)} </li>
                <li>Carbs: {parseInt(totalCarbs)} </li>
                <li>Cholesterol: {parseInt(totalCholesterol)}</li>
                <li>Protein: {parseInt(totalProtein)}</li>
            </ul>

            <ul id="dv" className="col-md-6">
                <h4>Daily Value %</h4>
                <li>Calories: {pCal}</li>
                <li>Fat:  {tFat} </li>
                <li>Carbs:  {tCarbs}</li>
                <li>Cholesterol: {pChol}</li>
            </ul>
        </div>
    )
};



export default Summary  