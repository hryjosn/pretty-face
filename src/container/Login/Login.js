import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Dimensions,
} from 'react-native';
import { Button, TextButton, MyText, RectangleButton } from '@components';
import LoginTab from './component/LoginTab';
import SignupTab from './component/SignupTab';
import Page from '@components/Page/Page';
import { observer } from 'mobx-react';
import { useStores } from '@store';
import style from '@styles/globalStyle';
import { Actions } from 'react-native-router-flux';
import { checkInput } from '../../helpers';
import { Translate } from '../../translations';
// import LogoIcon from '../../image/logo.png';

const { width } = Dimensions.get('window');

const { container } = style;

const Login = () => {
    const [selectedLogin, setSelectedLogin] = useState(true);
    const buttonColor = (selected) => selected ? 'black' : 'gray';
    const fontSize = (selected) => selected ? 21 : 16;


    return (
        <Page>
            <View
                style={{
                    flex: 1,
                    // backgroundColor: 'pink',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                }}>
                <MyText
                    style={{
                        fontSize: 36,
                        fontWeight: '500',
                        letterSpacing: 3,
                    }}>
                    Hoja
                </MyText>
            </View>
            <View
                style={{
                    flex: 1,
                    // backgroundColor: 'yellow',
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    flexDirection: 'row',
                }}>
                <TextButton
                    onPress={() => setSelectedLogin(true)}
                    color={buttonColor(selectedLogin)}
                    fontSize={fontSize(selectedLogin)}
                >
                    {Translate.login}
                </TextButton>
                <View style={{ width: 20 }}/>
                <TextButton
                    onPress={() => setSelectedLogin(false)}
                    color={buttonColor(!selectedLogin)}
                    fontSize={fontSize(!selectedLogin)}
                >
                    {Translate.register}
                </TextButton>
            </View>
            {
                selectedLogin ? <LoginTab/> : <SignupTab/>
            }

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
