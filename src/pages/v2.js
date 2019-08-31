import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import UihuesData from '../data/uihues-data'


const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <UihuesData/>
  </Layout>
)

export default SecondPage
