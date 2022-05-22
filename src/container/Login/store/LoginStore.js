import { extendObservable } from 'mobx';
import StoreAction from '@store/StoreAction';
import { useLocalObservable } from 'mobx-react-lite';
import { useMutation } from '@apollo/client';

const initialState = {
    params: {
        password: 'tttttttt',
        userName: 'hryjosn',
    },
};

const LoginStore = () => {
    const store = useLocalObservable(() => ({
        /*observables*/
        ...initialState,
        ...StoreAction(initialState),
        recordUserInfo() {},
    }));

    return store;
};
export default LoginStore;
