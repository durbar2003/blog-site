import * as React from 'react'
import Layout from '../../components/layout'
import { Link, graphql } from 'gatsby'

const BlogPost = ({data, children}) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
    <p>{data.mdx.frontmatter.date}</p>
    {children}
  </Layout>
  )
}
export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      id
    }
  }
`

export const Head = ({data}) => <title>"Super Cool Blog Posts"</title>

export default BlogPost