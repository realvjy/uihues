import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"


const CSoon = () => {
  return (
    <section className="soon_section">
      <div className="container">
        <div className="soon_wrapper">
          <div className="soon_details">
            <a href="https://instagram.com/uihues"><img src="/logo.svg" className="logo"/></a>
            <p>
              A collection of handcrafted <strong>colors</strong> and <strong>gradients</strong> for designers and developer. Easily accesible from all design tools: Figma, Sketch, XD and more.
            </p>
            <h3>COMING SUMMER 2020</h3>

            <a href="https://www.figma.com/file/s5i8cCPx63EUeIwAJGzJ8b/uihues?node-id=0%3A1" className="figma" >Open Figma File</a><a href="https://instagram.com/uihues" className="insta" >Instagram</a>
            <div className="credit">
              Project by {` `} <a href="https://vijayverma.co">vijay verma</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CSoon
