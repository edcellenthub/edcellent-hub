import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter flex-column flex-center">
          <div className="container display-column flex-column flex-center">
              <div className="footer-contact flex-row space-between margin-botto-8">
                    <div className="footer-address">
                        <p className="text-medium-small gold-color f-nunito margin-bottom-2">ADDRESS</p>
                        <p className="text-medium f-arnopro-b">PO BOX 5 Geelong. Victoria 3220 Australia</p>
                    </div>
                    <div className="footer-phone">
                        <p className="text-medium-small f-nunito gold-color margin-bottom-2">PHONE</p>
                        <p className="text-medium f-arnopro-b">+61 352 263 111</p>
                    </div>
                    <div className="footer-email">
                        <p className="text-medium-small f-nunito gold-color margin-bottom-2">EMAIL</p>
                        <p className="text-medium f-arnopro-b">info@edcellent.vic.au</p>
                    </div>
              </div>
              <div className="section-horizontal-line margin-bottom-8">
              </div>
              <div className="footer-links flex-row space-between margin-bottom-15">
                    <div className="footer-links-about-us width-20">
                        <p className="text-medium-small gold-color f-nunati margin-bottom-4">ABOUT EDCELLENT</p>
                        <p className="text-medium f-arnopro-r margin-bottom-4">Our Vision & Mission</p>
                        <p className="text-medium f-arnopro-r margin-bottom-4">Our Pedagogy</p>
                    </div>
                    <div className="footer-link-offers width-20">
                        <p className="text-medium-small gold-color f-nunati margin-bottom-4">OUR OFFERS</p>
                        <p className="text-medium f-arnopro-r margin-bottom-4">One-to-one & small group coaching</p>
                        <p className="text-medium f-arnopro-r margin-bottom-4">Personalised School Program</p>
                    </div>
                    <div className="footer-links-content width-20">
                        <p className="text-medium-small gold-color f-nunati margin-bottom-4">CONTENT</p>
                        <p className="text-medium f-arnopro-r margin-bottom-4">Medea</p>
                        <p className="text-medium f-arnopro-r margin-bottom-4">Romeo & Juliet</p>
                        <p className="text-medium f-arnopro-r margin-bottom-4">Macbeth</p>
                                    <p className="text-medium f-arnopro-r margin-bottom-4">Rear Window</p>
                    </div>
                    <div className="footer-links-social width-20">
                        <p className="text-medium-small gold-color f-nunati margin-bottom-4">WHERE TO FIND US</p>
                        <p className="text-medium f-arnopro-r margin-bottom-4">Facebook</p>
                        <p className="text-medium f-arnopro-r margin-bottom-4">Instagram</p>
                        <p className="text-medium f-arnopro-r margin-bottom-4">Youtube</p>
                    </div>
              </div>
              <div className="footer-copyright flex-row flex-center">
                    <p className="f-nunati text-small">&copy; Copyright Edcellent Digital Hub 2019. All rigths reserved.</p>
              </div>
          </div>
      </footer>
    )
  }
}

export default Footer
