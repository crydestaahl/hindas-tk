import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => {
  return (    
    <Layout>
    <div style={{margin: '1rem 1.9rem'}}>
      <h1 style={{fontSize: '1.5rem', marginBottom: '2rem'}}
      >
        Om klubben
      </h1>
        <p>Hindås tennisklubb startades 1931 på Bocköhalvön och är en förening med tennisverksamhet i Hindås. Vi har en tennishall med två hardcourt-banor samt en utomhusgrusbana.<br/> 
        Vi bedriver tennisskola för såväl vuxna och barn och anordnar regelbundet tävlingar och klubbmästerskap.
        <br/>
        <br/>
        Vill du kontakta oss kan du dig av följande adresser: <br/></p>
    </div>
      
    </Layout>
  )
}
export default AboutPage
