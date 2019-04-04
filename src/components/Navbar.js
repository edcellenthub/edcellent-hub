import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import whiteLogo from '../img/logo-white.png'
import grayLogo from '../img/logo-gray.png'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: 'not-active'
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active'
            })
          : this.setState({
              navBarActiveClass: 'not-active'
            })
      }
    )
  }

  render() {
    const { hasLightBg, currentPage } = this.props
    return (
      <nav className="nav-main" role="navigation" aria-label="main-navigation">
        <div className="nav-container">
          <div className="nav-logo">
            <Link to="/" className="" title="Logo">
              {hasLightBg ? (
                <img
                  src={grayLogo}
                  alt="Edcellent Digital Hub"
                  style={{ width: '130px' }}
                />
              ) : (
                <img
                  src={whiteLogo}
                  alt="Edcellent Digital Hub"
                  style={{ width: '130px' }}
                />
              )}
            </Link>
          </div>
          {/* Hamburger menu */}
          <div
            className={`navbar-burger ${this.state.navBarActiveClass}`}
            data-target="navMenu"
            onClick={() => this.toggleHamburger()}
          >
            <span />
            <span />
            <span />
          </div>
          <div id="navMenu" className={`${this.state.navBarActiveClass}`}>
            <div className="nav-items">
              <Link
                className={`nav-item ${hasLightBg && 'black'} ${currentPage ===
                  'home' && 'active'}`}
                to="/"
              >
                <span>HOME</span>
              </Link>
              <Link
                className={`nav-item ${hasLightBg && 'black'} ${currentPage ===
                  'about' && 'active'}`}
                to="/about"
              >
                <span>ABOUT</span>
              </Link>
              {/* <Link className="nav-item" to="/blog">
                          BLOG
                        </Link> */}
              <Link
                className={`nav-item ${hasLightBg && 'black'} ${currentPage ===
                  'contact' && 'active'}`}
                to="/contact"
              >
                <span>CONTACT US</span>
              </Link>
              {/* <Link className="nav-item" to="/contact/examples">
                          PREMIUM
                        </Link> */}
              <Link className="nav-item-box" to="/" onClick={() => alert('Coming Soon!')}>
                PORTAL LOGIN
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
