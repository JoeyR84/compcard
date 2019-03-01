export default `
  type Query {
    routes: [Route]
  }
  type Route {
    name: String
    attempts: Int
    completed: Boolean
    id: Int
  }
  type Mutation {
    toggleRoute(id: Int): Route
    decrementAttempts(unused: Boolean): Int
    incrementAttempts(unused: Boolean): Int
  }
`
// todo make appropriate fields required
