import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { observer } from 'mobx-react-lite';
import { Actions } from 'react-native-router-flux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useStores } from '@store';

const Init = () => {
    const { LoginStore } = useStores();
    const { recordUserInfo } = LoginStore;
    useEffect(() => {
        (async function () {
            const token = await AsyncStorage.getItem('token');
            if (token) {
                Actions.replace('Home');
            } else {
                Actions.replace('Login');
            }
        })();
    }, []);
    return (
        <View
            style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <Text style={{ fontSize: 34 }}>Pretty Face</Text>
        </View>
    );
};

export default observer(Init);
