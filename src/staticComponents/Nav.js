import React from 'react'
import { Link } from 'react-router-dom'

function Nav(props) {

    return (
        <div className="nav-scroller py-1 mb-2">
            <nav className="nav d-flex justify-content-between">
                <Link to='/' className="p-2 text-muted">Home</Link>
                <Link to='/meal-plan' className="p-2 text-muted">Daily Snapshot </Link>
                <Link to='/all-meals' className="p-2 text-muted">All Meals </Link>
                <Link to='/today-meals2' className="p-2 text-muted">All Meals(sortable)</Link>
                <Link to='./recipes' className="p-2 text-muted">Recipes</Link>
                <Link to='./login' className="p-2 text-muted">Login</Link>
            </nav>
        </div>
    )
}

export default Nav