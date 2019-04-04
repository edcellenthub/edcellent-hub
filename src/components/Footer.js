import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-darkgrey has-text-white-ter flex-column">
        <div className="container display-column flex-column">
          <div className="footer-contact space-between margin-bottom-8">
            <div className="footer-address">
              <p className=" spaced gold-color f-nunito margin-bottom-1">
                ADDRESS
              </p>
              <p className="text-md f-arnopro-r">CBD Campus</p>
              <p className="text-md f-arnopro-r margin-bottom-2">
                Level 4, 180 Bourke Street, Melbourne, Victoria 3000, Australia
              </p>
              <p className="text-md f-arnopro-r">Boxhill Campus</p>
              <p className="text-md f-arnopro-r">
                5 Court Street, Box Hill, Victoria 3128, Australia
              </p>
            </div>
            <div className="footer-phone-email flex-column">
              <div className="footer-phone margin-bottom-1">
                <p className=" spaced f-nunito gold-color margin-bottom-1">
                  PHONE
                </p>
                <p className="text-md f-arnopro-r">+61 417 313 116</p>
              </div>
              <div className="footer-email">
                <p className=" spaced f-nunito gold-color margin-bottom-1">
                  EMAIL
                </p>
                <p className="text-md f-arnopro-r">carlynk@edcellent.com</p>
              </div>
            </div>
          </div>
          <div className="section-horizontal-line margin-bottom-2" />
          <div className="footer-links space-between margin-bottom-12">
            <div className="footer-links-about-us">
              <p className=" spaced gold-color f-nunati margin-bottom-2">
                ABOUT EDCELLENT
              </p>
              <p className="text-medium-small f-arnopro-r margin-bottom-2">
                Our Mission & Our Team
              </p>
              <p className="text-medium-small f-arnopro-r margin-bottom-2">
                Our Students
              </p>
            </div>
            <div className="footer-links-offers">
              <p className=" spaced gold-color f-nunati margin-bottom-2">
                OUR OFFERS
              </p>
              <p className="text-medium-small f-arnopro-r margin-bottom-2">
                One-to-one & small group coaching
              </p>
              <p className="text-medium-small f-arnopro-r margin-bottom-2">
                Personalised School Program
              </p>
            </div>
            <div className="footer-links-content">
              <p className=" spaced gold-color f-nunati margin-bottom-2">
                CONTENT
              </p>
              <p className="text-medium-small f-arnopro-r margin-bottom-2">Medea</p>
              <p className="text-medium-small f-arnopro-r margin-bottom-2">
                Romeo & Juliet
              </p>
              <p className="text-medium-small f-arnopro-r margin-bottom-2">Macbeth</p>
              <p className="text-medium-small f-arnopro-r margin-bottom-2">Rear Window</p>
            </div>
            <div className="footer-links-social">
              <p className=" spaced gold-color f-nunati margin-bottom-2">
                WHERE TO FIND US
              </p>
              <p className="text-medium-small f-arnopro-r margin-bottom-2">Facebook</p>
              <p className="text-medium-small f-arnopro-r margin-bottom-2">Youtube</p>
            </div>
          </div>
          <div className="footer-copyright flex-row flex-center">
            <p
              style={{ color: '#b7b7b7' }}
              className="text-small f-nunati spaced-1"
            >
              &copy; Copyright Edcellent Digital Hub 2019. All rigths reserved.
            </p>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
