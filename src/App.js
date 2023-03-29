import React from 'react';
import RootStoreContext from './store';
import SceneRouter from './container/SceneRouter';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
} from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import { setContext } from '@apollo/client/link/context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LogBox } from 'react-native';

const httpLink = createHttpLink({
    uri: 'http://localhost:4000/graphql',
});
LogBox.ignoreAllLogs();

const authLink = setContext(async (_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = await AsyncStorage.getItem('token');
    // return the headers to the context so httpLink can read them

    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    };
});
// Initialize Apollo Client
const link = createUploadLink({ uri: 'http://localhost:4000/graphql' });
const client = new ApolloClient({
    connectToDevTools: true,
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
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
