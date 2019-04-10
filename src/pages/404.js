import React from 'react'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'

const NotFoundPage = () => (
  <Layout>
  <Navbar hasLightBg />
    <section className="error-container">
      <div className="error-text">
        <div className="text-large f-arnopro-r">
          It seems like the page you're looking for isn't found. 
        </div>
      </div>
    </section>  
    <Contact />
  </Layout>
)

export default NotFoundPage
