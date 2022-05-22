import { action, extendObservable } from 'mobx';
import { useLocalObservable } from 'mobx-react-lite';
import storeAction from '@store/StoreAction';

const initialState = {
    list: [],
    usersIFollowed: {},
};

const HomeStore = () =>
    useLocalObservable(() => ({
        /*observables*/
        // ...initialState,
        // ...StoreAction(initialState),
    }));
export default HomeStore;
