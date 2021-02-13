import { extendObservable } from 'mobx';
import storeAction from '@store/storeAction';

const initState = {
    currentStep: 'PhoneAuthentication',
};

class LoginStore extends storeAction {
    constructor() {
        super();
        this.initState = initState;
        extendObservable(this, initState);
    }
}

export default new LoginStore();
