import { action, extendObservable } from 'mobx';
import storeAction from '@store/storeAction';
import { callGetUserInfo } from '@api';
import { Actions } from 'react-native-router-flux';
import AsyncStorage from '@react-native-community/async-storage';

const initState = {
    isFetching: false,
    defaultWarehouse: '',
    _id: '',
    customerNO: '',
    isOldCustomerNeedUpdateData: 0,
    email: '',
    name: '',
    gender: 1,
    birthday: '',
    phone: '',
    warehouse: [],
    wallet: {},
    id_card: '',
    bankVirtualAccount: '',
    zendeskID: '',
    created: '',
};

class InitStore extends storeAction {
    constructor() {
        super();
        this.initState = initState;
        extendObservable(this, initState);
    }

    @action init = async () => {
        const userInfoRes = await callGetUserInfo();
        if (userInfoRes?.status === 200) {
            this.assignData({ ...userInfoRes?.data?.data });
            await AsyncStorage.setItem(
                'zendeskID',
                userInfoRes?.data?.data.zendeskID,
            );
        }
    };
}

export default new InitStore();
