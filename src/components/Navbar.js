import React from "react";
import Link from 'gatsby-link';
import logo from '../img/castle-256x.png';
import PropTypes from 'prop-types';

export default class Navbar extends React.Component {
    static propTypes = {
      transparent: PropTypes.bool
  }
  state = { mobileHeadingIsVisible: false }
  toggleHeading = () => (this.setState({ mobileHeadingIsVisible: !this.state.mobileHeadingIsVisible }))
  render() {
      const isActive = (this.state.mobileHeadingIsVisible) ? "is-active" : "";
    const theme = (this.props.transparent) ? 'transparent' : 'primary'  
      return (
      <nav className={`navbar is-${theme}`}>
        <div className="container">
            <div className="navbar-brand">
                <Link className="navbar-item" to="/">
                    <img src={logo} alt="Logo" style={{ maxHeight: "64px", width: "auto", marginRight: "0.5rem", marginTop: "0.2rem", }} />
                    <h1 className="logo-link-text"> CASTLE</h1>
                </Link>
                <span className={`navbar-burger burger ${isActive}`} onClick={this.toggleHeading}>
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </div>
            <div className={`navbar-menu ${isActive}`}>
            <div className="navbar-end" role="navigation" aria-label="main navigation">
                <Link className="navbar-item" to="/about" activeClassName="is-active">HOW IT WORKS</Link>
                <Link className="navbar-item" to="/devices" activeClassName="is-active">DEVICES</Link>
                <Link className="navbar-item" to="/merlin" activeClassName="is-active">ABOUT</Link>
                {//<span className="navbar-item">
                    //<Link className={`button is-secondary ${this.props.transparent ? '' : 'is-outlined is-inverted'}`} to="/sign-up">PREORDER</Link>
                //</span>
                }
            </div>
            </div>
        </div>
    </nav>);
  }
}