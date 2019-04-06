import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Helmet from 'react-helmet'
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'
import Img from "gatsby-image"

export const BioPageTemplate = ({
  image,
  name,
  position,
  biography,
  helmet,
}) => {
    return (
      <div>
          <Navbar hasLightBg currentPage='bio' />
          <section className="section">
          {helmet || ''}
          <div id="bio">
              <div className="photo-container">
                <img src={image} alt={name}/>
              </div>
              <div className="text-container">
              <div className="f-arnopro-b text-medium">{name}</div>
              <div className="f-arnopro-r text-md-md margin-bottom-1">
                  {position}
              </div>
              <p className="text-small justified">
               {biography}
              </p>
              <Link to="/about/#team">
                <button className="nobox-btn">
                    &nbsp; &#10229;  BACK TO TEAM 
                </button>
              </Link>
              </div>
            </div>
          </section>
          <Contact />
      </div>
    )
}

BioPageTemplate.propTypes = {
    name: PropTypes.string,
    position: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    biography: PropTypes.string,
    // ethos: PropTypes.string,
    helmet: PropTypes.object,
}

const BioPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const image = frontmatter.image.childImageSharp.fluid.src
  return (
    <Layout>
      <BioPageTemplate
        name={frontmatter.name}
        position={frontmatter.position}
        biography={frontmatter.biography}
        // ethos={frontmatter.ethos}
        image={image}
        helmet={
            <Helmet titleTemplate="%s | Bio">
            <title>{`${frontmatter.name}`}</title>
            <meta
              name="description"
              content={`${frontmatter.biography}`}
            />
          </Helmet>
        }
      />
    </Layout>
  )
}

BioPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
}
  
  export default BioPage
  
  export const bioPageQuery = graphql`
    query BioPageByID($id: String!) {
      markdownRemark(id: { eq: $id }) {
        id
        html
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          name
          position
          image {
              childImageSharp {
                  fluid(maxWidth: 1200, quality: 100) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
          biography

        }
      }
    }
  `
