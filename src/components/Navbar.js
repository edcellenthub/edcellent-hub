import React from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import logo from "../img/ed-logo.png";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
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
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            });
      }
    );
  };

  render() {
    return (
      <nav
        className="navbar"
        role="navigation"
        aria-label="main-navigation"
        style={{
            backgroundColor:'transparent',
            position: 'absolute',
            top:'0',
            left:'0',
            color: 'white !important',
            height: '150px',
            fontSize: '1.2rem',
            padding:'0 5%'
        }}
      >
          <div
              className="container"
              style={{
                 display:'flex',
                 justifyContent:'space-between'
              }}
          >
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Kaldi" style={{ width: "88px" }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
              <div className="navbar-start has-text-centered"
                style={{
                    display:'flex',
                    justifyContent:'flex-end',
                    color:'white'
                }}
              >
              <Link className="navbar-item white-color" to="/about">
                ABOUT
              </Link>
              <Link className="navbar-item" to="/blog">
                BLOG
              </Link>
              <Link className="navbar-item" to="/contact">
                CONTENT
              </Link>
              <Link className="navbar-item" to="/contact/examples">
                PREMIUM
              </Link>
              <Link className="navbar-item" to="/contact/examples">
                PORTAL LOGIN
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
