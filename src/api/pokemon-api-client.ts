import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { Query } from '@favware/graphql-pokemon';

export type GraphQLPokemonResponse<K extends keyof Omit<Query, '__typename'>> = {
  data: Record<K, Omit<Query[K], '__typename'>>;
};

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'https://graphqlpokemon.favware.tech/v7',
});

export const PokemonApiClient = new ApolloClient({
  cache: cache,
  link: link,

  name: 'graphql-pokemon-client',
  version: '1.0',
  queryDeduplication: false,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
});
