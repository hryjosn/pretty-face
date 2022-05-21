import { extendObservable } from 'mobx';
import StoreAction from '@store/StoreAction';
import { useLocalObservable } from 'mobx-react-lite';

const initialState = {
    userName: '',
    params: {
        password: 'tttttttt',
        userName: 'hryjosn',
        phone: '989807329',
        image: {},
    },
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
