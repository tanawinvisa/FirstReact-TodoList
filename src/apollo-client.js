import { ApolloClient, InMemoryCache } from '@apollo/client';

const cache = new InMemoryCache();

export default new ApolloClient({
  // Provide required constructor fields
  cache: cache,
  uri: 'https://kpm-service.konsys.co/graphql',
  headers: {
    authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjOWY4MWIyNi05YjE5LTQyMTItODJiNS00MGQwZTQ5NzY1ZDEiLCJmaXJzdG5hbWUiOiJTdXBhc2l0IiwibGFzdG5hbWUiOiJDaGFudHJhbm9uIiwiZW1haWwiOiJzdXBhc2l0QGtvbnN5cy5jbyIsInBvc2l0aW9uIjoi4Lib4Lij4Liw4LiY4Liy4LiZ4LmA4LiI4LmJ4Liy4Lir4LiZ4LmJ4Liy4LiX4Li14LmI4Lia4Lij4Li04Lir4Liy4LijIiwiZGVwYXJ0bWVudCI6IuC4hOC4k-C4sOC4geC4o-C4o-C4oeC4geC4suC4o-C4muC4o-C4tOC4q-C4suC4oyIsInJvbGUiOiLguJzguLnguYnguJTguLnguYHguKXguKPguLDguJrguJrguKrguLnguIfguKrguLjguJQiLCJpYXQiOjE2ODgxMTA4MzZ9.Lm68qC0bPXAP4atS4wFDQkET1bmUiuMLLpe9aRmLoYsr9eOld53Mm09MN0dFkpWRlHZqOY-Gg27SzEMuMXfZriEo0wqHD0N0n7vjVYPGvZgO9uDeqyizZmjoIW0EG3VbbsZXHiLScZAGJLInpwA7Sohd95I6wW6HMpOsz-lU0wg',
  },

  // Provide some optional constructor fields
  name: 'react-web-client',
  version: '1.3',
  queryDeduplication: false,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
});