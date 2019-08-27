import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="content-wrap">
    <div>
      <h1>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
      <p>
      A Collection of handcrafted colors and gradients
      </p>
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
