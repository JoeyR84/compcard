import React from "react"
import { Link } from "gatsby"
// import { graphql } from "gatsby"
import { Query, Mutation } from "react-apollo"
import gql from "graphql-tag"

import Layout from "../components/layout"
import SEO from "../components/seo"

// This query is executed at run time by Apollo.

const APOLLO_QUERY = gql`
  query {
    allTests {
      title
      id
    }
    routes @client {
      name
      attempts
    }
  }
`
const DECREMENT_ATTEMPTS = gql`
  mutation {
    decrementAttempts @client
  }
`
const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Link to="/login">Login page</Link>
    <Query query={APOLLO_QUERY}>
      {({ data, loading, error }) => {
        if (loading) return <span>Loading...</span>
        if (error) return <p>{error.message}</p>
        console.log(data)
        return (
          <div>
            <div>
              {data.routes.map(route => (
                <div key={route.name}>
                  <p>{route.name}</p>
                  <p>{route.attempts}</p>
                </div>
              ))}
              <Mutation mutation={DECREMENT_ATTEMPTS}>
                {decrementAttempts => (
                  <button onClick={decrementAttempts}>Decrement</button>
                )}
              </Mutation>
            </div>
          </div>
        )
      }}
    </Query>
  </Layout>
)

export default IndexPage
