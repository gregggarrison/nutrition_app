import React from 'react'

import './App.css'
const useSortableData = (items, config = null) => {
    const [sortConfig, setSortConfig] = React.useState(config);

    const sortedItems = React.useMemo(() => {
        let sortableItems = [...items];
        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                if ([sortConfig.key] === 'foodName') {
                    if ((a[sortConfig.key]) < (b[sortConfig.key])) {
                        return sortConfig.direction === 'ascending' ? -1 : 1;
                    }
                    if ((a[sortConfig.key]) > (b[sortConfig.key])) {

                        return sortConfig.direction === 'ascending' ? 1 : -1;
                    }
                    return 0;
                } else {
                    if (parseInt(a[sortConfig.key]) < parseInt(b[sortConfig.key])) {
                        return sortConfig.direction === 'ascending' ? -1 : 1;
                    }
                    if (parseInt(a[sortConfig.key]) > parseInt(b[sortConfig.key])) {

                        return sortConfig.direction === 'ascending' ? 1 : -1;
                    }
                    return 0;
                }
            });
        }
        return sortableItems;
    }, [items, sortConfig]);

    const requestSort = (key) => {
        let direction = 'ascending';
        if (
            sortConfig &&
            sortConfig.key === key &&
            sortConfig.direction === 'ascending'
        ) {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };
    return { items: sortedItems, requestSort, sortConfig };
};

const TodayMealsTable2 = (props) => {
    const { items, requestSort, sortConfig } = useSortableData(props.meals);
    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };

    return (
        <table className="table table-sm" id="results-table">
            <thead>
                <tr>
                    <th scope="col">
                        <button onClick={() => requestSort('date')}
                            className={getClassNamesFor('date')}
                        >
                            Date
                            </button>
                    </th>
                    <th scope="col">
                        <button onClick={() => requestSort('foodName')}
                            className={getClassNamesFor('foodName')}
                        >
                            Food
                            </button>
                    </th>
                    <th scope="col">
                        <button onClick={() => requestSort('serveQty')}
                            className={getClassNamesFor('serveQty')}
                        >
                            Qty
                            </button>
                    </th>
                    <th scope="col">
                        <button onClick={() => requestSort('serveUnit')}
                            className={getClassNamesFor('serveUnit')}
                        >
                            Unit
                            </button>
                    </th>
                    <th scope="col">
                        <button onClick={() => requestSort('calories')}
                            className={getClassNamesFor('calories')}
                        >
                            Calories
                            </button>
                    </th>
                    <th scope="col">
                        <button onClick={() => requestSort('allFat')}
                            className={getClassNamesFor('allFat')}
                        >
                            Total Fat(g)
                            </button>
                    </th>
                    <th scope="col">
                        <button onClick={() => requestSort('protein')}
                            className={getClassNamesFor('protein')}
                        >
                            Protein(g)
                            </button>
                    </th>
                    <th scope="col">
                        <button onClick={() => requestSort('carboydrates')}
                            className={getClassNamesFor('carboydrates')}
                        >
                            Carbs(g)
                            </button>
                    </th>
                    <th scope="col">
                        <button onClick={() => requestSort('cholesterol')}
                            className={getClassNamesFor('cholesterol')}
                        >
                            Cholesterol(g)
                            </button>
                    </th>
                </tr>
            </thead>
            <tbody>
                {items.map(meal => (
                    <tr key={meal.id}>
                        <td id="date">{meal.created_at.split('T', 1)}</td>
                        <td id="food">{meal.foodName}</td>
                        <td id="qty">{meal.serveQty}</td>
                        <td id="unit">{meal.serveUnit}</td>
                        <td id="calories">{meal.calories}</td>
                        <td id="total-fat">{meal.allFat}</td>
                        <td id="protein">{meal.protein}</td>
                        <td id="carbs">{meal.carbohydrates}</td>
                        <td id="cholesterol">{meal.cholesterol}</td>
                    </tr>
                ))}
            </tbody>

        </table>
    );
}


export default TodayMealsTable2