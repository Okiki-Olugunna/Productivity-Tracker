import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p>Copyright 2022 &copy; Okiki Olugunaa</p>
      <Link to="/about">About</Link>
    </footer>
  );
};

export default Footer;
