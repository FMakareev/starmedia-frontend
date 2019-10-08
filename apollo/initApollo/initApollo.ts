import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject
} from "apollo-boost";
// @ts-ignore
import {setContext} from "apollo-link-context";
import {createHttpLink} from "apollo-link-http";
import fetch from "isomorphic-unfetch";
import {isBrowser} from "../../libs/isBrowser/isBrowser";
import config from "../../config";

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;

// Polyfill fetch() on the server (used by apollo-client)
if (!isBrowser) {
  (global as any).fetch = fetch;
}

function create(initialState: any) {
  const httpLink = createHttpLink({
    fetchOptions: {
      mode: 'no-cors',
      headers: {
        'Content-Type':'application/graphql'
      }
    },
    ...(process.env.NODE_ENV === 'development'? {
      uri: isBrowser ? config.graphql.devClientEndpoint : config.graphql.devServerEndpoint,
    }:  {
      uri: isBrowser ? config.graphql.clientEndpoint : config.graphql.serverEndpoint,
    })

  });

  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient

  return new ApolloClient({
    connectToDevTools: isBrowser,
    ssrMode: !isBrowser, // Disables forceFetch on the server (so queries are only run once)
    link: httpLink,
    cache: new InMemoryCache().restore(initialState || {}),
    // @ts-ignore

  });
}

export default function initApollo(initialState: any) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!isBrowser) {
    return create(initialState);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}
