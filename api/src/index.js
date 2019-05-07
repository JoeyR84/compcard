const { GraphQLServer } = require("graphql-yoga")

let routes = [
  {
    id: "A-1",
    title: "Advanced 1",
    points: 1000,
    attempts: 0,
  },
  {
    id: "A-2",
    title: "Advanced 2",
    points: 1100,
    attempts: 0,
  },
]
let idCount = routes.length
// 2
const resolvers = {
  Query: {
    info: () => "This is the API of CompCard",
    routeList: () => routes,
  },

  Mutation: {
    route: (parent, args) => {
      const route = {
        id: `route-${idCount++}`,
        title: args.title,
        points: args.points,
        attempts: args.atempts,
      }
      routes.push(route)
      return route
    },
  },
}

// 3
const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
})
server.start(() =>
  console.log("server is up and running on port 4000, woohoo!")
)
