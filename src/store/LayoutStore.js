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
}

export default new LayoutStore();
