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
            <div className="index-title">
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
                height="300px"
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
          
          <div className="index-title" style={{marginTop: '3rem', borderTop: '2px solid rgb(167, 13, 24)'
        }}>
            <h3 style={{marginBottom: '1.5rem'}}>Hitta hit</h3>
            <address>
              <p><b>Tennishallen:</b> Sportvägen 3, 438 53</p>
              <p><b>Utebanan:</b> Bockövägen 16, 438 54</p>
            </address>
          </div>
          </div>
        </div>            
    </Layout>
  )
}

export default IndexPage

