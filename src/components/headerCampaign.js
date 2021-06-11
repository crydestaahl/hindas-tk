import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const HeaderCampaign = ({ siteTitle }) => {
  
  return(
   
    <header
      style={{        
        background: `white`,
        marginBottom: `1.45rem`,    
        margin: `0 auto`,
          maxWidth: 960,
          padding: `5.45rem 1.0875rem`,
          display: 'flex',
          flexDirection: 'column',
          alignItem: 'center',
          justifyContent: 'center'  
      }}>
      <div>
        
      <Link to="/">      
        <StaticImage 
          src="../images/logo.png"
          width={80}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="HTK's logo"
          style={{ marginBottom: `1.45rem` }}
          placeholder="none"
        />
      </Link>       
      </div>
    </header>
  )
}

HeaderCampaign.propTypes = {
  siteTitle: PropTypes.string,
}

HeaderCampaign.defaultProps = {
  siteTitle: ``,
}

export default HeaderCampaign
