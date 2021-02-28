import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    KeyboardAvoidingView,
    Image,
    Text,
} from 'react-native';
import { Page, Input, Button, IconInput } from '@components';
import { observer } from 'mobx-react';
import { useStores } from '@store';
import globalStyle from '@styles/globalStyle';
import { Actions } from 'react-native-router-flux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import { launchImageLibrary } from 'react-native-image-picker';
import styles from './SignUp.styles';
import ChooseAvatar from './components/ChooseAvatar';
import UserInfo from './components/UserInfo';
const { selectAvatarButtonContainer } = styles;
const { container } = globalStyle;

const SignUp = () => {
    const {
        nextStep,
        paramsUpdate,
        params,
        currentStep,
    } = useStores().SignUpStore;
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
        <Page>
            <View style={{ marginTop: 100 }}>
                {currentStep === 'UserInfo' && <UserInfo />}
                {currentStep === 'ChooseAvatar' && <ChooseAvatar />}
            </View>

            <View style={{ paddingHorizontal: 180, marginTop: 30 }}>
                <Button
                    onPress={() => {
                        nextStep();
                    }}>
                    <MaterialIcons
                        name={'arrow-forward'}
                        size={30}
                        color={'#a8a8a8'}
                    />
                </Button>
            </View>
        </Page>
    );
};
export default observer(SignUp);
