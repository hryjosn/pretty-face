import { action, extendObservable } from 'mobx';
import { useLocalObservable } from 'mobx-react-lite';
import storeAction from '@store/StoreAction';
import {
    callVerifyingUser,
    callGetIFollowedUser,
    callFollowUser,
    callUnFollowUser,
} from '@api';

const initState = {
    list: [],
    usersIFollowed: {},
};

const api = {
    list: callVerifyingUser,
};

const HomeStore = () => {
    const store = useLocalObservable(() => ({
        /*observables*/
        ...initialState,
        ...StoreAction(initialState),
    }));

    return store;
};
export default HomeStore;
