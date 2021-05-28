import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { observer } from 'mobx-react';
import { Actions } from 'react-native-router-flux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useStores } from '@store';

const Init = () => {
    const { SignUpStore } = useStores();
    const { getUserInfo } = SignUpStore;
    useEffect(() => {
        (async function () {
            const token = await AsyncStorage.getItem('token');
            if (token) {
                getUserInfo();
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
