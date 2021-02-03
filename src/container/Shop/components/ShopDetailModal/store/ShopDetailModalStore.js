import { action, extendObservable } from 'mobx';
import storeAction from '@store/storeAction';

const initState = {
    visible: false,
    params: {
        name: '',
        price: 0,
        introduction: '',
        keyWord: [],
    },
};

class ShopDetailModalStore extends storeAction {
    constructor() {
        super();
        this.initState = initState;
        extendObservable(this, initState);
    }
    @action openModal=()=>{
        this.updateData("visible",true)
    }
}

export default new ShopDetailModalStore();
