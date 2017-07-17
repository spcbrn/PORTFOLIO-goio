import React from 'react';
import {Link} from 'react-router-dom';



export default function() {



    return(
        <header className="main-header">
            <h1>go<p>|</p>io</h1>
            <nav className="header-nav">
                <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                    <div className="home-button">
                        <box className="home-color"></box>
                        <h5>Home Page</h5>
                    </div>
                </Link>
                <Link to="/search" onClick={() => window.scrollTo(0, 0)}>
                    <div className="search-button">
                        <box className="search-color"></box>
                        <h5>Find Flights</h5>                    
                    </div>
                </Link>
                <Link to="/iata" onClick={() => window.scrollTo(0, 0)}>
                    <div className="code-button">
                        <box className="code-color"></box>
                        <h5>US Airports</h5>                                        
                    </div>
                </Link>
            </nav>
        </header>
    )
}