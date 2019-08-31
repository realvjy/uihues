import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"

const Header = ({ siteTitle }) => (
  <header >
    <div className="content-wrap">
      <div className="top-header">
        <Link to="/">
          <img src="/logo.png" className="logo"/>
        </Link>
        <p>
        A Collection of handcrafted colors and gradients
        </p>
       
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
