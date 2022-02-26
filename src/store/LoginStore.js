import { extendObservable } from 'mobx';
import StoreAction from '@store/StoreAction';
import { useLocalObservable } from 'mobx-react-lite';

const initialState = {
    currentStep: 'PhoneAuthentication',
};

const LoginStore = () => {
    const store = useLocalObservable(() => ({
        /*observables*/
        ...initialState,
        ...StoreAction(initialState),
        getUserInfo() {},
    }));

    return store;
};
export default LoginStore;
