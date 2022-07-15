import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"


const Soon = () => {
  return (
    <section className="soon_section">
      <div className="container">
        <div className="soon_wrapper">
          <div className="sooon">
            <a href="https://instagram.com/uihues"><img src="/logo.svg" className="logo"/></a>
            <p>
              A collection of handcrafted <strong>colors</strong> and <strong>gradients</strong> for designers and developer. Easily accesible from all design tools: Figma, Sketch, XD and more.
            </p>
            <div className="si">SOON</div>
            <a className="fc" href="https://instagram.com/uihues"> @uihues</a> by <a className="fc"  href="https://twitter.com/realvjy"> @realvjy</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Soon
