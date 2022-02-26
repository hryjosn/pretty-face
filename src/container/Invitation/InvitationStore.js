import { action, extendObservable } from 'mobx';
import storeAction from '@store/StoreAction';
import { useLocalObservable } from 'mobx-react-lite';

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

const InvitaionStore = () => {
    const store = useLocalObservable(() => ({
        /*observables*/
        ...initialState,
        ...StoreAction(initialState),
    }));

    return store;
};
export default InvitaionStore;
