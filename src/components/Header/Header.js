import React from 'react';



export default function() {



    return(
        <header className="main-header">
            <h1>go<p>|</p>io</h1>
            <nav className="header-nav">
                <div className="home-button">
                    <box className="home-color"></box>
                    <h5>Home Page</h5>
                </div>
                <div className="search-button">
                    <box className="search-color"></box>
                    <h5>Find Flights</h5>                    
                </div>
                <div className="code-button">
                    <box className="code-color"></box>
                    <h5>Airport Codes</h5>                                        
                </div>
            </nav>
        </header>
    )
}