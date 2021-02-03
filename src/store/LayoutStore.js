import { action, extendObservable } from 'mobx';
import storeAction from '@store/storeAction';

const initState = {
    ShopVisible: false,
};

class LayoutStore extends storeAction {
    constructor() {
        super();
        this.initState = initState;
        extendObservable(this, initState);
    }

    @action onChangeShop = async (e) => {
        this.updateData('ShopVisible', !this.ShopVisible);
    };
}

export default new LayoutStore();
