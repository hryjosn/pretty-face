import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { Text, Input, Page, Button, Link } from '@components';
import { observer } from 'mobx-react-lite';
import { useStores } from '@store';
import PhoneAuthentication from '../SignUp/pages/PhoneAuthentication';
import { Actions } from 'react-native-router-flux';

const Login = () => {
    return (
        <Page>
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={{ textAlign: 'center', fontSize: 30 }}>
                        Pretty Face
                    </Text>
                </View>
                <Input placeholder="Username" />
                <Input placeholder="Password" />
                <Button style={styles.button}>Login</Button>
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
