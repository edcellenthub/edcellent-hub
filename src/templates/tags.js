import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import TagsNav from '../components/TagsNav';

class TagRoute extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    
    const postLinks = posts.map(({node: post}) => (
          <div className="tag-item" key={post.fields.slug}>
            <div className="image-container">
              <img
                className="image"
                src={post.frontmatter.featured_image.childImageSharp.fluid.src|| "/img/landing-blog-image-1.jpg" }
                alt="blog image"
              />
            </div>
            <div className="blog-item-details padding-5 flex-column">
              <div className="blog-date flex-row">
                <div className="date-horizontal-line" />
                <p className="f-arnopro-s text-small">{post.frontmatter.date.toUpperCase()}</p>
              </div>
              <h4 className="title f-arnopro-b margin-bottom-2">
                  {post.frontmatter.title}
              </h4>
              <Link to={post.fields.slug}>
                  <p className="f-nunito text-small black">READ MORE</p>
              </Link>
            </div>
          </div>
    ))
    const tag = this.props.pageContext.tag
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? '' : 's'
    } tagged with “${tag}”`


    return (
      <Layout>
        <Navbar  hasLightBg currentPage='blog'/>
        <TagsNav currentPage={`${tag}`} />
        <section className="blog-index-container">
          <Helmet title={`${tag} | ${title}`} />
            <div className="taghead f-arnopro-s text-m">{tagHeader}</div>
            <div className="taglist">{postLinks}</div>
        </section>
      </Layout>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
                date(formatString: "MMMM DD, YYYY")
                featured_image {
                  childImageSharp {
                      fluid(maxWidth: 1440, quality: 100) {
                          ...GatsbyImageSharpFluid
                      }
                  }
                }
          }
        }
      }
    }
  }
`
