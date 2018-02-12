import React from "react";
import Link from "gatsby-link";
import logo from '../img/castle-256x.png';

export default () => (
    <footer className="footer">
        <div className="columns">
            <div className="column is-2">
                <Link className="image is-64x64" to="/"><img src={logo} /></Link>
                <strong>CASTLE</strong>
                <address>
                    <p>Made with ❤️ in Jersey City, NJ</p>
                </address>
            </div>
            <div className="column is-2">
                <div className="content">
                    <strong className="is-uppercase">sitemap</strong>
                    <ul className="is-unstyled">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/devices">Devices</Link></li>
                        <li><Link to="/merlin">Merlin</Link></li>
                        <li><Link to="/terms">Terms & Conditions</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
);