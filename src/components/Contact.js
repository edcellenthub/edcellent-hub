import React from 'react'
import { Link } from 'gatsby'

const Contact = class extends React.Component {
  render() {
    return (
      <section className="visitor-redirect flex-center">
        <div className="visitor-redirect-container f-arnopro-r">
          <div className="visitor-redirect-info text-m f-nunito text-center">
            <p>
              Contact us to enquire about our range of personalised and
              differentiated VCE/IB educational products and services that
              engage students through visual and physical learning.
            </p>
          </div>
          <div className="visitor-redirect-links">
            <div className="visitor-student-container">
              <div className="text-md spaced f-arnopro-b">
                STUDENT
              </div>
              <Link to="/contact/student-form">
                <button className="btn-black">
                  I'M INTERESTED &nbsp; &#10230;
                </button>
              </Link>
            </div>
            <div className="visitor-school-container">
              <p className="text-md spaced f-arnopro-b">SCHOOL</p>
              <Link to="/contact/school-form">
                <button className="btn-black">
                  I'M INTERESTED &nbsp; &#10230;
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Contact
