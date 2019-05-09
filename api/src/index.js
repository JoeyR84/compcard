const { GraphQLServer } = require("graphql-yoga")

// the resolvers define the IMPLEMENTATION
const resolvers = {
  Query: {
    info: () => "This is the API of CompCard",
    routeList: (root, args, context, info) => {
      return context.prisma.routes()
    },
  },

  Mutation: {
    route: (root, args, context) => {
      return context.prisma.createRoute({
        title: args.title,
        points: args.points,
        attempts: args.attempts,
      })
    },
    // implement updateRoute mutation here
    // updateRoute: (parent, args) => {
    //   const route = {
    //     id: args.id,
    //     title: args.title,
    //     points: args.points,
    //     attempts: args.attempts,
    //   }
    //   return route
    // },
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
