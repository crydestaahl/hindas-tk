import * as React from "react"
import {  graphql, Link } from "gatsby"


import Layout from "../components/layout"
import SEO from "../components/seo"
import logo from "../images/logo.jpg"

const IndexPage = ({ data }) => {
  const posts  = data.allMarkdownRemark.edges 

  console.log(posts)
  return(
  <Layout>
    <SEO title="Home" />
      <div className="container">
        <div className="hero">            
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
        <div className="blog">
          <div className="blog-title">
            <h3>Nyheter</h3>
        </div>
        <div className="blog-posts">
       
            {posts.map(post => (

              <div className="card" key={post.id}>
                <div className="card-image">
                  <figure className="image is-4by3">
                    <Link to={post.node.fields.slug}>
                      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                    </Link>
                  </figure>
              </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <Link to={post.node.fields.slug}>
                    <p className="title is-4"> {post.node.frontmatter.title}</p>
                  </Link>
                  <p><time datetime="2021-04-26">{post.node.frontmatter.date}</time></p>
                </div>
              </div>
              <div className="content">
                {post.node.frontmatter.description}
                <br/>
                <Link to={post.node.fields.slug}>
                  <p>Läs mer...</p>
                </Link>                
              </div>
              </div>
            </div>
          ))}
        </div>
        <div className="blog">
          <div className="blog-title">
            <h3>Om Klubben</h3>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        </div>
      </div>      

  </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(fromNow: true)
            description
          }
          rawMarkdownBody
        }
      }
    }
  }
`