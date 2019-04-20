import React from "react"
import { Link } from "gatsby"
// import { graphql } from "gatsby"
import { Query, Mutation } from "react-apollo"
import gql from "graphql-tag"
import Header from "../components/header"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
  </Layout>
)

export default IndexPage
