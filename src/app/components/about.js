import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const About = () => (
  <Fragment>
    <Link to="/home">GO TO HOME</Link> <br />
    <Link to="/contact">GO TO CONTACT</Link> <br />
    <p>About Component</p>
  </Fragment>
);

export default About;