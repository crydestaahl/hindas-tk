import * as React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => {
 const data = useStaticQuery(graphql`
  query MyQuery {
  allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "home"}}}) {
    edges {
      node {
        frontmatter {
          templateKey
          title
          description
        }
      }
    }
  }
}
`)
  const posts  = data.allMarkdownRemark.edges 

  return (
    
    <Layout>
      {posts.map(post => (
              
              <div className="card" key={post.id}>
                <div className="card-image">          
                          
              </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                 
                  <p><time dateTime="2021-04-26">{post.node.frontmatter.date}</time></p>
                </div>
              </div>
              <div className="content">
                {post.node.frontmatter.description}
                <br/>                            
              </div>
              </div>
            </div>
          ))}
    </Layout>
  )
}
export default AboutPage
