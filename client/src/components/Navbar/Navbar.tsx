import React from 'react'
import Logo from '../../assets/logo.svg';

function Navbar() {
  return (
    <>
        <nav className="navbar customNav" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item">
                <img src={Logo} width="112" height="28" />
                </a>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu is-centered">
                <div className="navbar-start">
                    <a className="navbar-item has-text-white">
                        Services
                    </a>

                    <a className="navbar-item has-text-white">
                        Industries
                    </a>

                    <a className="navbar-item has-text-white">
                        Cases
                    </a>

                    <a className="navbar-item has-text-white">
                        Contact
                    </a>

            
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                        <a className="button has-background-white is-rounded letTalkButton">
                            <strong>Let's Talk</strong>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar