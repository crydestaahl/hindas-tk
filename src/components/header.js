import * as React from "react"
import { useState } from 'react' 
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Fade from 'react-reveal/Fade';

const Header = ({ siteTitle, menuLinks }) => {
  const [isActive, setIsActive ] = useState(false);

  const toggleIsActive = () => {
    !isActive ? setIsActive(true) : setIsActive(false) 
    console.log(isActive)
  }

  return(

    <header
      style={{        
        background: `white`,
        marginBottom: `1.45rem`,      
      }}      
    > 
      <div 
          className="overlay"
          style={{ width: `${isActive ? '100vw': '0'}`}}
          >
          <ul style={{ display: "flex", flex: 1 }}>
            <div 
              className="hamburger"
              style={{ 
                marginLeft: 'auto',
                display: `${isActive? 'block' : 'none'}`
              }}
              onClick={toggleIsActive}
              >
              <div className={ isActive ? 'bar1-active' : 'bar1'}></div> 
              <div className={ isActive ? 'bar2-active' : 'bar2'}></div> 
              <div className={ isActive ? 'bar3-active' : 'bar3'}></div> 
            </div>
            <div className="overlay-content">
              {menuLinks.map(link => (
                <li                
                  key={link.name}
                  style={{
                    listStyleType: `none`,
                    padding: `1rem 0`,
                    paddingRight: '1rem',
                    display: `${isActive? 'block' : 'none'}`,
                  }}
                >
                  <Link style={{ color: `#a70d18` }} to={link.link}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </div>
          </ul>
        </div>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
          display: 'flex'
        }}
      >
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
      {/* <h1 style={{ margin: 0 }}> 
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        */}
      <Fade>
        <div 
          className="hamburger"
          style={{ marginLeft: 'auto'}}
          onClick={toggleIsActive}
          >
           <div className={ isActive ? 'bar1-active' : 'bar1'}></div> 
           <div className={ isActive ? 'bar2-active' : 'bar2'}></div> 
           <div className={ isActive ? 'bar3-active' : 'bar3'}></div> 
        </div>
        </Fade>
      </div>
      <div>
        <nav>
        
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
