import React from 'react';
import { Provider } from 'mobx-react';
import * as stores from './store';
import SceneRouter from './container/SceneRouter';
const App = () => {
    if (window.__REMOTEDEV__) {
        global.Blob = null;
    }
    return (
        <Provider {...stores}>
            <SceneRouter />
        </Provider>
    );
};

export default App;
