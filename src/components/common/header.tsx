import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const Header = ({ siteTitle = "" }) => <header>header </header>;

Header.propTypes = {
  siteTitle: PropTypes.string,
};

export default Header;
