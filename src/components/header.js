import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"
import { redirectTo } from "@reach/router"
import styled from "styled-components"

import { AUTH_TOKEN } from "../constants"

export default class Header extends Component {
  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN)

    return (
      <Container>
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
        ) : null}
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
