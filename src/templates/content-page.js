import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'
import ContentCard from '../components/ContentCard'
import plusIcon from '../../static/img/white_plus.svg'

export class ContentPageTemplate extends React.Component {
  state = {
    expand: false,
    boxType: ''
  }

  toggleExpand = (box = '') => {
    this.setState({
      expand: !this.state.expand,
      boxType: box
    })
  }

  chunk = (countPerRow = 3, arr) =>
    arr.reduce(
      (segments, _, index) =>
        index % countPerRow === 0
          ? [...segments, arr.slice(index, index + countPerRow)]
          : segments,
      []
    )

  render() {
    const { helmet, content } = this.props

    // console.log(this.chunk(content[0].school[0].blurbs))
    return (
      <div>
        {helmet || ''}
        <Navbar hasLightBg currentPage="content" />
        <section className="content-index-section">
          <h2 className="f-arnopro-s text-medium dark-gold margin-bottom-2">
            The text we offer students in 2019 includes
          </h2>
          <div className="content-container">
            <div id="content-index">
              {!this.state.expand ? (
                <div className="responsive-content">
                  <div
                    onClick={e => this.toggleExpand('non-comparative')}
                    className="content-box-1"
                  >
                    <div className="overlay-click">
                      <div className="border">
                        <h3 className="text-container f-arnopro-s text-md-md">
                          TEXT RESPONSE
                        </h3>
                        <div className="more-info">
                          <img src={plusIcon} data-tooltip="Click to expand" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={e => this.toggleExpand('comparative')}
                    className="content-box-2"
                  >
                    <div className="overlay-click">
                      <div className="border">
                        <h3 className="text-container f-arnopro-s text-md-md">
                          COMPRATIVE TEXT RESPONSE
                        </h3>
                        <div className="more-info">
                          <img src={plusIcon} />
                          
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-box-3">
                    <div className="overlay">
                      <div className="border">
                        <h3 className="text-container f-arnopro-s text-md-md">
                          SPEECHES WRITING MASTER CLASS
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="content-box-4">
                    <div className="overlay">
                      <div className="border">
                        <h3 className="text-container f-arnopro-s text-md-md">
                          ANALYSING ARGUMENTS
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <ContentCard
                  toggleExpand={this.toggleExpand}
                  boxType={this.state.boxType}
                  content={content}
                  chunk={this.chunk}
                />
              )}
            </div>
          </div>
        </section>
        <Contact />
      </div>
    )
  }
}

ContentPageTemplate.propTypes = {
  // name: PropTypes.string,
  //position: PropTypes.string,
  //image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  //biography: PropTypes.string,
  // ethos: PropTypes.string,
  //helmet: PropTypes.object,
}

const ContentPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  console.log(data)

  return (
    <Layout>
      <ContentPageTemplate
        helmet={<Helmet titleTemplate="%s | Content" />}
        content={frontmatter.content}
      />
    </Layout>
  )
}

ContentPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
}

export default ContentPage

export const contentPageQuery = graphql`
  query contentPageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        content {
          type
          school {
            header
            blurbs {
              title
              author
            }
          }
        }
      }
    }
  }
`
