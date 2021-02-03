import { action, extendObservable } from 'mobx';
import storeAction from '@store/storeAction';
import { callChangePassword, callSendForgetPasswordEmail } from '@api';
import { checkInput } from '@helpers';

import { Alert } from 'react-native';

const initState = {
    visible: false,
    hasSent: false,
    params: {
        email: '',
        verifyCode: '',
        password: '',
        checkPassword: '',
    },
};

class ForgetPasswordModalStore extends storeAction {
    constructor() {
        super();
        this.initState = initState;
        extendObservable(this, initState);
    }

    @action modalOpen = () => {
        this.updateData('visible', true);
    };
    @action submit = async () => {
        if (!this.params.email) {
            alert('請輸入Email');
        } else if (!checkInput(this.params.email, 'isEmail')) {
            alert('Email格式錯誤');
        } else if (this.params.email < 10 || this.params.email.length > 256) {
            alert('Email長度錯誤');
        } else {
            try {
                const param = { email: this.params.email };
                const res = await callSendForgetPasswordEmail(param);
                if (res.status === 200) {
                    this.updateData('hasSent', true);
                } else {
                    alert('發送失敗');
                }
            } catch (e) {
                alert('發送失敗');
                console.error('Error', e);
            }
        }
    };
    @action onValidate = async () => {
        try {
            const { email, verifyCode, password, checkPassword } = this.params;
            const param = {
                email,
                code: verifyCode,
                newpwd: password,
                renewpwd: checkPassword,
            };
            const res = await callChangePassword(param);
            if (res.status === 200) {
                Alert.alert(
                    '修改密碼成功！',
                    '',
                    [
                        {
                            text: 'OK',
                            onPress: () => {
                                this.updateData('visible', false);
                            },
                        },
                    ],
                    { cancelable: false },
                );
            } else {
                console.error('Error', res);
            }
        } catch (e) {
            alert('發送失敗');
            console.error('Error', e);
        }
    };
}

export default new ForgetPasswordModalStore();
