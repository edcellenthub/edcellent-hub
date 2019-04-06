import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Helmet from 'react-helmet'
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'
import Content, { HTMLContent } from '../components/Content'


export const BioPageTemplate = ({
  content,
  contentComponent,
  avatar,
  name,
  position,
  biography,
  ethos,
  helmet,
}) => {
    return (
      <div>
          <section className="about-section">
          {helmet || ''}
          <div id="bio">
              <div className="photo-container">
                <img src={avatar} alt="carlyn-photo"/>
              </div>
              <div className="text-container">
              <div className="f-arnopro-b text-medium">{name}</div>
              <div className="f-arnopro-r text-md-md margin-bottom-1">
                  {position}
              </div>
              <p className="text-small justified">
               {biography}
              </p>
              <p className="text-small justified">
               {ethos}
              </p>
              <Link to="/about">
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
    content: PropTypes.node.isRequired,
    contentComponent: PropTypes.func,
    name: PropTypes.string,
    position: PropTypes.string,
    biography: PropTypes.string,
    ethos: PropTypes.string,
    helmet: PropTypes.object,
  }

const BioPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <BioPageTemplate
        contentComponent={frontmatter.content}
        name={frontmatter.name}
        position={frontmatter.position}
        biography={frontmatter.biography}
        ethos={frontmatter.ethos}
        content={frontmatter.html}
        avatar={frontmatter.avatar}
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
      markdownRemark: PropTypes.object,
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
          avatar
          biography
          ethos
        }
      }
    }
  `
