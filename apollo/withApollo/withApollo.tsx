import ApolloClient,{InMemoryCache} from 'apollo-boost';
import withApollo from 'next-with-apollo';
import config from '../../config';
import {isBrowser} from "../../libs/isBrowser/isBrowser";

export default withApollo(
  ({initialState}: any) =>
    new ApolloClient({
      ...(process.env.NODE_ENV === 'development'? {
        uri: isBrowser ? config.graphql.devClientEndpoint : config.graphql.devServerEndpoint,
      }:  {
        uri: isBrowser ? config.graphql.clientEndpoint : config.graphql.serverEndpoint,
      }),
      cache: new InMemoryCache().restore(initialState || {}),
    })
);
