import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'


class BlogRoll extends React.Component {

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    console.log(data)

    return (
      <div className="blog-index-container">
        <div id="blog-index">
          <div className="items-container">
              {posts && posts.map(({node: post}) => (
                <div className="item" key={post.id}>
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
                        <p className="read-btn f-nunito text-small">READ MORE</p>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
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
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
