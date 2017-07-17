import React from 'react'
import {Link} from 'react-router-dom';

export default function() {
    return(
        <main className="footer-main">
            <p><Link to="/disclaimer" onClick={() => window.scrollTo(0, 0)}>Disclaimer</Link> | <Link to="/tech" onClick={() => window.scrollTo(0, 0)}>Tech</Link> | <a href="https://developers.google.com/qpx-express/?hl=en_US">API Info</a> | Copyright 2017</p><br />
            <div className="footer-icon"></div>
        </main>
    )
}