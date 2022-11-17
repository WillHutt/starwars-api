// const nameFormatter = require('./utils/name');

const resolvers = {
    Person: {
        homeworld: async (id, _, { starwarsAPI }) => {
            const homeworldId = new URL(id?.homeworld).pathname.replace('/api/planets/', '')
          return await starwarsAPI.getHomeworld(homeworldId);
        },
      },
    Query: {
        person: async (_, {id}, {starwarsAPI}) => {
            return await starwarsAPI.getPerson(id);
          },
    },

  };
  
  module.exports = resolvers;