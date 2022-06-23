import { client } from "./lib/apollo";
import { ApolloProvider } from "@apollo/client";
import { Router } from "./Router";

function App() {
  return (
    <ApolloProvider client={client} >
      <Router />
    </ApolloProvider>
  );
}

export default App

//graphCMS clone repository: https://rseat.in/lab-graphcms