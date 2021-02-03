import { action, extendObservable } from 'mobx';
import storeAction from '@store/storeAction';
import { callSignUpUser } from '@api';
import { LoginStore } from '@store';
import auth from '@react-native-firebase/auth';
import { isEmail, isLength, isMobilePhone } from 'validator';

const initState = {
    isFetching: false,
    userName: '',
    member_account: '',
    userId: '',
    valid: false,
    sessionToken: null,
    login_flag: false,
    avatar: '',
    params: {
        email: '',
        password: '',
        phone: '',
    },
};

class SignUpStore extends storeAction {
    constructor() {
        super();
        this.initState = initState;
        extendObservable(this, initState);
    }

    @action handleSignUp = async () => {
        try {
            const validateArr = this.validate(this.params);
            if (validateArr.length > 0) {
                alert(validateArr[0]);
                return;
            }
            const res = await callSignUpUser(this.params);
            if (res.status === 200) {
                LoginStore.login(this.params);
                this.reset();
            } else {
                alert('Sign up fail');
            }

        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
            }
            if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
            }
            console.error(error);
        }
    };
    validate = postData => {
        console.log("postData", postData)
        let validateArr = [];
        const { email, phone, password } = postData;
        if (!email) {
            validateArr.push('Please enter your E-mail/Phone');
        } else if (!phone) {
            validateArr.push('Please enter your E-mail/Phone');
        } else if (!isEmail(email)) {
            validateArr.push('Invalid E-mail');
        } else if (!isMobilePhone(phone, 'zh-TW')) {
            validateArr.push('Invalid phone number');
        } else if (!password) {
            validateArr.push('Please enter your password');
        } else if (!isLength(password, { min: 6, max: 12 })) {
            validateArr.push('Please enter 6-12 characters');
        }
        return validateArr;
    };
}

export default new SignUpStore();
