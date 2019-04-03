import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
import Contact from '../../components/Contact';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class StudentForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      <Layout>
        <section className="section">
          <div className="form-container">
            <div className="form-content">
              <h1 className="f-arnopro-b text-medium">Get in touch with us</h1>
              <p className="f-nunito text-medium-small margin-bottom-2">Contact us to enquire about our range of personalised and differentiated VCE / IB educational products and services.</p>
              <form
                name="contact"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div classname="name-field">
                      <input
                        className="firstname input"
                        type={'text'}
                        name={'first-name'}
                        onChange={this.handleChange}
                        id={'first-name'}
                        required={true}
                        placeholder="First name"
                      />
                      <input
                        className="lastname input"
                        type={'text'}
                        name={'last-name'}
                        onChange={this.handleChange}
                        id={'last-name'}
                        required={true}
                        placeholder="Last name"
                      />
                </div>
                <div className="field">
                  <label className="label" htmlFor={'schoolname'}>
                    
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'school-name'}
                      onChange={this.handleChange}
                      id={'school-name'}
                      required={true}
                      placeholder="School name"
                    />
                  </div>
                </div>
                <div className="email-role-field">
                    <div className="email">
                    <input
                        className="input"
                        type={'email'}
                        name={'email'}
                        onChange={this.handleChange}
                        id={'email'}
                        required={true}
                        placeholder="School email"
                    />
                    </div>
                    <div className="select role">
                        <select className="input">
                        <option>Role</option>
                        <option>School Teacher</option>
                        <option>Private Tutor</option>
                        </select>
                    </div>
                </div>

                  <div className="password-field">
                    <input
                      className="input"
                      type={'text'}
                      name={'password'}
                      onChange={this.handleChange}
                      id={'password'}
                      required={true}
                      placeholder="Password must be at least 8 characters"
                    />
                    <input
                      className="input"
                      type={'text'}
                      name={'confirm-password'}
                      onChange={this.handleChange}
                      id={'confirm-password'}
                      required={true}
                      placeholder="Confirm password"
                    />
                  </div>

                
                <div className="field">
                  <button className="btn-gold" type="submit">
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
        <Contact />
      </Layout>
    )
  }
}