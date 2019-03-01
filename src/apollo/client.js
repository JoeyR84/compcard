import ApolloClient from "apollo-boost"
import fetch from "isomorphic-fetch"

import defaults from "../graphql/defaults"
import resolvers from "../graphql/resolvers"
import typeDefs from "../graphql/typeDefs"

export const client = new ApolloClient({
  uri: "https://api.graph.cool/simple/v1/cjsl2o1ad18pg0133mazxidp6",
  fetch,
  clientState: {
    defaults,
    resolvers,
    typeDefs,
  },
})
