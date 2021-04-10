import { action, extendObservable } from 'mobx';
import storeAction from '@store/storeAction';
import { callLoginUser, callSignUpUser, callVerifyAuth } from '@api';
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
    currentStep: 'UserInfo',
    avatar: '',
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
        const res = await callLoginUser({ phone });
        this.assignData({ ...res.data });
        if (res.status === 200) {
            AsyncStorage.setItem('userId', res.data.id);
            AsyncStorage.setItem('token', res.data.token);
            if (!res.userInfo.verifiedDate) {
                Actions.replace('VerifyAuth');
            }
            Actions.replace('Main');
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
        console.log('nextStep');
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
                this.currentStep = 'ChooseAvatar';
                break;
            case 'ChooseAvatar':
                if (image.uri) {
                    this.handleSignUp();
                }
                break;
            default:
                break;
        }
    };
    @action handleSignUp = async () => {
        try {
            console.log('handleSignUp ');
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
                Actions.replace('VerifyAuth');
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
            console.log('ERROR!!!');
            Actions.replace('Auth');
        }
    };
    @action handleSignOut = async () => {
        console.log('handleSignOut');
        Object.keys(AllStore).forEach((storeKey) => {
            if (storeKey !== 'useStores') {
                AllStore[storeKey].reset();
            }
        });
        const asyncStorageKeys = await AsyncStorage.getAllKeys();
        if (asyncStorageKeys.length > 0) {
            AsyncStorage.clear();
        }
        Actions.replace('Auth');
    };
    @action handleSignOut = async (code) => {
        const res = callVerifyAuth({ code });
        if (res.status === 200) {
            Actions.push('Main');
        }
    };
}

export default new SignUpStore();
