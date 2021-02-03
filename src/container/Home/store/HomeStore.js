import { action, extendObservable } from 'mobx';
import storeAction from '@store/storeAction';
import {
    callGetExchangeRate,
    callGetPersonalMessage,
    callGetPackageCount,
    callGetNews,
} from '@api';
import { Actions } from 'react-native-router-flux';

const initState = {
    isFetching: false,
    avatar: '',
    exchangeRateList: [],
    personalMessageList: [],
    newsList: [],
    packageCountObj: {},
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
        const exchangeRateRes = await callGetExchangeRate();
        const personalMessageRes = await callGetPersonalMessage();
        const packageCountRes = await callGetPackageCount();
        const newsRes = await callGetNews();
        if (exchangeRateRes?.status === 200) {
            this.updateData(
                'exchangeRateList',
                exchangeRateRes?.data?.data ?? [],
            );
        }
        if (personalMessageRes?.status === 200) {
            this.updateData(
                'personalMessageList',
                personalMessageRes?.data?.data?.rows ?? [],
            );
        }
        if (packageCountRes?.status === 200) {
            this.updateData(
                'packageCountObj',
                packageCountRes?.data?.data ?? {},
            );
        }
        if (newsRes?.status === 200) {
            this.updateData('newsList', newsRes?.data?.data?.rows ?? []);
        }
        this.updateData('isFetching', false);
    };
}

export default new HomeStore();
