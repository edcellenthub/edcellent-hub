import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import jumbotron from '../../static/img/home-jumbotron.jpg'
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  author,
  authorLink,
  date,
  featuredImage
}) => {
  const PostContent = contentComponent || Content
  const bgImage = featuredImage || "/img/landing-blog-image-1.jpg"
  return (
    <div>
      <Navbar currentPage='blog-post' />
      <section className="blog-post">
        {helmet || ''}
        <div className="featured-img" style={{backgroundImage: `url('${bgImage}')`}}></div>
        <div className="blog-flex">
            <div className="blog-content content">
              <div className="columns">
                <div className="column is-10 is-offset-1">
                  <p className="text-center margin-bottom-4">BY <Link to={`/about/${authorLink}/`}><strong className="gold-color">{author.toUpperCase()}</strong></Link> <span className="text-spacing gold-color">|</span> <strong>{date.toUpperCase()}</strong></p>
                  <h1 className="text-xlarge text-center f-arnopro-r">
                    {title}
                  </h1>
                  <p>{description}</p>
                  <PostContent content={content} />
                  <div className="social-share">
                      <a href="#" target="_blank"> <i className="fab fa-facebook"></i></a>
                      <a href="#" target="_blank"><i className="fab fa-linkedin"></i></a>
                      <a href="#" target="_blank"> <i className="fab fa-twitter"></i></a>
                  </div>
                  <div className="blog-horizontal-line"></div>
                  {tags && tags.length ? (
                    <div>
                      <ul className="taglist">
                        {tags.map((tag, index) => (
                          <li key={tag + `tag`}>
                              {index === 0 ? '' : <span className='tag-divider'>|</span>} <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </div>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data
  console.log(post)
  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        date={post.frontmatter.date}
        author={post.frontmatter.author}
        featuredImage={post.frontmatter.featured_image}
        authorLink={post.frontmatter.author.toLowerCase().split(" ").join("-")}
        date={post.frontmatter.date}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "DD MMM YYYY")
        title
        description
        tags
        author
        featured_image
      }
    }
  }
`
