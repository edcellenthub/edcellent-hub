import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import Navbar from '../../components/Navbar'
import Contact from '../../components/Contact'
import TagsNav from '../../components/TagsNav'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Navbar  hasLightBg currentPage='blog-index'/>
          <TagsNav currentPage="blog" />
          <BlogRoll />
          <Contact />
      </Layout>
    )
  }
}

