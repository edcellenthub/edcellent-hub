import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Contact from '../components/Contact'
import HeroVideo from '../components/HeroVideo'
import Navbar from '../components/Navbar'
import IndexBlogRoll from '../components/IndexBlogRoll'
import TestimonialVideo from '../components/TestimonialVid'

export const IndexPageTemplate = (
  {
    // image,
    // title,
    // heading,
    // description,
    // intro,
    // main,
    // testimonials,
    // fullImage,
    // pricing
  }
) => (
  <>
    <Navbar currentPage="home"/>
    <HeroVideo />
    <section style={{ marginTop: '100vh' }} className="landing-about-us">
      <div className="landing-about-us-philo">
        <div className="landing-philo-bait">
          <h2 className="subtitle-h2-italic">What is intelligence, really?</h2>
          <h2 className="subtitle-h2-italic">What is our role as educator?</h2>
          <h2 className="subtitle-h2-italic">
            What can we do to guarantee a more positive and inspired experience
            of student success?
          </h2>
        </div>
        <div className="landing-philo-description">
          <div className="flex-row philo-description-title">
            <h4 className="subtitle-h4 f-arnopro-b">OUR PHILOSOPHY</h4>
            <div className="title-horizontal-line" />
          </div>
          <p className="text-small justified desc">
            At Edcellent Education, we have developed a pedagogy that
            communicates the essential nature of visual and physical
            intelligence, in order to more effectively inspire a holistic
            understanding of texts, issues, speeches and comparative study. This
            is crucial to the growth of contemporary students in VCE
            (English/EAL and Literature), IB (Language and Literature) and
            middle-school English. By assimilating areas of study through a more
            visceral and organic pedagogy, we educators are empowering students
            to build empathy, critical thinking and strategic life-skills.
          </p>
          <Link className="nobox-btn" to="/about">
          LEARN MORE ABOUT US &nbsp; &#10230;
          </Link>
          {/* <button className="nobox-btn">LEARN MORE ABOUT US &nbsp; &#10230;</button> */}
        </div>
      </div>
      <div className="section-horizontal-line" />
      <div className="landing-about-us-offer">
        <h3 className="landing-darkgold-title text-center f-arnopro-b">
          WHAT WE OFFER
        </h3>
        <div className="offer-container">
          <div className="offer-1">
            <div className="offer-inner">
              <div className="offer-box flex-column flex-center front">
                <h1 className="text-center text-large f-arnopro-b">
                  One-to-one & small group coaching
                </h1>
              </div>
              <div className="offer-box back">
                <h3 className="text-medium f-arnopro-b">
                  One-to-one & small group coaching
                </h3>
                <div className="f-arnopro-r">
                  <p><span className="dot">•</span> <span>VCE English / EAL</span></p>
                  <p><span className="dot">•</span> <span>VCE English Language</span></p>
                  <p><span className="dot">•</span> <span>VCE English Literature</span></p>
                  <p><span className="dot">•</span> <span>IB Language & Literature</span></p>
                </div>
              </div>
            </div>
          </div>
          <div className="offer-2">
            <div className="offer-inner">
              <div className="offer-box flex-column flex-center front">
                <h1 className="text-center text-large f-arnopro-b">
                  Personalised school program
                </h1>
              </div>
              <div className="offer-box back">
                <h3 className="text-medium f-arnopro-b">
                  Personalised school program
                </h3>
                <div className="f-arnopro-r">
                  <p><span className="dot">•</span> <span>Incursion on VCE / IB texts</span></p>
                  <p><span className="dot">•</span> <span>Workshops for students and teachers</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <section className="landing-testimonial">
      <div
        className="landing-testimonial-container"
        style={{
          backgroundImage: `url(
                    https://www.biography.com/.image/t_share/MTM5MjAwODE0ODIzNTE1ODkx/robert_downey_jr_iron_man_3_courtesy_marvel_studios_disneyjpg.jpg
                  )`,
          backgroundPosition: `center`,
          backgroundAttachment: `fixed`
        }}
      >
        <div className="dark-overlay">
          <div className="landing-testimonial-info-box text-center f-arnopro-r">
            <h2 className="f-arnopro-s gold-color text-medium margin-bottom-1">
              Hear what our students have to say about us
            </h2>
            <button className="btn">
              WATCH VIDEO &nbsp; &nbsp;
              <i className="fas fa-caret-right" />
            </button>
          </div>
        </div>
      </div>
    </section> */}
    <TestimonialVideo />
    <IndexBlogRoll />
    <Contact />
  </>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
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
      frontmatter: PropTypes.object
    })
  })
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
