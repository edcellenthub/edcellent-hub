import React from 'react'
import { Link, navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
import Contact from '../../components/Contact';

export default class Carlyn extends React.Component {
  render() {
    return(
    <Layout>
      <section className="about-section">
          <div id="bio">
              <div className="photo-container">
                <img src="/img/Carlyn-Fun.jpg" alt="carlyn-photo"/>
              </div>
              <div className="text-container">
              <div className="f-arnopro-b text-medium">Carlyn Kang</div>
              <div className="f-arnopro-r text-md-md margin-bottom-1">
                  Founder of Edcellent Education
              </div>
              <p className="text-small justified">
              Graduated from the Master of Teaching at the University of Melbourne in 2010, Carlyn Kang has taught in various senior high schools for seven years before venturing into education start-ups. With almost a decade of VCE English and EAL teaching experience, she has developed an esteemed reputation as an inspiring educator to young people. Her dedication and determination to nurture students’ love and appreciation of the English language has enabled them to discover a passion to learn, exceeding their expectations in both academic and personal growth. Under her leadership and personalised coaching program, her students were successful TEDx speakers.
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
  </Layout>
    )
  }
}
