import React from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import logo from "../img/logo-white.png";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "not-active",
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: "not-active"
            });
      }
    );
  };

  render() {
    return (
        <nav
          className="nav-main"
          role="navigation"
          aria-label="main-navigation"
        >
            <div className="nav-container">
                <div className="nav-logo">
                  <Link to="/" className="" title="Logo">
                    <img src={logo} alt="Edcellent Digital Hub" style={{ width: "130px" }} />
                  </Link>
                </div>
                {/* Hamburger menu */}
                  <div
                  className={`navbar-burger ${this.state.navBarActiveClass}`}
                  data-target="navMenu"
                  onClick={() => this.toggleHamburger()}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                <div id="navMenu" className={`${this.state.navBarActiveClass}`} >
                    <div className="nav-items">
                        <Link className="nav-item" to="/about">
                          ABOUT
                        </Link>
                        <Link className="nav-item" to="/blog">
                          BLOG
                        </Link>
                        <Link className="nav-item" to="/contact">
                          CONTENT
                        </Link>
                        <Link className="nav-item" to="/contact/examples">
                          PREMIUM
                        </Link>
                        <Link className="nav-item-box" to="/contact/examples">
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
