import { action, extendObservable } from 'mobx';
import storeAction from '@store/storeAction';
import { callGetMyShopInfo } from '@api';

const initState = {
    isFetching: false,
    address: "",
    menuItems: [],
    name: "",
    offerDay: [],
    tags: [],
    userId: "",
    _id: "",
    params: {

    },
};
const api = {
    getShopInfo: callGetMyShopInfo,
};

class ShopStore extends storeAction {
    constructor() {
        super();
        this.api = api;
        this.initState = initState;
        extendObservable(this, initState);
    }

    @action getShopInfo = async () => {
        try {
            const shopInfoRes = await this.api.getShopInfo();
            this.assignData({...shopInfoRes.data})

        } catch (error) {
            console.error(error);
        }
    };

}

export default new ShopStore();
