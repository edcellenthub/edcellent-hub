import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'

class AboutPageTemplate extends React.Component {
  state = {
    banner: '/img/Team-Formal.jpg',
    carlyn: '/img/Carlyn-Formal.jpg',
    cameron: '/img/Cameron-Formal.jpg',
    tom: '/img/Tom-Formal.jpg'
  }

  render() {
    return (
      <div>
        <Navbar hasLightBg currentPage='about' />
        <section className="about-section">
          <div className="container">
            <div className="about-container">
              <div id="mission">
                <div className="team-img-container">
                  <img
                    className="team-img"
                    src={this.state.banner}
                    alt="team-photo"
                    onMouseEnter={() => {
                      this.setState({
                        banner: '/img/Team-Fun.jpg'
                      })
                    }}
                    onMouseOut={() => {
                      this.setState({
                        banner: '/img/Team-Formal.jpg'
                      })
                    }}
                  />
                </div>
                <div className="text-container">
                  <h1 className="title text-large f-arnopro-r margin-bottom-1">
                    Our Mission
                  </h1>
                  <p className="text-m justified">
                    At Edcellent Education, we reach the needs of every student
                    through a patient, process-driven approach because we
                    recognise that students bring unique experiences and have
                    particular requirements in learning.
                  </p>
                  <br />
                  <p className="text-m justified">
                    At the same time, by communicating the integration of areas
                    of study at IB and VCE EAL and standard English, we are able
                    to better accommodate students by inspiring a holistic
                    understanding of texts, issues, speech and comparative
                    study.
                  </p>
                  <br />
                  <p className="text-m justified margin-bottom-2">
                    The process of assimilating areas of study and linking them
                    to contemporary parallels builds appreciation, critical
                    thinking and strategic life-skills.
                  </p>
                  <div id="objective">
                    <div className="container">
                      <h3 className="title text-md f-arnopro-r">
                        Five Objectives
                      </h3>
                      <div className="outer-row">
                        <div className="number f-arnopro-r text-x-large">1</div>
                        <div className="inner-row">
                          <div className="line" />
                          <p className="text-m">
                            To educate and evolve the whole person
                          </p>
                        </div>
                      </div>
                      <div className="outer-row">
                        <div className="number f-arnopro-r text-x-large">2</div>
                        <div className="inner-row">
                          <div className="line" />
                          <p className="text-m">
                            To develop critical and contrarian thinking as a
                            primary life-skill
                          </p>
                        </div>
                      </div>
                      <div className="outer-row">
                        <div className="number f-arnopro-r text-x-large">3</div>
                        <div className="inner-row">
                          <div className="line" />
                          <p className="text-m">
                            To generate and engage creative pathways as a means
                            of building self-esteem and identity, in order to
                            empower discovery
                          </p>
                        </div>
                      </div>
                      <div className="outer-row">
                        <div className="number f-arnopro-r text-x-large">4</div>
                        <div className="inner-row">
                          <div className="line" />
                          <p className="text-m">
                            To enable empathy-as-life-skill investigation
                            through the acceptance of liminal and non-binary
                            perspectives
                          </p>
                        </div>
                      </div>
                      <div className="outer-row">
                        <div className="number f-arnopro-r text-x-large">5</div>
                        <div className="inner-row">
                          <div className="line" />
                          <p className="text-m">
                            To inspire curiosity and connection with the
                            contemporary and historical world
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="team">
                <div className="title-container margin-bottom-2">
                  <div className="f-arnopro-b subtitle-h4">
                    THE EDCELLENT TEAM
                  </div>
                  <div className="title-horizontal-line" />
                </div>
                <div id="carlyn">
                  <div className="photo-container">
                    <img
                      src={this.state.carlyn}
                      alt="carlyn-photo"
                      onMouseEnter={() => {
                        this.setState({
                          carlyn: '/img/Carlyn-Fun.jpg'
                        })
                      }}
                      onMouseOut={() => {
                        this.setState({
                          carlyn: '/img/Carlyn-Formal.jpg'
                        })
                      }}
                    />
                    <div className="bio-btn">
                      <Link to="/about/carlyn/">
                        {/* <button className="nobox-btn">
                          READ HER BIO &nbsp; &#10230;
                        </button> */}
                      </Link>
                    </div>
                  </div>
                  <div className="text-container">
                    <div
                      id="carlyn-quick-fix"
                      className="f-arnopro-b text-medium"
                    >
                      Carlyn Kang
                    </div>
                    <div className="f-arnopro-r text-md-md margin-bottom-1">
                      Founder of Edcellent Education
                    </div>
                    <div className="ethos">
                      <p className="blahblah">
                        As parents, teachers and students, how often do we ask
                        ourselves these questions:
                      </p>
                      <br />
                      <p className="f-arnopro-i">
                        <strong>Why</strong> am I doing what I am doing? <br />
                        <strong>How</strong> often do we find joy in what we do?{' '}
                        <br />
                        <strong>What</strong> am I really learning? <br />
                      </p>
                      <br />
                      <p className="blahblah justified">
                        Education in the 21st century has, sadly, shifted the
                        attention of many of our students, parents and teachers
                        to a regimented result-driven learning and teaching
                        process. At school, students are given every opportunity
                        to acquire knowledge and skills, yet many struggle to
                        form an authentic understanding of the content taught.
                        The problem lies in the way we perceive knowledge and
                        skills as educators. We fail to recognise the value of
                        knowledge as a process rather than an answer. As a
                        result, we become accustomed to a result-focused
                        pedagogy that yields little or no lifelong success, joy
                        or fulfilment.
                      </p>
                      <br />
                      <p className="blahblah justified">
                        From a passionate educator’s perspective, I believe that
                        success comes from a patience-driven process that
                        focuses on the authentic and purposeful engagement with
                        the content. It is through communicating and nurturing
                        one’s mental agility; one develops passion for, and an
                        insight into the subject learnt. The value of learning
                        becomes pivotal to personal growth beyond the academic
                        sphere. My dedication to developing a process-driven
                        pedagogy has led me to found Edcellent Education as an
                        educational hub. Edcellent is inspired to empower
                        individuals to pursue self-awareness and lifelong
                        learning, through cultivating creative and critical
                        thinking skills as a primary life-skill.
                      </p>
                    </div>
                  </div>
                </div>
                <div id="cameron">
                  <div className="photo-container">
                    <img
                      src={this.state.cameron}
                      alt="cameron-photo"
                      onMouseEnter={() => {
                        this.setState({
                          cameron: '/img/Cameron-Fun.jpg'
                        })
                      }}
                      onMouseOut={() => {
                        this.setState({
                          cameron: '/img/Cameron-Formal.jpg'
                        })
                      }}
                    />
                  </div>
                  <div className="text-container">
                    <div className="f-arnopro-b text-medium">
                      Cameron Sievers
                    </div>
                    <div className="f-arnopro-r text-medium-small margin-bottom-1">
                      Senior English Coordinator at Edcellent Education
                    </div>
                    <p className="blahblah justified">
                      From the perspective of a VCE English teacher, with
                      fifteen years in the job and a career in theatre
                      directing, playwriting and film-making, the challenge is
                      to ensure that students are inspired to actively perceive
                      the integration of areas of study, as a means of making
                      sense of the subject and its application to the world,
                      both past and present (film study embodies an obvious
                      crossover to the analysis of visual content in argument
                      analysis). In addition, high achievement and human
                      empowerment often require the opportunity to reach beyond
                      conventional wisdom, as a means of generating unique and
                      personal, but no less credible responses. It is the
                      ability to think, to have empathy, and to walk into a
                      potentially hostile room to present a point of view that
                      are arguably the most important life skills VCE English
                      imparts. As a passionate advocate for and active
                      participant in the construction and presentation of the
                      English language, it is clear to me that the fight for the
                      preservation of language is at a delicate evolutionary
                      stage. Those who can communicate the life skills of
                      speaking, listening, reading and writing will be empowered
                      to inspire future generations.
                    </p>
                    <Link to="/about/cameron/">
                      {/* <button className="nobox-btn">
                        READ HIS BIO &nbsp; &#10230;
                      </button> */}
                    </Link>
                  </div>
                </div>
                <div id="tom">
                  <div className="photo-container">
                    <img
                      src={this.state.tom}
                      alt="tom-photo"
                      onMouseEnter={() => {
                        this.setState({
                          tom: '/img/Tom-Fun.jpg'
                        })
                      }}
                      onMouseOut={() => {
                        this.setState({
                          tom: '/img/Tom-Formal.jpg'
                        })
                      }}
                    />
                  </div>
                  <div className="text-container">
                    <div className="f-arnopro-b text-medium">Tom Hoy</div>
                    <div className="f-arnopro-r text-medium-small margin-bottom-1">
                      Senior English Language and Literature at Edcellent
                      Education
                    </div>
                    <p className="blahblah justified">
                      Language is obviously amongst the most profound and
                      necessary of the forces that shape our lives and thought.
                      Language, as has so often been said, is power. A critical
                      examination of the ways in which it is constructed and
                      used is essential, both as a defence against the
                      blandishments of bogus ideas and as a source of
                      intellectual pleasure in itself. This pleasure can be a
                      stimulus to intellectual curiosity and achievement, and
                      perhaps even to a more empathetic identification with its
                      manifold users. With thirty years as a teacher and
                      researcher, Dr Hoy is a communicator who has a passion for
                      and a pleasure in language. His aim is to inspire his
                      students to share that passion and pleasure - firstly, so
                      that they can improve their grades but, more importantly,
                      for the enrichment of their lives and thinking.{' '}
                    </p>
                    <Link to="/about/tom/">
                      {/* <button className="nobox-btn">
                        READ HIS BIO &nbsp; &#10230;
                      </button> */}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Contact />
      </div>
    )
  }
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
}

const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={frontmatter.content}
        title={frontmatter.title}
        content={frontmatter.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired
}

export default AboutPage

export { AboutPageTemplate }

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
