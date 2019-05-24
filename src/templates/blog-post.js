import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import { FacebookProvider, Share} from 'react-facebook'

import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  subheading,
  helmet,
  author,
  authorLink,
  date,
  featuredImage
}) => {
  const PostContent = contentComponent || Content
  const bgImage = featuredImage.childImageSharp.fluid.src || "/img/landing-blog-image-1.jpg"
  console.log("bgImage: ", bgImage )
  return (
    <div>
      <Navbar currentPage='blog-post' />
      <section id="blog-post">
        {helmet || ''}
        <div className="img-overlay"></div>
          <div className="featured-img" style={{backgroundImage: `url('${bgImage}')`}}></div>

        <div className="blog-flex">
            <div className="blog-content content">
                  <p className="credentials text-small text-center spaced">BY &nbsp;
                    <Link to={`/about/${authorLink}/`}>
                      <strong className="text-small gold-color spaced">{author.toUpperCase()}</strong>
                    </Link><div className="break"><br /></div>
                      <span className="text-spacing gold-color">|</span>
                        <strong>{date.toUpperCase()}</strong>
                  </p>
                  <div className="text-large text-center f-arnopro-r margin-bottom-2">
                    {title}
                  </div>
                  <p className="f-arnopro-s text-md-md">{description}</p>                  
                  <p className="f-nunito text-m"><strong>{subheading}</strong></p>
                  <PostContent className="post-content justified" content={content} />
                  <div className="social-share">
                      <FacebookProvider appId="388374888680676">
                          <Share href={ typeof window !== 'undefined' ? window.location.href : "#"}>
                              {({ handleClick, loading }) => (
                               <i style={{fontSize:"1.2rem"}} className="dark-gold fab fa-facebook" onClick={handleClick}></i>
                                                     )}
                  </Share>
                      </FacebookProvider>
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
      </section>
      <Contact />
    </div>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  subheading: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data
  console.log(post)
  console.log(post.frontmatter.subtitle)
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
            <meta property="og:type" content="blog" />
            <meta property="og:title" content={`${post.frontmatter.title}`} />
            <meta property="og:description" content={`${post.frontmatter.description}`} />
            <meta property="og:image" content={`${post.frontmatter.featured_image.childImageSharp.fluid.src}`} />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}        
        subheading={post.frontmatter.subheading}        
        date={post.frontmatter.date}
        author={post.frontmatter.author}
        featuredImage={post.frontmatter.featured_image}
        authorLink={post.frontmatter.author.toLowerCase().split(" ").join("-")}
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
        subheading
        tags
        author
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
`
