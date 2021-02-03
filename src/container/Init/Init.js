import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { observer } from 'mobx-react';
import { Actions } from 'react-native-router-flux';
import AsyncStorage from '@react-native-community/async-storage';
import auth from '@react-native-firebase/auth';
// import styles from '@container/Login/Login.styles';

const Init = () => {
    useEffect(() => {
        (async function () {
            const token = await AsyncStorage.getItem('token');
            console.log('token', token);
            if (token) {
                Actions.replace('Main');
            } else {
                Actions.replace('Login');
            }
        })();
    }, []);
    return (
        <View
            style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <Text style={{ fontSize: 34 }}>Hoja</Text>
        </View>
    );
};

export default observer(Init);
