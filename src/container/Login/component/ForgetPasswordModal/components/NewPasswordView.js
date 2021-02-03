import React from 'react';
import { View } from 'react-native';
import { Input, Button } from '@components';
import { useStores } from '@store';
import { observer } from 'mobx-react';

const NewPasswordView = () => {
    const {
        submit,
        paramsUpdate,
        params,
        onValidate,
    } = useStores().ForgetPasswordModalStore;
    const { verifyCode, password, checkPassword } = params;

    return (
        <View style={{ paddingHorizontal: 30 }}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                    <Input
                        placeholder={'輸入驗證碼'}
                        containerStyle={{ width: '100%' }}
                        style={{ fontSize: 16 }}
                        value={verifyCode}
                        onChangeText={(text) => {
                            paramsUpdate('verifyCode', text);
                        }}
                    />
                </View>
                <View style={{ marginLeft: 10 }}>
                    <Button
                        onPress={() => {
                            submit();
                        }}>
                        重發驗證信
                    </Button>
                </View>
            </View>
            <View style={{ justifyContent: 'center', marginTop: 10 }}>
                <Input
                    placeholder={'輸入新密碼'}
                    style={{ fontSize: 16 }}
                    value={password}
                    secureTextEntry={true}
                    onChangeText={(text) => {
                        paramsUpdate('password', text);
                    }}
                />
            </View>
            <View style={{ justifyContent: 'center', marginTop: 10 }}>
                <Input
                    placeholder={'確認新密碼'}
                    style={{ fontSize: 16 }}
                    value={checkPassword}
                    secureTextEntry={true}
                    onChangeText={(text) => {
                        paramsUpdate('checkPassword', text);
                    }}
                />
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    marginTop: 20,
                    justifyContent: 'center',
                }}>
                <Button
                    onPress={() => {
                        onValidate();
                    }}>
                    驗證
                </Button>
            </View>
        </View>
    );
};

export default observer(NewPasswordView);
