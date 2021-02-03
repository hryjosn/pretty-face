import React from 'react';
import { Image, Modal, ScrollView, Text, View } from 'react-native';
import { observer } from 'mobx-react';
import { useStores } from '@store';
import { Header, Input, Button } from '@components';
import { Page } from '@components';
import styles from '@container/Login/Login.styles';
import { logo } from '@image';
import NewPasswordView from './components/NewPasswordView';

const ForgetPasswordModal = () => {
    const {
        visible,
        reset,
        submit,
        paramsUpdate,
        params,
        hasSent,
    } = useStores().ForgetPasswordModalStore;

    return (
        <Modal animationType="slide" transparent={false} visible={visible}>
            <Page isModal>
                <Header headerText={'重設密碼'} back backFunction={reset} />
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        height: '100%',
                        justifyContent: 'center',
                        marginVertical: 20,
                    }}>
                    <ScrollView>
                        <Image source={logo} style={styles.logoStyle} />
                        <Text style={styles.mainText}>運匠集運</Text>
                    </ScrollView>
                    {hasSent ? (
                        <NewPasswordView />
                    ) : (
                        <View style={{ width: '100%', paddingHorizontal: 30 }}>
                            <View style={{ marginBottom: 20 }}>
                                <Input
                                    placeholder={'Email'}
                                    containerStyle={{ width: '100%' }}
                                    style={{ fontSize: 16 }}
                                    value={params.email}
                                    onChangeText={(text) => {
                                        paramsUpdate('email', text);
                                    }}
                                />
                            </View>

                            <Button
                                style={{ borderWidth: 1 }}
                                onPress={() => {
                                    submit();
                                }}>
                                發送驗證信
                            </Button>
                        </View>
                    )}
                </View>
            </Page>
        </Modal>
    );
};

export default observer(ForgetPasswordModal);
