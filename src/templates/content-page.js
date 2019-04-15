import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'
import ContentCard from '../components/ContentCard'

export class ContentPageTemplate extends React.Component {
  state = {
    expand: false,
    boxType: '',
  }

  toggleExpand = (box = '') => {
    this.setState({
      expand: !this.state.expand,
      boxType: box,
    })
  }

  chunk = (array) => {
    const output = []
    for(let i = 0; i < array.length; i += 3){
      output.push([array[i], array[i+1], array[i+2]].filter(i => i !== undefined))
    }
    return output
  }

  render() {
    const { helmet, content } = this.props

    console.log(this.chunk(content[0].school[0].blurbs))
    return(
      <div>
          { helmet || '' }
          <Navbar hasLightBg currentPage="content"/>
          <section className="content-index-section">
            <h2 className="f-arnopro-s text-medium dark-gold margin-bottom-2">
              The text we offer students in 2019 includes
            </h2>
            <div id="content-index">
              { !this.state.expand ? 
                <div>
                <div onClick={e => this.toggleExpand("non-comparative")} className="content-box-1" >
                  <div className="overlay">
                    <div className="border">
                    <h3 className="f-arnopro-s text-md-md">TEXT RESPONSE</h3>
                    </div>
                  </div>
                </div>
                <div onClick={e => this.toggleExpand("comparative")} className="content-box-2" >
                  <div className="overlay">
                    <div className="border">
                    <h3 className="f-arnopro-s text-md-md">COMPRATIVE TEXT RESPONSE</h3>
                    </div>
                  </div>
                </div>
                </div>
                : <ContentCard
                    toggleExpand = {this.toggleExpand}
                    boxType={this.state.boxType}
                    content={content}
                    chunk={this.chunk}
                />
              }
              <div>
                  <div className="content-box-3" >
                    <div className="overlay">
                      <div className="border">
                        <h3 className="f-arnopro-s text-md-md">SPEECHES WRITING MASTER CLASS</h3>
                      </div>
                    </div>
                  </div>
                  <div className="content-box-4" >
                    <div className="overlay">
                      <div className="border">
                        <h3 className="f-arnopro-s text-md-md">ANALYSING ARGUMENTS</h3>
                      </div>
                    </div>
                  </div>
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
        helmet={
            <Helmet titleTemplate="%s | Content"></Helmet>
        }
        content={frontmatter.content}
      />
    </Layout>
  )
}

ContentPage.propTypes = {
  data: PropTypes.shape({
      markdownRemark: PropTypes.shape({
          frontmatter: PropTypes.object,
      }),
  }),
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