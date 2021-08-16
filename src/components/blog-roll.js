
import { graphql, useStaticQuery, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"

const BlogRoll = () => {
 const data = useStaticQuery(graphql`
    query queryMcQuery {
  allMarkdownRemark(
    filter: {id: {ne: "48e1aeef-4f19-5c13-ac0b-fbf5035425c3"}}
    sort: {fields: frontmatter___date, order: DESC}
    limit: 6
  ) {
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          title
          date(fromNow: true)
          description
          image {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
            id
          }
        }
        rawMarkdownBody
        id
      }
    }
  }
}
  `)
  const posts  = data.allMarkdownRemark.edges 

  return (
    <div className="blog-wrapper">
    
      {posts.map(post => (          
          <div className="card" key={post.id}>
              <div className="card-image">          
                <Link to={post.node.fields.slug}>                                           
                  <GatsbyImage 
                    image={ post.node.frontmatter.image.childImageSharp.gatsbyImageData }
                    alt={post.node.frontmatter.title}
                    />
                </Link>                
              </div>
          <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <Link to={post.node.fields.slug}>
                    <p className="title is-4"> {post.node.frontmatter.title}</p>
                  </Link>
                  <p><time dateTime="2021-04-26">{post.node.frontmatter.date}</time></p>
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
  )
}
export default BlogRoll
