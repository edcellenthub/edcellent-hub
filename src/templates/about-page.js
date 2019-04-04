import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Contact from '../components/Contact'


export const AboutPageTemplate = ({ 
  title, content, contentComponent 
}) => (
    <div>
      <section className="about-section">
      <div className="container">
        <div className="about-container">
          <div className="mission-container">
            <div className="team-img-container">
              <img className='team-img' src="/img/Team-Formal.jpg" alt="team-photo"/>
            </div>
            <div className="mission-section">
              <h1 className="mission-title text-large f-arnopro-r margin-bottom-1">
                Our Mission
              </h1>
              <p className="text-medium-small justified">
                At Edcellent Education, we reach the needs of every student through a patient, process-driven approach because we recognise that students bring unique experiences and have particular requirements in learning.
              </p><br/>
              <p className="text-medium-small justified">
                At the same time, by communicating the integration of areas of study at IB and VCE EAL and standard English, we are able to better accommodate students by inspiring a holistic understanding of texts, issues, speech and comparative study.
              </p><br/>
              <p className="text-medium-small justified margin-bottom-2">
                The process of assimilating areas of study and linking them to contemporary parallels builds appreciation, critical thinking and strategic life-skills.
              </p>
            
            <div id="objective">
                <div className="container">
                <h3 className="title text-medium f-arnopro-r">Five Objectives</h3>
                <div className="outer-row flex-row">
                  <div className="number f-arnopro-r text-x-large">1</div>
                  <div classname="inner-row flex-row">
                    <div className="line"></div>
                    <p className="text-small">To educate and evolve the whole person</p>
                    </div>
                </div>
                <div className="outer-row flex-row">
                  <div className="number f-arnopro-r text-x-large">2</div>
                  <div classname="inner-row flex-row">
                    <div className="line"></div>
                    <p className="text-small">To develop critical and contrarian thinking as a primary life-skill
                    </p>
                    </div>
                </div>
                <div className="outer-row flex-row">
                  <div className="number f-arnopro-r text-x-large">3</div>
                  <div classname="inner-row flex-row">
                    <div className="line"></div>
                    <p className="text-small">To generate and engage creative pathways as a means of building self-esteem and identity, in order to empower discovery
                    </p>
                  </div>  
                </div>
                <div className="outer-row flex-row">
                  <div className="number f-arnopro-r text-x-large">4</div>
                  <div classname="inner-row flex-row">
                    <div className="line"></div>
                    <p className="text-small">To enable empathy-as-life-skill investigation through the acceptance of liminal and non-binary perspectives
                    </p>
                  </div>  
                </div>
                <div className="outer-row flex-row">
                  <div className="number f-arnopro-r text-x-large">5</div>
                  <div classname="inner-row flex-row">
                    <div className="line"></div>
                    <p className="text-small">To inspire curiosity and connection with the contemporary and historical world
                    </p>
                  </div> 
                </div>
              </div>
          </div>
        </div>   
              
              </div>
            </div>
          </div>
      </section>
      <Contact />
    </div>
  )


AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
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
  data: PropTypes.object.isRequired,
}

export default AboutPage

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
