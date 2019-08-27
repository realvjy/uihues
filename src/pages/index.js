import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "../components/uihues.scss"


export const data = graphql`
query {
  allInternalPosts {
    edges {
      node {
        id
        feed {
          xmlns
          xmlns_openSearch
          xmlns_batch
          xmlns_gs
          entry {
            content {
              type
              _t
            }
          }
        }
      }
    }
  }
}`

// export const query = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
// }`
  console.log(data.allInternalPosts);
  
  
const IndexPage = ({data}) => (

  <Layout>
    <SEO title="uihues - colors" />
    
    <div>
    {data.allInternalPosts.edges.map(({ node }, ...index) => (
    <div key={index}>
      {node.results && node.feed.map((data, ...index) => (
        <div key={index}>
          {data.feed.entry[0]}
        </div>
        ))}
      </div>
      ))}
    </div>


    <div className="uihues-nav">
      <ul>
        <li><Link to="/page-2/">Go to page 2</Link></li>
        <li><Link to="/page-2/">Go to page 2</Link></li>
        <li><Link to="/page-2/">Go to page 2</Link></li>
      </ul>
    </div>
    <div className="uihues-container">
      {/* One color box */}
      <div className="color-wrap">
        <div className="color-box">
          <h3>#HUE001</h3>
          <h4>add</h4>
          <ul>
            <li className="hues"><a href="#">#123434</a></li>
            <li className="hues"><a href="#">#123434</a></li>
            <li className="hues"><a href="#">#123434</a></li>
            <li className="hues"><a href="#">#123434</a></li>
          </ul>
        </div>  
      </div>

      {/* One color box */}
      <div className="color-wrap">
        <div className="color-box">
          <h3>#HUE001</h3>
          <h4>add</h4>
          <ul>
            <li className="hues"><a href="#">#123434</a></li>
            <li className="hues"><a href="#">#123434</a></li>
            <li className="hues"><a href="#">#123434</a></li>
            <li className="hues"><a href="#">#123434</a></li>
          </ul>
        </div>  
      </div>

      
    </div>
  </Layout>
)

export default IndexPage
