import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'

const Contact = class extends React.Component {
  render() {
    return (
        <Layout>
            <section className="visitor-redirect flex-center">
            <div className="visitor-redirect-container f-arnopro-r">
                <div className="visitor-redirect-info text-md-md f-arnopro-s text-center">
                    <p>Contact us to enquire about our range of personalised and differentiated VCE/IB educational products and services that engage studetns through visual and physical learning</p>
                </div>
                <div className="visitor-redirect-links">
                    <div className="visitor-student-container">
                        <div className="text-medium-small spaced f-arnopro-b">STUDENT</div>
                        <Link to="/contact/student-form">
                            <button class="btn-black">I'M INTERESTED &nbsp; &#10230;</button>
                        </Link>
                    </div>
                    <div className="visitor-school-container">
                        <p className="text-medium-small spaced f-arnopro-b">SCHOOL</p>
                        <Link to="/contact/school-form">
                            <button class="btn-black">I'M INTERESTED &nbsp; &#10230;</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
    )
  }
}

export default Contact
