import React from 'react';
import RootStoreContext from './store';
import SceneRouter from './container/SceneRouter';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
console.disableYellowBox = true;
// Initialize Apollo Client
const client = new ApolloClient({
    connectToDevTools: true,
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
});
const App = () => {
    if (window.__REMOTEDEV__) {
        global.Blob = null;
    }
    console.log('client>', client);
    return (
        <ApolloProvider client={client}>
            <RootStoreContext>
                <SceneRouter />
            </RootStoreContext>
        </ApolloProvider>
    );
};

export default App;
