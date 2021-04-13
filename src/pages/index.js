import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <StaticImage
      src="../images/hero.jpg"
      width={350}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}    
    />
    <div>
      <div className="container">
        <div className="h1-on-hero">
          <h1>Välkommen till Hindås TK</h1>
        </div>
        <button className="button"><a href="https://www.matchi.se/facilities/hindastk?date=2021-04-13&sport=">Boka bana</a></button>
        <button className="button"><a href="#">Medlemsskap</a></button>
      </div>
    </div>
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)

export default IndexPage
