import React from 'react'
import { Link, navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
import Contact from '../../components/Contact';

export default class Cameron extends React.Component {
  render() {
      return (
      <Layout>
        <section className="about-section">
            <div id="bio">
                <div className="photo-container">
                  <img src="/img/Carlyn-Fun.jpg" alt="carlyn-photo"/>
                </div>
                <div className="text-container">
                <div className="f-arnopro-b text-medium">Cameron Sievers</div>
                <div className="f-arnopro-r text-md-md margin-bottom-1">
                    Senior English Coordinator at Edcellent Education
                </div>
                <p className="text-small justified">
                    As a writer, Cameron Sievers has been shortlisted, long-listed, and staged by professional UK theatres, including the Bush Theatre, the Southwark Playhouse, and the Tristan Bates Theatre in Covent Garden. In 2013, he completed an MA in Theatre Directing in London. He has brought more than a dozen plays to full production in sixteen shows in Australia; including Harold Pinter's, The Birthday Party, for Melbourne University. In March 2018, at the Melbourne International Comedy Festival for La Mama Theatre, he staged the satirical sketch show, A Song for Simon Birmingham. More recently, he staged the devised piece, Medea - A Reasonable Woman, at the same venue. He is currently working on a film series with Underground Media. He is the Senior English Coordinator at Edcellent Education.            
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