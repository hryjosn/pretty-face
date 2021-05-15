import { action, extendObservable } from 'mobx';
import storeAction from '@store/storeAction';
import {
    callLoginUser,
    callSignUpUser,
    callCheckFollower,
    callVerifyAuth,
} from '@api';
import { isEmail, isLength, isMobilePhone } from 'validator';
import { Platform } from 'react-native';
import { Actions } from 'react-native-router-flux';
import * as AllStore from '@store/store';
import { callGetUserInfo } from '@api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initState = {
    isFetching: false,
    userName: '',
    userId: '',
    valid: false,
    sessionToken: null,
    login_flag: false,
    currentStep: 'ChooseAvatar',
    avatar: '',
    followers: [],
    demandAmount: 0,
    publicId: '',
    email: '',
    phone: '',
    params: {
        image: '',
        publicId: '',
        userName: '',
        email: '',
        phone: '',
    },
};

class SignUpStore extends storeAction {
    constructor() {
        super();
        this.initState = initState;
        extendObservable(this, initState);
    }

    @action login = async (phone) => {
        phone = phone.replace(/^0+/, '');
        const res = await callLoginUser({ phone });
        this.assignData({ ...res.data });
        if (res.status === 200) {
            AsyncStorage.setItem('userId', res.data.id);
            AsyncStorage.setItem('token', res.data.token);
            if (res?.data?.userInfo?.verifiedDate) {
                AsyncStorage.setItem(
                    'verified',
                    res?.data?.userInfo?.verifiedDate,
                );
                Actions.replace('Init');
            } else {
                Actions.replace('Pending');
            }
        } else {
            this.paramsAssign({ phone });
            Actions.replace('SignUp');
        }
    };
    @action getUserInfo = async () => {
        const res = await callGetUserInfo();
        this.assignData({ ...res.userInfo });
    };
    @action nextStep = () => {
        const { image, userName, publicId, phone, email } = this.params;
        switch (this.currentStep) {
            case 'UserInfo':
                let validateArr = [];
                if (!userName) {
                    validateArr.push('Please enter your legal name');
                } else if (!email) {
                    validateArr.push('Please enter your email');
                } else if (!isEmail(email)) {
                    validateArr.push('Invalid E-mail');
                } else if (!publicId) {
                    validateArr.push('Please enter your publicId');
                }
                if (validateArr.length) {
                    alert(validateArr[0]);
                    return;
                }
                this.handleSignUp();

                break;
            case 'ChooseAvatar':
                if (image.uri) {
                    this.currentStep = 'UserInfo';
                }
                break;
            default:
                break;
        }
    };
    @action handleSignUp = async () => {
        this.isFetching = true;
        try {
            const { image, publicId, userName, email, phone } = this.params;
            const formData = new FormData();
            formData.append('image', {
                name: image.fileName,
                type: 'file',
                uri:
                    Platform.OS === 'android'
                        ? image.uri
                        : image.uri.replace('file://', ''),
            });
            formData.append('publicId', publicId);
            formData.append('userName', userName);
            formData.append('email', email);
            formData.append('phone', phone);
            const res = await callSignUpUser(formData);
            if (res.status === 200) {
                Actions.replace('Pending');
                AsyncStorage.setItem('token', res.data.token);
            } else {
                alert('Sign up fail');
            }
        } catch (error) {
            const { code, msg } = error.response.data;
            if (code === '10001') {
                alert('This phone was registered');
            } else if (code === '10002') {
                alert('This email was registered');
            } else if (code === '10003') {
                alert('This ID was registered');
            } else {
                alert(msg);
            }
            console.log('ERROR!!! reason:', msg);
            this.isFetching = false;

            Actions.replace('Init');
        }
        this.isFetching = false;
    };
    @action handleSignOut = async () => {
        Object.keys(AllStore).forEach((storeKey) => {
            if (storeKey !== 'useStores') {
                AllStore[storeKey].reset();
            }
        });
        const asyncStorageKeys = await AsyncStorage.getAllKeys();
        if (asyncStorageKeys.length > 0) {
            AsyncStorage.clear();
        }
        Actions.replace('Init');
    };
    @action verifyAuth = async () => {
        const res = await callVerifyAuth();
        if (res.userInfo.verifiedDate) {
            await AsyncStorage.setItem('verified', res.userInfo.verifiedDate);
            Actions.replace('Init');
        } else {
            console.log('fail');
            Actions.replace('VerifyAuth');
        }
    };
    @action checkFollower = async () => {
        const res = await callCheckFollower();
        this.assignData({ ...res.data });
        console.log('res>>', res);
        if (res.verified) {
            AsyncStorage.setItem('enoughFollower', 'true');
            Actions.replace('Init');
        } else {
            Actions.replace('Pending');
        }
    };
}

export default new SignUpStore();
