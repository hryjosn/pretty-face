import { action, extendObservable } from 'mobx';
import { useLocalObservable } from 'mobx-react-lite';
import StoreAction from '@store/StoreAction';

const initialState = {
    list: [],
    usersIFollowed: {},
    visible: false,
};

const PostStore = () =>
    useLocalObservable(() => ({
        /*observables*/
        ...initialState,
        ...StoreAction(initialState),
    }));
export default PostStore;
