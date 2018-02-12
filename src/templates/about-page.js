import React from 'react';
import Helmet from 'react-helmet';
import Content, { HTMLContent } from '../components/Content';

export const AboutPageTemplate = ({content, contentComponent}) => {
  const PageContent = contentComponent || Content;
  return (<section className="section section--gradient">
    <Helmet title="About | CASTLE" />
    <div className="container">
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <div className="section">
            <PageContent className="content" content={content} />
          </div>
        </div>
      </div>
    </div>
  </section>);
};

export default ({ data, updateHeading }) => {
  const { markdownRemark: post } = data;
  updateHeading(post.frontmatter.title, post.frontmatter.subtitle);
  return <AboutPageTemplate
    contentComponent={HTMLContent}
    title={post.frontmatter.title}
    subtitle={post.frontmatter.subtitle}
    content={post.html}
    updateHeading={updateHeading}
  />;
};

export const aboutPageQuery = graphql`
  query AboutPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        subtitle
      }
    }
  }
`;
