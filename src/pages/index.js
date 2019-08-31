import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import UihuesData from '../data/uihues-data'


  
const IndexPage = () => (
  <Layout>
    <SEO title="uihues - Handcrafted colors and gradients" />
    <UihuesData/>
  </Layout>
)

export default IndexPage
