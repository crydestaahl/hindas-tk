import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import SponsorGallery from "../components/sponsors"
import HeaderCampaign from "./headerCampaign"
import "./layout.css"
import "./custom.scss"

const LayoutCampaign = ({ children }) => {
 

  return (
   
    <div className="site-content">
      <HeaderCampaign />
          <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
         <SponsorGallery/> 
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>  
  )
}

LayoutCampaign.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutCampaign
