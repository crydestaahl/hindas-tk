import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogRoll from "../components/blog-roll"
import Hero from "../components/hero"

const IndexPage = () => {
  
  return(
    <Layout>
      <SEO title="Home" /> 
        <Hero/>
        <div className="container" >  
          <div className="blog">
            <div className="blog-title">
              <h3>Nyheter</h3>
          </div>
          <div className="blog-posts">    
            <BlogRoll />   
          </div>
          <div className="about-index">
            <div className="about-title">
              <StaticImage 
                src="../images/hindashallen.jpeg"
                className="about-index-img"
                layout= "fullWidth"
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="HTKHallen"
                placeholder="none"
              />
              <Link to="tennis-school">
                <h3 className="about-h3">Tennisskola</h3>
              </Link>
          </div>
            <p>Vi har tennisskola för såväl vuxna och barn och anordnar regelbundet tävlingar och klubbmästerskap.</p>
            <Link to="tennis-school"><p>Läs mer...</p></Link>
          </div>
          
          </div>
        </div>            
    </Layout>
  )
}

export default IndexPage

