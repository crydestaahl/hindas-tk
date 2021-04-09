import * as React from "react"
import { useState, useEffect } from 'react' 
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

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
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
          display: 'flex'
        }}
      >
      <StaticImage 
        src="../images/logo.jpg"
        width={80}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="HTK's logo"
        style={{ marginBottom: `1.45rem` }}
      />
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
        <div 
          className="hamburger"
          style={{ marginLeft: 'auto'}}
          onClick={toggleIsActive}
          >
           <div className={ isActive ? 'bar1-active' : 'bar1'}></div> 
           <div className={ isActive ? 'bar2-active' : 'bar2'}></div> 
           <div className={ isActive ? 'bar3-active' : 'bar3'}></div> 
        </div>
      </div>
      <div>
        <nav>
        <div 
          className="overlay"
          style={{ width: `${isActive ? '100%': '0'}`}}
          >

          <ul style={{ display: "flex", flex: 1 }}>

            <div 
              className="hamburger"
              style={{ marginLeft: 'auto'}}
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
