import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
          <div className="items-container">
              {posts && posts.map(({node: post}) => (
                <div className="item" key={post.id}>
                  <div className="image-container">
                    <img
                      className="image"
                      src={post.frontmatter.featuredImage || "/img/landing-blog-image-1.jpg" }
                      alt="blog image"
                    />
                  </div>
                  <div className="blog-item-details padding-5 flex-column">
                    <div className="landing-blog-date flex-row">
                      <div className="date-horizontal-line" />
                      <p className="f-arnopro-s text-small">{post.frontmatter.date.toUpperCase()}</p>
                    </div>
                    <Link to={post.frontmatter.slug}>
                        <h4 className="title f-arnopro-b margin-bottom-2">
                            {post.frontmatter.title}
                        </h4>
                     </Link>
                    <p className="f-nunito text-small">READ MORE</p>
                  </div>
                </div>
              ))}
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
                featured-image
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
