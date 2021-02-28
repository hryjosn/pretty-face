//import liraries
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { useStores } from '@store';
import { StyleSheet, View, KeyboardAvoidingView, Image } from 'react-native';
import { Page, Input, Button, IconInput, Text } from '@components';
import globalStyle from '@styles/globalStyle';
import { Actions } from 'react-native-router-flux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import { launchImageLibrary } from 'react-native-image-picker';

// create a component
const UserInfo = () => {
    const { paramsUpdate, params } = useStores().SignUpStore;
    const { email, userName, publicId, phone } = params;

    return (
        <View>
            <IconInput
                placeholder={'Name'}
                onChangeText={(text) => paramsUpdate('userName', text)}
                value={userName}
                maxLength={20}
                icon={() => (
                    <MaterialIcons
                        name={'person-outline'}
                        size={30}
                        color={'#a8a8a8'}
                    />
                )}
            />
            <IconInput
                placeholder={'ID'}
                maxLength={20}
                onChangeText={(text) => paramsUpdate('publicId', text)}
                value={publicId}
                icon={() => (
                    <Feather name={'at-sign'} size={30} color={'#a8a8a8'} />
                )}
            />
            <IconInput
                placeholder={'email'}
                maxLength={40}
                onChangeText={(text) => paramsUpdate('email', text)}
                value={email}
                icon={() => (
                    <MaterialIcons
                        name={'mail-outline'}
                        size={30}
                        color={'#a8a8a8'}
                    />
                )}
            />
        </View>
    );
};

//make this component available to the app
export default observer(UserInfo);
