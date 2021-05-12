
import React from "react"
import SEO from "../components/seo"
import logo from "../images/logo.png"

const Hero = () => {
  return (
    <div className="hero">    
        <SEO title="Hindås Tennisklubb" />        
        <img src={logo} alt="Logo"/>
        <div className="hero-text">
            <h4>Välkommen till</h4>
            <h1>Hindås TK</h1>
        </div>
        <div className="hero-btn">          
            <button className="button"><a href="https://www.matchi.se/facilities/hindastk?date=2021-04-13&sport=">Boka bana</a></button>
            <button className="button"><a href="#">Medlemsskap</a></button>        
        </div>
    </div>  
  )
}
export default Hero
