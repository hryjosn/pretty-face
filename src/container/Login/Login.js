import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { Text, Input, Page, Button } from '@components';
import { observer } from 'mobx-react';
import { useStores } from '@store';
import PhoneAuthentication from './components/PhoneAuthentication/PhoneAuthentication';

const Login = () => {
    return (
        <Page>
            <PhoneAuthentication />
        </Page>
    );
};

const styles = StyleSheet.create({
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: 'gray',
        paddingLeft: 10,
    },
    searchIcon: {
        width: 20,
        height: 20,
        marginLeft: 20,
    },
    input: {
        fontSize: 18,
        height: 50,
        paddingHorizontal: 10,
        width: '100%',
        backgroundColor: '#fff',
        color: '#424242',
    },
});

export default observer(Login);
