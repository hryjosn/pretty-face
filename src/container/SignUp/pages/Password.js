import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Input, Page, Button } from '@components';
import { observer } from 'mobx-react-lite';
import { useStores } from '@store';
import { gql, useLazyQuery } from '@apollo/client';
import { useImperativeQuery } from '@utils/query';
import { CHECK_USER_NAME } from '../gql';
import { Actions } from 'react-native-router-flux';

const Password = () => {
    const {
        SignUpStore: {
            paramsUpdate,
            params: { password },
        },
    } = useStores();

    return (
        <Page>
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={{ textAlign: 'center', fontSize: 30 }}>
                        Create Password
                    </Text>
                </View>
                <Text style={styles.description}>
                    Pick a username for your new account. You can always change
                    it later.
                </Text>
                <Input
                    autoCapitalize={'none'}
                    placeholder="Password"
                    value={password}
                    maxLength={12}
                    secureTextEntry
                    onChangeText={text => paramsUpdate('password', text)}
                />
                <Button
                    style={styles.button}
                    onPress={async () => {
                        Actions.push('PhoneAuthentication');
                    }}>
                    Next
                </Button>
            </View>
        </Page>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 40,
        textAlign: 'center',
    },
    title: {
        paddingVertical: 20,
    },
    description: {
        textAlign: 'center',
        marginBottom: 20,
    },
    button: {
        marginTop: 30,
    },
});

export default observer(Password);
