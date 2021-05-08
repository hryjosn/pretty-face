import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    KeyboardAvoidingView,
    Image,
    Text,
    ActivityIndicator,
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
    const { nextStep, currentStep, isFetching } = useStores().SignUpStore;
    return (
        <Page>
            <View style={{ marginTop: 100 }}>
                {currentStep === 'UserInfo' && <UserInfo />}
                {currentStep === 'ChooseAvatar' && <ChooseAvatar />}
            </View>

            <View style={{ paddingHorizontal: 180, marginTop: 30 }}>
                <ActivityIndicator
                    animating={isFetching}
                    size="large"
                    color="gray"
                />
                <Button
                    disabled={isFetching}
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
