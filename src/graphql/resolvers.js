import gql from "graphql-tag"

const query = gql`
  {
    routes @client {
      attempts
    }
  }
`

export default {
  Mutation: {
    decrementAttempts: (_, params, { cache }) => {
      const attempts = cache.data.data["ROOT_QUERY.routes.0"].attempts
      console.log(attempts)
      const nextAttempts = attempts - 1
      console.log(nextAttempts)
      const data = {
        attempts: nextAttempts,
      }
      console.log(data)
      cache.writeData({ data })
      console.log(nextAttempts)
      return nextAttempts
    },
    incrementAttempts: (_, params, { cache }) => {
      const { attempts } = cache.readQuery({ query })
      const nextAttempts = attempts + 1
      const data = {
        attempts: nextAttempts,
      }
      cache.writeData({ data })
      return nextAttempts
    },
    toggleRoute: (_, variables, { cache }) => {
      const id = `Route:${variables.id}`
      const fragment = gql`
        fragment completeRoute on Route {
          completed
        }
      `
      const route = cache.readFragment({ fragment, id })
      const data = { ...route, completed: !route.completed }
      cache.writeData({ id, data })
      return null
    },
  },
}
