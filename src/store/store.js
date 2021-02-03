/** 此處定義全部的 store */
import React from 'react';
import HomeStore from '@container/Home/store/HomeStore';
import LoginStore from '@store/LoginStore.js';
import SignUpStore from '@container/SignUp/store/SignUpStore.js';
import ShopStore from '@container/Shop/ShopStore.js';
import ShopDetailModalStore from '@container/Shop/components/ShopDetailModal/store/ShopDetailModalStore.js';

import { MobXProviderContext } from 'mobx-react';

function useStores() {
    return React.useContext(MobXProviderContext);
}

export { useStores, HomeStore, LoginStore, SignUpStore, ShopDetailModalStore, ShopStore };
