import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"
import { redirectTo } from "@reach/router"
import styled from "styled-components"
import { slide as Menu } from "react-burger-menu"

import { AUTH_TOKEN } from "../constants"

export default class Header extends Component {
  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN)

    return (
      <Container>
        <Menu>
          <a id="home" className="menu-item" href="/">
            Home
          </a>
          <a id="about" className="menu-item" href="/about">
            About
          </a>
          <a id="contact" className="menu-item" href="/contact">
            Contact
          </a>
          <a onClick={this.showSettings} className="menu-item--small" href="">
            Settings
          </a>
        </Menu>
        <Title>{this.props.siteTitle}</Title>

        {authToken ? (
          <div
            className="ml1 pointer black"
            onClick={() => {
              localStorage.removeItem(AUTH_TOKEN)
              redirectTo("/")
            }}
          >
            logout
          </div>
        ) : (
          <Link to="/login">login</Link>
        )}
        <Initials />
      </Container>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const Container = styled.div``
const Title = styled.h2``
const Initials = styled.div``
