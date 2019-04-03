import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Contact from '../components/Contact'
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
                      <p className="nunito-text-small">adjective</p>
                      <p>organic, holistic, global</p>
                  </div>
                  <div className="margin-bottom-2">
                      <p className="nunito-text-small">noun</p>
                      <p>authenticity, inspiration, insight</p>
                  </div>
                  <div className="margin-bottom-2">
                      <p className="nunito-text-small">verb</p>
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
          <div className="landing-about-us-philo">
              <div className="landing-philo-bait">
                  <h2 className="subtitle-h2-italic">What is intelligence, really?</h2>
                  <h2 className="subtitle-h2-italic">What is our role as educator?</h2>
                  <h2 className="subtitle-h2-italic">What can we do to guarantee a more positive and inspired experience of student success?</h2>
              </div>
              <div className="landing-philo-description">
                  <div className="flex-row philo-description-title" >
                      <h4 className="subtitle-h4 f-arnopro-b">OUR PHILOSOPHY</h4>
                      <div className="title-horizontal-line"></div>
                  </div>
                  <p className="text-small justified">
                      At Edcellent Education, we have developed a pedagogy that communicates the essential nature of visual and physical intelligence, in order to more effectively inspire a holistic understanding of texts, issues, speeches and comparative study. This is crucial to the growth of contemporary students in VCE (English/EAL and Literature), IB (Language and Literature) and middle-school English. By assimilating areas of study through a more visceral and organic pedagogy, we educators are empowering studetns to build empathy, critical thinking and strategic life-skills.
                  </p>
                  <button className="nobox-btn">
                      LEARN MORE  &nbsp; &#10230;
                  </button>
              </div>
          </div>
          <div className="section-horizontal-line"/>
          <div className="landing-about-us-offer">
              <h3 className="landing-darkgold-title text-center f-arnopro-b">WHAT WE OFFER</h3>
              <div className="offer-container">
                  <div className="offer-1">
                      <div className="dark-overlay padding-3">
                          <div className="offer-box flex-column flex-center">
                              <h1 className="text-center text-large f-arnopro-b">One-to-one & small group coaching</h1>
                          </div>
                      </div>
                  </div>
                  <div className="offer-2">
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
                  <h2 className="f-arnopro-s gold-color text-medium margin-bottom-1">
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
          <div className="landing-blog-title-container flex-row">
                <h4 className="subtitle-h4 f-arnopro-b">LATEST FROM OUR BLOG</h4>
                <div className="title-horizontal-line"></div>
          </div>
          <div className="landing-blog-items">
                <div className="landing-blog-item">
                  <div className="blog-img-container">
                    <img className="blog-item-image" src="/img/landing-blog-image-1.jpg" alt="blog image" />
                  </div>
                    <div className="blog-item-details padding-5 flex-column">
                        <div className="landing-blog-date flex-row">
                            <div className="date-horizontal-line"></div>
                            <p class="f-arnopro-s text-small">22 MAR 2019</p>
                        </div>
                        <h4 className="landing-blog-title f-arnopro-b margin-bottom-2">The struggle of the VCE English teacher</h4>
                        <p class="f-nunito text-small">READ MORE</p>
                    </div>
                </div>
                <div className="landing-blog-item">
                  <div className="blog-img-container">
                    <img className="blog-item-image" src="/img/landing-blog-image-2.jpg" alt="blog image" />
                  </div>
                    <div className="blog-item-details flex-column">
                        <div className="landing-blog-date flex-row">
                            <div className="date-horizontal-line"></div>
                            <p class="f-arnopro-s text-small">22 MAR 2019</p>
                        </div>
                        <h4 className="landing-blog-title f-arnopro-b margin-bottom-2">Rear Window Film Analysis: Part 1</h4>
                        <p class="f-nunito text-small margin-bottom-2">WATCH NOW</p>
                    </div>
                </div>
          </div>
          <button className="nobox-btn">
                VIEW ALL  &nbsp; &#10230;
          </button>
      </section>
      <Contact />
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
