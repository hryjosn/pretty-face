import React from 'react';
import { Provider } from 'mobx-react';
import * as stores from './store';
import SceneRouter from './container/SceneRouter';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// Initialize Apollo Client
const client = new ApolloClient({
    connectToDevTools: true,
    uri: 'localhost:4000/graphql',
    cache: new InMemoryCache(),
});
const App = () => {
    if (window.__REMOTEDEV__) {
        global.Blob = null;
    }
    return (
        <ApolloProvider client={client}>
            <Provider {...stores}>
                <SceneRouter />
            </Provider>
        </ApolloProvider>
    );
};

export default App;
