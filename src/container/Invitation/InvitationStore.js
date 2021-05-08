import { action, extendObservable } from 'mobx';
import storeAction from '@store/storeAction';
import { callSendInvitation } from '@api';
import { Actions } from 'react-native-router-flux';
import { isEmail, isLength, isMobilePhone } from 'validator';

const initState = {
    email: '',
};

class InvitationStore extends storeAction {
    constructor() {
        super();
        this.initState = initState;
        extendObservable(this, initState);
    }
    @action sendInvitation = async () => {
        this.fetching = true;
        if (!isEmail(this.email)) {
            alert('Invalid E-mail');
            this.fetching = false;
            return false;
        }
        const res = await callSendInvitation({ email: this.email });
        if (res.status === 200) {
            Actions.pop();
        }
        this.fetching = false;
    };
}

export default new InvitationStore();
