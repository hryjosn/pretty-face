import { action, extendObservable } from 'mobx';
import storeAction from '@store/storeAction';
import { callGetAllUserInfo } from '@api';
import { Actions } from 'react-native-router-flux';

const initState = {
    isFetching: false,
    userList: [],
    params: {},
};

class HomeStore extends storeAction {
    constructor() {
        super();
        this.initState = initState;
        extendObservable(this, initState);
    }

    @action init = async () => {
        this.updateData('isFetching', true);
        const userRes = await callGetAllUserInfo();
        this.assignData({ userList: userRes.users });
        this.updateData('isFetching', false);
    };
}

export default new HomeStore();
