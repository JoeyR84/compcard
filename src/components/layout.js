import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Header from "./header"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Container>
        <Header />
        <main>{children}</main>
      </Container>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const Container = styled.div`
  padding: 20px;
  height: 100%;
`

export default Layout
