import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import Layout from '../../components/Layout'
import Navbar from '../../components/Navbar'
import Contact from '../../components/Contact'

import { ContentPageTemplate } from '../../templates/content-page';


export default class ContentPage extends React.Component {
  
  render() {
    return (
      <Layout>
        <Navbar  hasLightBg currentPage='blog'/>
        
        <Contact />
      </Layout>
    )
  }
}
