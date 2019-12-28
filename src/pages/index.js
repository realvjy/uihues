import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Soon from '../components/coming-soon'



const IndexPage = () => (
  <Layout>
    <SEO title="uihues - Handcrafted colors and gradients" />
    <Soon />
  </Layout>
)

export default IndexPage
