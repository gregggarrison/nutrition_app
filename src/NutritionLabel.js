import React from 'react'
import './nutritionLabel.css'

const NutritionLabel = props => {

    const { meal } = props
    const nutrients = meal.full_nutrients

    function findNutrient(id) {
        if (nutrients) {
            return nutrients.find(nutrient => nutrient["attr_id"] === id)
        }
    }

    function toNumberUnits(nutrient, decimals, unit) {
        const amount = nutrient ? nutrient.value : 0
        return parseFloat(amount).toFixed(decimals) + unit
    }

    const fiber = findNutrient(291)
    const lFiber = toNumberUnits(fiber, 1, "g")

    const calories = findNutrient(208)
    const lCalories = toNumberUnits(calories, 1, "")

    const totalFat = findNutrient(204)
    const lTotalFat = toNumberUnits(totalFat, 1, "g")

    const lCaloriesFat = (totalFat.value * 9).toFixed(0)

    const protein = findNutrient(203)
    const lProtein = toNumberUnits(protein, 1, "g")

    const carbs = findNutrient(205)
    const lCarbs = toNumberUnits(carbs, 1, "g")

    const cholest = findNutrient(601)
    const lCholest = toNumberUnits(cholest, 1, "mg")

    const sFat = findNutrient(606)
    const lSFat = toNumberUnits(sFat, 1, "g")

    const transFat = findNutrient(605)
    const lTransFat = toNumberUnits(transFat, 1, "g")

    const sugar = findNutrient(269)
    const lSugar = toNumberUnits(sugar, 1, "g")

    const sodium = findNutrient(307)
    const lSodium = toNumberUnits(sodium, 1, "mg")
    
    let sodDV = 2400
    let lSatFatDV = 20
    let tFatDV = 65
    let lCarbsDV = 300
    let lCholestDV = 300
    let lFiberDV = 25
    
    const sodiumDV = percentDV(sodium, sodDV)
    const totalFatDV = percentDV(totalFat, tFatDV)
    const sFatDV = percentDV(sFat, lSatFatDV)
    const carbsDV = percentDV(carbs, lCarbsDV)
    const cholestDV = percentDV(cholest, lCholestDV)
    const fiberDV = percentDV(fiber, lFiberDV)

    function percentDV(nutrient, nutrientDV) {
        const amount = nutrient ? nutrient.value : 0
        return ((parseFloat(amount) / nutrientDV) * 100).toFixed(0) + "%"
    }

    return (
        <div id="nutritionfacts">
            <table width="225" cellSpacing="0" cellPadding="0">
                <tbody>
                    <tr>
                        <td align="center" className="header">Nutrition Facts</td>
                    </tr>
                    <tr id="height-7px">
                        <td bgcolor="#000000"></td>
                    </tr>
                    <tr>
                        <td id="font-size-7pt" >
                            <div className="line">Amount Per Serving: {meal.serving_qty} {meal.serving_unit}</div>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>
                            <div className="line">
                                <div className="label">Calories <div id="lCalories" className="weight">{lCalories}</div>
                                </div>
                                <div style={{ paddingLeft: "6px" }} id="padding-top-1px-float-right" className="weight">Calories from Fat
                                    <div id="lCaloriesFat" className="weight">{lCaloriesFat}</div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="line">
                                <div className="dvlabel">% Daily Value<sup>*</sup></div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="line">
                                <div className="label">Total Fat <div id="lTotalFat" className="weight">{lTotalFat}</div>
                                </div>
                                <div id="lTotalFatDV" className="dv">{totalFatDV}</div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="indent">
                            <div className="line">
                                <div className="labellight">Saturated Fat <div id="lSaturatedFat"
                                    className="weight">{lSFat}
                                </div>
                                </div>
                                <div id="lSaturatedFatDV" className="dv">{sFatDV}</div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="indent">
                            <div className="line">
                                <div className="labellight"><i>Trans</i> Fat <div id="lTransFat" className="weight">{lTransFat}
                                </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="line">
                                <div className="label">Cholesterol <div id="lCholesterol" className="weight">{lCholest}</div>
                                </div>
                                <div id="lCholesterolDV" className="dv">{cholestDV}</div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="line">
                                <div className="label">Sodium <div id="lSodium" className="weight">{lSodium}</div>
                                </div>
                                <div id="lSodiumDV" className="dv">{sodiumDV}</div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="line">
                                <div className="label">Total Carbohydrates <div id="lCarbs" className="weight">{lCarbs}
                                </div>
                                </div>
                                <div id="lCarbsDV" className="dv">{carbsDV}</div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="indent">
                            <div className="line">
                                <div className="labellight">Dietary Fiber <div id="lFiber" className="weight">{lFiber}</div>
                                </div>
                                <div id="lFiberDV" className="dv"></div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="indent">
                            <div className="line">
                                <div className="labellight">Sugars <div id="lSugar" className="weight">{lSugar}</div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="line">
                                <div className="label">Protein <div id="lProtein" className="weight">{lProtein}</div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr id="height-7px">
                        <td bgcolor="#000000"></td>
                    </tr>
                    <tr>
                        <td>
                            <div className="line">
                                <div className="labellight">* Based on a regular
                                    <a href="https://www.choosemyplate.gov/resources/MyPlatePlan">2000 calorie diet </a>
                                    <br></br>
                                    <i>Nutritional details are an estimate and should only be used as a guide for approximation.</i>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default NutritionLabel