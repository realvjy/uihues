import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"


const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="ops-404">
    <h2>Life is not black and white</h2>
    <Link to="/">Go back and Get Colors</Link>
    </div>
  </Layout>
)

export default NotFoundPage
