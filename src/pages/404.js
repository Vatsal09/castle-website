import React from 'react';
import Link from "gatsby-link";

const NotFoundPage = ({ updateHeading}) => {
  updateHeading("404", "NOT FOUND")
  return (
    <div className="container">
      <div className="content is-medium has-text-centered">
        <p>Well, this page doesn't exist. <Link to="/">Head back?</Link></p>
      </div>
    </div>
  );
}

export default NotFoundPage;
