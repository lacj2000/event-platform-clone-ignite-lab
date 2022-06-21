import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri:'https://api-sa-east-1.graphcms.com/v2/cl4nmh42g0jsz01xm0zjt34mu/master',
  cache: new InMemoryCache()
})