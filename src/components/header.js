import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"
import { redirectTo } from "@reach/router"
import styled from "styled-components"
import Toolbar from "./Toolbar/Toolbar"
import SideDrawer from "./SideDrawer/SideDrawer"
import Backdrop from "../components/Backdrop/Backdrop"

import { AUTH_TOKEN } from "../constants"

export default class Header extends Component {
  state = {
    sideDrawerOpen: false,
  }

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }
  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN)
    let backdrop

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <Container>
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
        ) : null}
        <div style={{ height: "100%" }}>
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
        </div>
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
