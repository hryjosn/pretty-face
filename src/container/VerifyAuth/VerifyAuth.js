import React, { useEffect } from 'react';
import { Button, Page, Text } from '@components';
import { SafeAreaView, View } from 'react-native';
import { observer } from 'mobx-react-lite';
import styles from './VerifyAuth.styles';
import { useStores } from '@store';
const VerifyAuth = () => {
    const { SignUpStore } = useStores();
    const { email } = SignUpStore;
    console.log('email>', email);
    return (
        <SafeAreaView style={styles.page}>
            <View style={styles.container}>
                <Text fontSize={20}>Be patient</Text>
                <Text>You haven't get invitation by following email</Text>
                <Text>{email}</Text>
            </View>
        </SafeAreaView>
    );
};

export default observer(VerifyAuth);
