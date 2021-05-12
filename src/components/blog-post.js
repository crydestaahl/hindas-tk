import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from './layout' 

export default function BlogPost({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <GatsbyImage 
        alt={post.frontmatter.title} 
        image={post.frontmatter.image.childImageSharp.gatsbyImageData}
      />
      <div className="blog-post-content">
        <h1 className="blog-post-h1">{post.frontmatter.title}</h1>
        <small>{post.frontmatter.date}</small>
        <div className="blog-post-body"dangerouslySetInnerHTML={{ __html: post.html }} />  
        <Link to="/blog-page">Tillbaka till nyheter.</Link>
      </div>         
    </Layout>
  )
}
export const query = graphql`
  query BlogQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        image {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`