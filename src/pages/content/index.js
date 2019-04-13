import React from 'react'
import Layout from '../../components/Layout'
import Navbar from '../../components/Navbar'
import Contact from '../../components/Contact'


export default class Content extends React.Component {
  state = {
    expand: false
  }

  toggleExpand = () => {
    this.setState({ expand: !this.state.expand })
  }

  render() {
    const { expand } = this.state
    return (
      <Layout>
        <Navbar  hasLightBg currentPage='content'/>
        <section className="content-index-section">
          <h2 className="f-arnopro-s text-medium dark-gold margin-bottom-2">
          The text we offer students in 2019 includes
          </h2>
          <div id="content-index">
            <div onClick={this.toggleExpand} className="content-box-1" >
              <div className="overlay">
                <div className="border">
                <h3 className="f-arnopro-s text-md-md">TEXT RESPONSE</h3>
                </div>  
              </div> 
            </div>
            <div onClick={this.toggleExpand} className="content-box-2" >
              <div className="overlay">
                <div className="border">
                <h3 className="f-arnopro-s text-md-md">COMPRATIVE TEXT RESPONSE</h3>
                </div>  
              </div>        
            </div>
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
          </section>
        <Contact />
      </Layout>
    )
  }
}
