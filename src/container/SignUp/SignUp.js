import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Page, Input, Button } from '@components';
import { observer } from 'mobx-react';
import { useStores } from '@store';
import style from '@styles/globalStyle';
import { Actions } from 'react-native-router-flux';

const { container } = style;

const SignUp = () => {
    const { handleSignUp, paramsUpdate, params } = useStores().SignUpStore;
    const { email, password } = params;
    return (
        <Page>
            <View style={{ justifyContent: 'center', ...container }}>
                <View style={{ marginTop: 40 }}>
                    <Text style={{ fontSize: 30 }}>SignUp</Text>
                </View>
                <View style={{ marginVertical: 20 }}>
                    <Input
                        label={'email'}
                        value={email}
                        onChangeText={(text) => {
                            paramsUpdate('email', text);
                        }}
                    />
                </View>
                <View style={{ marginVertical: 20 }}>
                    <Input
                        label={'password'}
                        value={password}
                        onChangeText={(text) => {
                            paramsUpdate('password', text);
                        }}
                    />
                </View>
                <View style={{ marginVertical: 20, flexDirection: 'row' }}>
                    <Button
                        onPress={() => {
                            Actions.replace('Login');
                        }}>
                        {' '}
                        Login{' '}
                    </Button>
                    <Button
                        onPress={() => {
                            handleSignUp();
                        }}>
                        {' '}
                        Submit{' '}
                    </Button>
                </View>
            </View>
        </Page>
    );
};
export default observer(SignUp);
// const styles = StyleSheet.create({});
