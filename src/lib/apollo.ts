import { ApolloClient, InMemoryCache } from "@apollo/client";

const CONTENT_API = 'https://api-sa-east-1.graphcms.com/v2/cl4nmh42g0jsz01xm0zjt34mu/master';

export const client = new ApolloClient({
  uri: CONTENT_API,
  cache: new InMemoryCache()
})