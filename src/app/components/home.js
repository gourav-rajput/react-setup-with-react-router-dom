import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <Fragment>
    <Link to="/about">GO TO ABOUT</Link> <br />
    <Link to="/contact">GO TO CONTACT</Link> <br />
    <p>Home Component</p>
  </Fragment>
);

export default Home;