import { extendObservable } from 'mobx';
import StoreAction from '@store/StoreAction';
import { useLocalObservable } from 'mobx-react-lite';

const initialState = {
    currentStep: 'PhoneAuthentication',
};

const SignUpStore = () => {
    const store = useLocalObservable(() => ({
        /*observables*/
        ...initialState,
        ...StoreAction(initialState),
    }));

    return store;
};
export default SignUpStore;
