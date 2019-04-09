import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import whiteLogo from '../img/logo-white.png'
import grayLogo from '../img/logo-gray.png'

const Navbar = class extends React.Component {
  state = {
    dropdown: false
  }

  toggleDropdown = () => {
    this.setState({ dropdown: !this.state.dropdown })
  }

  render() {
    const { hasLightBg, currentPage } = this.props
    const { dropdown } = this.state
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

          <div id="nav-dropdown">
            <div
              onClick={this.toggleDropdown}
              className={`navbar-burger ${dropdown &&
                'is-active'} ${!hasLightBg && 'white'}`}
            >
              <span />
              <span />
              <span />
            </div>
            {dropdown && (
              <div className="dropdown-container">
                <div className="navbar-dropdown">
                  <Link
                    className={`nav-item ${currentPage === 'home' && 'active'}`}
                    to="/"
                  >
                    <span>HOME</span>
                  </Link>
                  <Link
                    className={`nav-item ${currentPage === 'about' &&
                      'active'}`}
                    to="/about"
                  >
                    <span>ABOUT</span>
                  </Link>
                  <Link
                    className={`nav-item ${currentPage === 'contact' &&
                      'active'}`}
                    to="/contact"
                  >
                    <span>CONTACT US</span>
                  </Link>
                  <Link
                    className="nav-item"
                    to="/"
                    onClick={() => alert('Coming Soon!')}
                  >
                    PORTAL LOGIN
                  </Link>
                </div>
              </div>
            )}
          </div>

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
            <Link
              className={`nav-item ${hasLightBg && 'black'} ${currentPage ===
                'contact' && 'active'}`}
              to="/contact"
            >
              <span>CONTACT US</span>
            </Link>
            <Link
              className="nav-item-box"
              to="/"
              onClick={() => alert('Coming Soon!')}
            >
              PORTAL LOGIN
            </Link>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
