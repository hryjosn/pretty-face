import { extendObservable } from 'mobx';
import StoreAction from '@store/StoreAction';
import { useLocalObservable } from 'mobx-react-lite';

const initState = {
    currentStep: 'PhoneAuthentication',
};

const LoginStore = () => {
    const store = useLocalObservable(() => ({
        /*observables*/
        ...initialState,
        ...api,
        ...StoreAction(initialState),
    }));

    return store;
};
export default LoginStore();
