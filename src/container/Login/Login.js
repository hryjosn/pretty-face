import React, { useState } from 'react';
import { StyleSheet, View, TextInput, ActivityIndicator } from 'react-native';
import { Text, Input, Page, Button, Link } from '@components';
import { observer } from 'mobx-react-lite';
import { useStores } from '@store';
import PhoneAuthentication from '../SignUp/pages/PhoneAuthentication';
import { Actions } from 'react-native-router-flux';
import { useMutation } from '@apollo/client';
import tw from 'twrnc';
import { LOGIN } from './gql/mutation';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
    const [login, { loading, error }] = useMutation(LOGIN);

    const {
        LoginStore: {
            paramsUpdate,
            params: { userName, password },
        },
    } = useStores();
    console.log('loading>', loading);
    return (
        <Page>
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={{ textAlign: 'center', fontSize: 30 }}>
                        Pretty Face
                    </Text>
                </View>
                <Input
                    placeholder="Username"
                    onChangeText={text => paramsUpdate('userName', text)}
                    value={userName}
                />
                <Input
                    placeholder="Password"
                    secureTextEntry
                    onChangeText={text => paramsUpdate('password', text)}
                    value={password}
                />
                <Button
                    style={styles.button}
                    onPress={async () => {
                        const res = await login({
                            variables: { userName, password },
                        });
                        const token = res.data.login.token;
                        if (token) {
                            console.log(token);
                            AsyncStorage.setItem('token', token);
                        }
                    }}>
                    Login
                </Button>
                {loading && <ActivityIndicator style={tw`pt-5`} size="large" />}
            </View>
            <View style={styles.signupContainer}>
                <Text style={{ marginRight: 5 }}>Don't have account?</Text>
                <Link
                    style={styles.button}
                    onPress={() => {
                        Actions.push('CheckUsername');
                    }}>
                    Sign Up.
                </Link>
            </View>
        </Page>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 40,
        flex: 1,
    },
    signupContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    title: {
        marginTop: 50,
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

export default observer(Login);
