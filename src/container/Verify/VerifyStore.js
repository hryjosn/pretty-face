import { action, extendObservable } from 'mobx';
import storeAction from '@store/storeAction';
import {
    callVerifyingUser,
    callGetIFollowedUser,
    callFollowUser,
    callUnFollowUser,
} from '@api';

const initState = {
    list: [],
    usersIFollowed: {},
};

const api = {
    list: callVerifyingUser,
};

class VerifyStore extends storeAction {
    constructor() {
        super();
        this.initState = initState;
        this.api = api;
        extendObservable(this, initState);
    }
    @action getUserIFollowed = async () => {
        const res = await callGetIFollowedUser();
        this.usersIFollowed = res.followers;
    };

    @action unFollowUser = async (userId) => {
        const res = await callUnFollowUser(userId);
        this.usersIFollowed = res.newFollowers;
    };
    @action followUser = async (userId) => {
        const res = await callFollowUser(userId);
        this.usersIFollowed = res.newFollowers;
    };
}

export default new VerifyStore();
