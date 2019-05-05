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
            <div className="flex-row flex-center margin-bottom-4 column is-10 is-offset-1">
              <div className="flex-column flex-center blog-content">
                <div id="message" className="text-center">
                <div className="border">
                  <h2 className="text-large margin-bottom-2 f-arnopro-r spaced-2">A MESSAGE FROM THE EDCELLENT TEAM</h2>
                  <div className="content-horizontal-line dark-gold"></div>
                  <h2 className="text-md-md margin-bottom-2 f-arnopro-r">The edcellent way to master VCE / IB English, EAL, Literature:</h2>
                  <br/>
                  <h2 className="text-medium dark-gold margin-bottom-2 f-arnopro-r">It all begins with Analysing Argument (AA)</h2>
                
                <div className="text-medium-small post-content justified col-md-8 col-lg-8">
                  Did you know that the Argument Analysis area of study has a far reaching skill-set that goes way beyond the AA SAC? Way beyond the VCE itself?
                  <br/><br/>
                  Okay, let's stay on the ground for now. The skills you learn in VCE AA SAC preparation are also essential in the development of your VCE Oral Presentation SAC.
                  <br/><br/>
                  For those doing standard English, here is a handsome tip: your VCE Creative SAC can also - you guessed it - utilise the skills developed in AA SAC preparation, because your creative response can easily be a piece of persuasion. Doubling up in this way makes a lot of sense, right? Doing two SACs that are essentially the same (it's almost cheating!)
                  <br/><br/>
                  By the way, all the general knowledge you gained from AA can be used to enhance your ability to handle the Text Response AND Comparative Text Response SAC.
                  <br/><br/>
                  Then, of course, there's the exam - one third of your entire exam is devoted to the AA area of study. Did we mention how ATAR scores are heavily weighted based on your performance in, that's right, the exam? Exam anyone? Exam everyone!
                  <br/><br/>
                  It is clear that AA draws upon a consistent skill-set that is applied to VCE English / EAL across the year.
                  <br/><br/>
                  So why wouldn't you want to become a little AA master? An all rounder?
                  <br/><br/>
                  As for the 'way beyond the VCE itself' claim? You will always need to enter a room and deliver a compelling point of view, to a potentially hostile audience - no matter what your chosen occupation happens to be.
                  <br/><br/>
                  You will also need to be able to discern how that other person, who has just entered the hostile room, is manipulating the audience (like you just did!).
                  <br/><br/>
                  Take the stress out of VCE planning with this strategic approach to English / EAL.
                  Join Edcellent today, and become the AA master.
                  <br/><br/>
                </div>
                </div>
                </div>
              </div>
          </div>
          <h2 className="f-arnopro-s text-medium dark-gold margin-bottom-2">
                For VCE / IB English and EAL, the texts<br/>we offer students in 2019 include:
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
                          COMPARATIVE TEXT RESPONSE
                        </h3>
                        <div className="more-info">
                          <img src={plusIcon} />

                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={e => this.toggleExpand('speech')}
                    className="content-box-3"
                  >
                    <div className="overlay-click">
                      <div className="border">
                        <h3 className="text-container f-arnopro-s text-md-md">
                            SPEECH WRITING MASTER CLASS
                        </h3>
                        <div className="more-info">
                          <img src={plusIcon} />

                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={e => this.toggleExpand('argument')}
                    className="content-box-4"
                  >
                    <div className="overlay-click">
                      <div className="border">
                        <h3 className="text-container f-arnopro-s text-md-md">
                          ARGUMENT ANALYSIS
                        </h3>
                        <div className="more-info">
                          <img src={plusIcon} />
                      </div>
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
          problem
          solution
         }
      }
    }
  }
`
