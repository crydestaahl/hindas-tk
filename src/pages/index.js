import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import logo from "../images/logo.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <div className="container">
        <div className="hero">            
          <img src={logo} />
          <div className="hero-text">
            <h4>Välkommen till</h4>
            <h1>Hindås TK</h1>
          </div>
          <div className="hero-btn">          
            <button className="button"><a href="https://www.matchi.se/facilities/hindastk?date=2021-04-13&sport=">Boka bana</a></button>
            <button className="button"><a href="#">Medlemsskap</a></button>
          </div>
        </div>  
        <div className="blog">
          <div className="blog-title">
            <h3>Nyheter</h3>
        </div>
        <div className="blog-posts">
          BLOG POST GOES HERE
        </div>
      </div>      
    </div>

    
  </Layout>
)

export default IndexPage
