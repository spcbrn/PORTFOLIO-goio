import React from 'react';
import {Link} from 'react-router-dom';


export default function() {
    return(
        <main className="landing-wrapper">
            <div className="header-shim"></div> 
            <div className="landing-div-one">
                <div className="landing-welcome">
                    <div className="landing-welcome-text">
                        <h2>go<p>|</p>io</h2>
                        <h5>[scroll down]</h5>
                    </div>
                </div>
            </div>
            <div className="landing-div-two">
                <div className="landing-about">
                    <div className="about-text">
                        <p>Welcome to go|io, a truly stripped-down travel site.</p> <br />
                        <div className="about-points">
                            <p>-Find and book the cheapest available flights.<br />
                               -Utilize the number one airfair searching technology on the planet.<br />
                               -Results optimized for minimum layover time, so you get where you are going faster.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="landing-div-three">
                <div className="landing-disclaimer">
                    <div className="landing-disclaimer-text">
                        <p>Before you get started, let's cover the basics.</p>
                        <p>This is a stream-lined site, and as such, we assume a few things:</p><br />
                        <div className="landing-disclaimer-points">
                            <p>-This isn't your first time flying.<br />
                               -You'll be handling your own accomodations.<br />
                               -You know from which airport you'll depart and to which you'll arrive.<br />
                               -That our job is, simply, to get you there.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="landing-div-four">
                <div className="landing-final">
                    <p>Okay, it's time to see the world.</p>
                    <h6>Click the Earth to get started!</h6>
                    <Link to="/search" onClick={() => window.scrollTo(0, 0)}>
                        <div className="landing-earth"></div>
                    </Link>
                </div>
            </div>
        </main>
    )
}