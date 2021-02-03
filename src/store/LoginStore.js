import { action, extendObservable } from 'mobx';
import storeAction from '@store/storeAction';
import { Actions } from 'react-native-router-flux';
import { isEmail, isMobilePhone, isLength } from 'validator';
import { callLoginUser } from '@api';
import AsyncStorage from '@react-native-community/async-storage';

const initState = {
    isFetching: false,
    userName: '',
    member_account: '',
    userId: '',
    valid: false,
    sessionToken: null,
    login_flag: false,
    avatar: '',
    userAcc: '',
    params: {
        email: '',
        password: '',
        phone: '',
    },
};

class LoginStore extends storeAction {
    constructor() {
        super();
        this.initState = initState;
        extendObservable(this, initState);
    }

    @action handleLogin = async () => {
        const { password } = this.params;
        const postData = { password };
        if (this.userAcc.indexOf('@') !== -1) {
            postData.email = this.userAcc;
        } else {
            postData.phone = this.userAcc;
        }
        const validateArr = this.validate(postData);

        if (validateArr.length > 0) {
            alert(validateArr[0]);
            return;
        }
        await this.login(postData);

    };
    @action handleSignOut = async () => {
        try {
            const asyncStorageKeys = await AsyncStorage.getAllKeys();
            if (asyncStorageKeys.length > 0) {
                AsyncStorage.clear();
            }
            Actions.replace('Auth');
        } catch (e) {
            alert('登出失敗:', e);
        }
    };
    @action login = async postData => {
        try {
            const res = await callLoginUser(postData);
            console.log("res>",res)
            if (res.status === 200) {
                const { token } = res.data;
                if (token) {
                    this.assignData({ token });
                    console.log("token>",token)
                     AsyncStorage.setItem('token', token);
                }
                Actions.replace('Main');
            } else {
                alert('登入失敗');
            }
        } catch (e) {
            alert(e?.response?.data?.msg);

            console.log('error:', e.response);
        }
    };
    validate = postData => {
        let validateArr = [];
        const { email, phone, password } = postData;
        if (!email && !phone) {
            validateArr.push('Please enter your E-mail/Phone');
        } else if (email && !isEmail(email)) {
            validateArr.push('Invalid E-mail');
        } else if (phone && !isMobilePhone(phone, 'zh-TW')) {
            validateArr.push('Invalid phone number');
        } else if (!password) {
            validateArr.push('Please enter your password');
        } else if (!isLength(password, { min: 6, max: 12 })) {
            validateArr.push('Please enter 6-12 characters');
        }
        return validateArr;
    };
}

export default new LoginStore();
