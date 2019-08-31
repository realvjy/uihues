import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import UihuesGrdData from '../data/uihues-grd-data'


const SecondPage = () => (
  <Layout>
    <SEO title="Gradients" />
    <UihuesGrdData/>
  </Layout>
)

export default SecondPage
