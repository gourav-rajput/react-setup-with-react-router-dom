import React, { Fragment } from "react";
import { Link } from "react-router-dom";


const Contact = () => (
  <Fragment>
    <Link to="/about">GO TO ABOUT</Link> <br />
    <Link to="/home">GO TO HOME</Link> <br />
    <p>Contact Component</p>
  </Fragment>
);

export default Contact;