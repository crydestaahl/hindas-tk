import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import BlogRoll from "../components/blog-roll"
import SEO from "../components/seo"

export default function BlogPage({data}) {
  const posts  = data.allMarkdownRemark.edges 

  return( 
  <Layout>
    <SEO title="Nyheter" />

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

    {/*<BlogRoll /> */}
  </Layout>
  )
}

{/*export default BlogPage*/}

export const query = graphql`
  query BlogQuery1 {
    allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "blog"}}}) {
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
`