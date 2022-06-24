import { ApolloClient, InMemoryCache, DefaultOptions } from "@apollo/client";

const defaultOptions: DefaultOptions = {};

// typePolicies
const typePolicies = {};

export const client = new ApolloClient({
  uri: import.meta.env.VITE_API_ACCESS_URI,
  headers:{
    'Authorization': `Bearer ${import.meta.env.VITE_API_ACCESS_CONTENT}`
  },
  cache: new InMemoryCache({
    typePolicies: typePolicies
  }),
  defaultOptions: defaultOptions,
})

