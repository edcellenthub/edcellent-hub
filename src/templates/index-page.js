import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  main,
}) => (
  <div>
      <section className="landing-top-banner">
          <div 
            className="landing-top-banner-container"
            style={{
              backgroundImage: `url(
                https://www.biography.com/.image/t_share/MTM5MjAwODE0ODIzNTE1ODkx/robert_downey_jr_iron_man_3_courtesy_marvel_studios_disneyjpg.jpg
              )`,
              backgroundPosition: `center`,
              backgroundAttachment: `fixed`,
            }}
          >
            <div className="dark-overlay">
                <div className="landing-top-banner-info-box text-center f-arnopro-r">
                  <h1 className="f-arnopro-b landing-gold-title">
                    edcellent
                  </h1>
                  <div className="margin-bottom-2">
                      <p className="text-small">adjective</p>
                      <p>organic, holistic, global</p>
                  </div>
                  <div className="margin-bottom-2">
                      <p className="text-small">noun</p>
                      <p>authenticity, inspiration, insight</p>
                  </div>
                  <div className="margin-bottom-2">
                      <p className="text-small">verb</p>
                      <p>engage, empower, educate</p>
                  </div>
                  <button className="btn">
                      LEARN MORE &nbsp; &nbsp;<i class="fas fa-caret-right"></i>
                  </button>
                </div>
            </div>
          </div>
      </section>
      <section className="landing-about-us">
          <div className="landing-about-us-philo flex-row">
              <div className="landing-philo-bait flex-1">
                  <h2 className="subtitle-h2">What is intelligence, really?</h2>
                  <h2 className="subtitle-h2">What is our role as educator?</h2>
                  <h2 className="subtitle-h2">What can we do to guaranteea more positive and inspired experience of student success?</h2>
              </div>
              <div className="landing-philo-description flex-1">
                  <div className="flex-row philo-description-title" >
                      <h4 className="subtitle-h4 f-arnopro-b">OUR PHILOSOPHY</h4>
                      <div className="title-horizontal-line"></div>
                  </div>
                  <p className="text-medium">
                      At Edcellent Education, we have developed a pedagogy that communicates the essential nature of visual and physical intelligence, in order to more effectively inspire a holistic understanding of texts, issues, speeches and comparative study. This is crucial to the growth of contemporary students in VCE (English/EAL and Literature), IB (Language and Literature) and middle-school English. By assimilating areas of study through a more visceral and organic pedagogy, we educators are empowering studetns to build empathy, critical thinking and strategic life-skills.
                  </p>
                  <button className="nobox-btn">
                      LEARN MORE  &nbsp; &#10230;
                  </button>
              </div>
          </div>
          <div className="section-horizontal-line"/>
          <div className="landing-about-us-offer">
              <h2 className="landing-darkgold-title text-center f-arnopro-b">WHAT WE OFFER</h2>
              <div className="offer-container flex-row">
                  <div className="offer-1 flex-1">
                      <div className="dark-overlay padding-3">
                          <div className="offer-box flex-column flex-center">
                              <h1 className="text-center text-large f-arnopro-b">One-to-one & small group coaching</h1>
                          </div>
                      </div>
                  </div>
                  <div className="offer-2 flex-1">
                      <div className="dark-overlay padding-3">
                          <div className="offer-box flex-column flex-center">
                              <h1 className="text-center text-large f-arnopro-b">Personalised school program</h1>  
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <section className="landing-testimonial">
          <div 
            className="landing-testimonial-container"
            style={{
              backgroundImage: `url(
                https://www.biography.com/.image/t_share/MTM5MjAwODE0ODIzNTE1ODkx/robert_downey_jr_iron_man_3_courtesy_marvel_studios_disneyjpg.jpg
              )`,
              backgroundPosition: `center`,
              backgroundAttachment: `fixed`,
            }}
          > 
            <div className="dark-overlay">
                <div className="landing-testimonial-info-box text-center f-arnopro-r">
                  <h2 className="f-arnopro-r gold-color text-large">
                    Hear what our students have to say about us
                  </h2>
                  <button className="btn">
                     WATCH VIDEO &nbsp; &nbsp;<i class="fas fa-caret-right"></i>
                  </button>
                </div>
            </div>
          </div>
      </section>
      <section className="landing-blog">
          <div className="landing-blog-item-1">
          </div>
          <div className="landing-blog-item-2">
          </div>
      </section>
      <section className="landing-visitor-redirect">
          <div className="landing-visitor-redirect-info">
          </div>
          <div className="landing-visitor-redirect-links">
          </div>
      </section>

{/* actual site page above here */ }
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow:
              'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgb(255, 68, 0)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow:
              'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgb(255, 68, 0)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>
                <Features gridItems={intro.blurbs} />
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      See all products
                    </Link>
                  </div>
                </div>
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest stories
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Whooot
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
