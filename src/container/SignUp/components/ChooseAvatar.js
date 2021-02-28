//import liraries
import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { observer } from 'mobx-react';
import { useStores } from '@store';
import styles from '../SignUp.styles';
import { Page, Input, Button, IconInput } from '@components';
import { launchImageLibrary } from 'react-native-image-picker';

const { selectAvatarButtonContainer } = styles;
// create a component
const ChooseAvatar = () => {
    const { handleSignUp, paramsUpdate, params } = useStores().SignUpStore;
    const { email, password, userName, publicId, image } = params;
    const handleChoosePhoto = () => {
        const options = {
            noData: true,
        };
        launchImageLibrary(options, (response) => {
            if (response.uri) {
                paramsUpdate('image', response);
            }
        });
    };

    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: image?.uri,
                }}
                style={{ width: '100%', height: 400 }}
            />
            <View style={selectAvatarButtonContainer}>
                <Button
                    onPress={() => {
                        handleChoosePhoto();
                    }}>
                    Select Avatar
                </Button>
            </View>
        </View>
    );
};

//make this component available to the app
export default observer(ChooseAvatar);
