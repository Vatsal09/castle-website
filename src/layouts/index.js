import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import './all.sass';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// returns IndexHeader or RegularHeader depending on which page
const IndexHeader = () => (
  <section className="hero is-dark is-fullheight">
    <div className="hero-background"><img src="https://static.pexels.com/photos/269155/pexels-photo-269155.jpeg" /></div>
    <div className="hero-shadow-green"></div>
    <div className="hero-shadow-black"></div>
    <div className="hero-head">
      <Navbar transparent={true}/>
    </div>
    <div className="hero-body">
      <div className="container">
        <h1 className="title is-size-1 has-text-weight-bold">CASTLE</h1>
        <h2 className="subtitle is-size-3">Say goodbye to <strong>trivial tasks</strong> and <strong>chores</strong>.</h2>
        <div className="container-button"> <Link to="http://eepurl.com/brFMQb" className="button is-primary is-size-5">PREORDER</Link> </div>
      </div>

    
     
     
    </div>

  </section>
);

const RegularHeader = ({ title, subtitle }) => (
  <section className="hero is-primary">
    <div className="hero-head">
      <Navbar tranparent={false}/>
    </div>
    <div className="hero-body">
      <div className="container is-header">
        <h1 className="title is-size-1 has-text-weight-bold">{title}</h1>
        <h2 className="subtitle is-size-3">{subtitle}</h2>
      </div>
    </div>
  </section>
);

class TemplateWrapper extends React.Component {
  static propTypes = { children: PropTypes.func }
  state = {
    title: '',
    subtitle: ''
  }
  constructor(props) {
    super(props);
  }
  updateHeading = (title, subtitle) => {
    this.setState({ title, subtitle })
  }
  render() {
  const { children, location } = this.props
    return (
      <div>
        <Helmet title="Home | CASTLE" />
        {(this.props.location.pathname === "/") ? <IndexHeader /> : <RegularHeader title={this.state.title} subtitle={this.state.subtitle}/>}
        <div>{this.props.children({ ...this.props, updateHeading: this.updateHeading })}</div>
        <Footer />
      </div>  
    );
  }
}

export default TemplateWrapper;
