import React from 'react'
import Layout from '../../components/Layout'
import Navbar from '../../components/Navbar'

export default () => (
  <Layout>
    <Navbar hasLightBg />
    <section className="section" style={{marginTop: '80px', padding: '4em'}}>
      <div className="container">
        <div className="content">
          <h1 className='f-arnopro-b'>Thank you!</h1>
          <p className='f-nunito text-m'>We will get back to you shortly!</p>
        </div>
      </div>
    </section>
  </Layout>
)
