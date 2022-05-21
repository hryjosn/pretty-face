import React from 'react';
import RootStoreContext from './store';
import SceneRouter from './container/SceneRouter';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import fetch from 'unfetch';

console.disableYellowBox = true;
// Initialize Apollo Client
const link = createUploadLink({ uri: 'http://localhost:4000/graphql', fetch });
const client = new ApolloClient({
    connectToDevTools: true,
    cache: new InMemoryCache(),
    uri: 'http://localhost:4000/graphql',

    // link,
});
const App = () => {
    if (window.__REMOTEDEV__) {
        global.Blob = null;
    }

    return (
        <ApolloProvider client={client}>
            <RootStoreContext>
                <SceneRouter />
            </RootStoreContext>
        </ApolloProvider>
    );
};

export default App;
