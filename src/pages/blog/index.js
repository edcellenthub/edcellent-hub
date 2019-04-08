import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import Navbar from '../../components/Navbar'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Navbar  hasLightBg currentPage='blog-index'/>
        <section className="blog-index">
          <div className="title-container">
            <h1 className="title gold-color f-arnopro-b">LATEST STORIES</h1>
          </div>
          <BlogRoll />
       </section>
      </Layout>
    )
  }
}

