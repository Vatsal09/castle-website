import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Script from 'react-load-script';

export default class IndexPage extends React.Component {
  handleScriptLoad() {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', user => {
        if (!user) {
          window.netlifyIdentity.on('login', () => { document.location.href = '/admin/'; });
        }
      });
    }
    window.netlifyIdentity.init();
  }

  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    return (
      <div>
        <Script
          url="https://identity.netlify.com/v1/netlify-identity-widget.js"
          onLoad={this.handleScriptLoad.bind(this)}
        />  
        <section className="hero">
          <div className="hero-body">
            <div className="columns is-centered">
              <div className="column is-5">
                <div className="image is-square">
                  <img src={"http://via.placeholder.com/500x500"} />
                </div>
              </div>
              <div className="column is-5">
                <h1 className="title is-size-2 has-text-weight-bold is-capitalized">FOR THE HOME</h1>  
                <div className="content is-large">
                  <p><strong>CASTLE</strong> is an ever-growing set of devices, made to work with the stuff you own.</p>
                  <p>We're also working on supporting your <strong>favorite</strong> smart home devices, including Phillips Hue, Belkin Wemo, and hubs.</p>
                  <Link to="/devices" className="button is-outlined is-primary">LEARN MORE ABOUT DEVICES</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="hero is-dark">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="has-text-white">Spend more time doing what you love.</h1><a className="button is-primary" href="sign-up">SIGN UP</a>
            </div>
          </div>
        </section>
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="columns is-centered">
              <div className="column is-5">
                <h1 className="title is-size-2 has-text-weight-bold is-capitalized">DEVICES</h1>  
                <div className="content is-large">
                  <p>Meet <strong>Merlin</strong>, your new virtual butler.</p>
                  <p>He'll make sure your home is in top shape so you can do what you love.</p>
                  <Link to="/merlin" className="button is-outlined is-primary is-inverted">LEARN MORE ABOUT MERLIN</Link>
                </div>
              </div>
              <div className="column is-5">
                <div className="image is-square">
                  <img src={"http://via.placeholder.com/500x500"} />  
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;
