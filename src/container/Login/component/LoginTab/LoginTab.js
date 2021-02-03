import React from 'react';
import { Dimensions, StyleSheet, TextInput, View } from 'react-native';
import { observer } from 'mobx-react';
import { useStores } from '@store';
import { Translate } from '@translations';
import { RectangleButton } from '@components';

const { width } = Dimensions.get('window');

const LoginTab = () => {
    const { LoginStore } = useStores();
    const { paramsUpdate, handleLogin,userAcc,updateData, email, password } = LoginStore;
    return (
        <View
            style={{
                flex: 3,
                alignItems: 'center',
                marginTop: 30,
                width: width / 2,
                // backgroundColor: 'pink',
                alignSelf: 'center',
            }}>
            <View style={styles.searchSection}>
                <TextInput
                    keyboardType="email-address"
                    autoCorrect={false}
                    value={userAcc}
                    style={styles.input}
                    placeholder="Email/Phone"
                    onChangeText={(value) => {
                        updateData('userAcc', value);
                    }}
                    underlineColorAndroid="transparent"
                />
            </View>
            <View style={[styles.searchSection, { marginTop: 15 }]}>
                <TextInput
                    secureTextEntry={true}
                    style={styles.input}
                    value={password}
                    placeholder="Password"
                    autoCorrect={false}
                    onChangeText={(value) => {
                        paramsUpdate('password', value);
                    }}
                    underlineColorAndroid="transparent"
                />
            </View>

            <View style={{ marginTop: 15 }}>
                <RectangleButton
                    buttonColor={'black'}
                    textColor={'#fff'}
                    onPress={() => {
                        handleLogin();
                    }}>
                    {Translate.login}
                </RectangleButton>
            </View>
        </View>
    );
};

export default observer(LoginTab);
const styles = StyleSheet.create({
    searchSection: {
        // flex: 1,
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
