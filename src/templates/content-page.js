import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'

const ContentPageTemplate = ({
  description,
  category,
  title,
  author,
  helmet,
  }) => {
    return(
      <div>
      <Navbar hasLightBg currentPage="content"/>
        <section className="section">
          {helmet || ''}
            <div id="content-pg">
              <div className="tr-container">
                <h2 className="f-arnopro-s text-medium dark-gold margin-bottom-2">
                The text we offer students in 2019 includes
                </h2>
                  <table className="table">
                    <div className="table-container">
                      <tr >
                        <td colspan="3" className="category f-arnopro-b spaced text-md">TEXT RESPONSE</td>
                      </tr>    
                      <tr>
                        <td colspan="3" className="subtitle text-small">Senior High School Year 11 & 12</td>
                      </tr>
                      <tbody>
                        <tr className="row">
                          <td className='col'>
                            <div className="f-arnopro-r text-md-md">Rear Window</div><br/>
                            <span className="f-nunito text-small">Alfred Hitchcock</span>
                          </td> 
                          <td className='col'>
                            <div className="f-arnopro-r text-md-md">Women of Troy</div><br/>
                            <span className="f-nunito text-small">Euripides</span>
                          </td> 
                          <td className='col'>
                            <div className="f-arnopro-r text-md-md">Measure for Measure</div><br/>
                            <span className="f-nunito text-small">William Shaespeare</span>
                          </td> 
                        </tr>
                        <tr className="row">
                          <td className='col'>
                            <div className="f-arnopro-r text-md-md">The Lieutenent</div><br/>
                            <span className="f-nunito text-small">Kate Grenville</span>
                          </td> 
                          <td className='col'>
                            <div className="f-arnopro-r text-md-md">Nine Days</div><br/>
                            <span className="f-nunito text-small">Toni Jordan</span>
                          </td> 
                          <td className='col'>
                            <div className="f-arnopro-r text-md-md">King Lear</div><br/>
                            <span className="f-nunito text-small">William Shaespeare</span>
                          </td> 
                        </tr>
                        <tr className="row">
                          <td className='col'>
                            <div className="f-arnopro-r text-md-md">Medea</div><br/>
                            <span className="f-nunito text-small">Euripides</span>
                          </td> 
                          <td className='col'>
                            <div className="f-arnopro-r text-md-md">Othello</div><br/>
                            <span className="f-nunito text-small">William Shaespeare</span>
                          </td> 
                        </tr>
                        <tr className="row">
                            <td colspan="3" className="subtitle text-small">Middle School</td>
                        </tr>
                        <tr className="row">
                          <td className='col'>
                            <div className="f-arnopro-r text-md-md">Romeo & Juliet</div><br/>
                            <span className="f-nunito text-small">William Shaespear</span>
                          </td> 
                          <td className='col'>
                            <div className="f-arnopro-r text-md-md">Macbeth</div><br/>
                            <span className="f-nunito text-small">William Shaespeare</span>
                          </td> 
                          <td className='col'>
                            <div className="f-arnopro-r text-md-md">Hamlet</div><br/>
                            <span className="f-nunito text-small">William Shaespeare</span>
                          </td> 
                        </tr>
                      </tbody>
                    </div>
                  </table>
                </div>
              </div>
            </section>
            <Contact />
        </div>
      )
  }

 ContentPageTemplate.propTypes = {
      category: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.string,
      helmet: PropTypes.object,
  }
  
  const ContentPage = ({ data }) => {
    const { markdownRemark: post } = data

    return (
      <Layout>
        <ContentPageTemplate
          content={post.html}
          description={post.frontmatter.description}
          helmet={
              <Helmet titleTemplate="%s | Content">
              <title>{`${post.frontmatter.category}`}</title>
              <meta
                name="titles"
                content={`${post.frontmatter.title}`}
              />
            </Helmet>
          }
          category={post.frontmatter.category}
          title={post.frontmatter.title}
          author={post.frontmatter.author}
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
        query ContentPageTemplate {
            markdownRemark(frontmatter: { templateKey: { eq: "content-page" } }) {
            frontmatter {
                description
                name
                title
                author
          }
        }
      }
    `