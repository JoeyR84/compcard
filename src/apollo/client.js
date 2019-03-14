import ApolloClient from "apollo-boost"
import fetch from "isomorphic-fetch"
import { setContext } from "apollo-link-context"
import { AUTH_TOKEN } from "../constants"

import defaults from "../graphql/defaults"
import resolvers from "../graphql/resolvers"
import typeDefs from "../graphql/typeDefs"

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(AUTH_TOKEN)
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  }
})

export const client = new ApolloClient({
  uri: "http://localhost:4000",
  fetch,
  clientState: {
    defaults,
    resolvers,
    typeDefs,
  },
})

//   uri: authLink.concat("http://localhost:4000"),
