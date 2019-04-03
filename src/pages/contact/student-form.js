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
              <h1 className="f-arnopro-b text-medium">Let's get started</h1>
              <p className="f-nunito text-medium-small margin-bottom-2">Fill in the details to enroll in our classes</p>
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
                        name={'name'}
                        onChange={this.handleChange}
                        id={'name'}
                        required={true}
                        placeholder="First name"
                      />
                      <input
                        className="lastname input"
                        type={'text'}
                        name={'name'}
                        onChange={this.handleChange}
                        id={'name'}
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
                      name={'name'}
                      onChange={this.handleChange}
                      id={'name'}
                      required={true}
                      placeholder="School name"
                    />
                  </div>
                </div>
                <div className="subject-year-field">
                  <div className="select primary subject margin-bottom-2">
                    <select className="input">
                      <option>Subject</option>
                      <option>English</option>
                      <option>EAL</option>
                      <option>Literature</option>
                    </select>
                  </div>
                  <div className="select year margin-bottom-2">
                    <select className="input">
                      <option>Year</option>
                      <option>10</option>
                      <option>11</option>
                      <option>12</option>
                    </select>
                  </div>
                </div>
                <div className="field  margin-bottom-2">
                  <label className="label" htmlFor={'email'}>
                    
                  </label>
                  <div className="control">
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
                </div>
                <div className="marketing-field">
                  <div className="select hear margin-bottom-2">
                    <select className="input">
                    <option>How did you hear about us?</option>
                    <option>Google</option>
                    <option>Word of mouth</option>
                    <option>Social Media</option>
                    </select>
                  </div>
                  <input
                    className="others input"
                    name={'others'}
                    onChange={this.handleChange}
                    id={'others'}
                    required={true}
                    placeholder="Others (please specify)"
                  />
                </div>  
                <div className="control margin-bottom-2">
                  <textarea
                    className="textarea"
                    name={'message'}
                    onChange={this.handleChange}
                    id={'message'}
                    required={true}
                    placeholder="Message"
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