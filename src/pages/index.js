import React, { Component } from "react"
import { Link } from "gatsby"
// import { graphql } from "gatsby"
import { Query, Mutation } from "react-apollo"
import gql from "graphql-tag"
import Header from "../components/header"
import Layout from "../components/layout"
import SEO from "../components/seo"
import RouteList from "../components/routes/routeList"
import Login from "../components/login"
import { AUTH_TOKEN } from "../constants"

export default class IndexPage extends Component {
  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN)
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        {authToken ? <RouteList /> : <Login />}
      </Layout>
    )
  }
}
