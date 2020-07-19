import React from 'react'

const Header = (props) => {
    const currentWeather = props.weather.current

    return (
        <>
            <header className="blog-header py-3">
                <div className="row flex-nowrap justify-content-between align-items-center">
                    <div className="col-4 pt-1">
                        {currentWeather ?
                            <div className="date-weather">
                                <p>{currentWeather.feelslike}F</p>
                                <img className="weather-img" alt="" src={currentWeather.weather_icons[0]}></img>
                                <p>{props.date}</p>
                            </div>
                            : null
                        }
                    </div>

                    <div className="col-4 text-center" >
                        <a className="blog-header-logo text-dark" href="./">Erica's World</a>
                    </div>

                    <div className="col-4 d-flex justify-content-end align-items-center">
                        <a className="text-muted" href="./" aria-label="Search">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor"
                                strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="mx-3" role="img"
                                viewBox="0 0 24 24" focusable="false">
                                <title>Search</title>
                                <circle cx="10.5" cy="10.5" r="7.5"></circle>
                                <path d="M21 21l-5.2-5.2"></path>
                            </svg>
                        </a>
                        <a className="btn btn-sm btn-outline-secondary" href="./">Sign up</a>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header