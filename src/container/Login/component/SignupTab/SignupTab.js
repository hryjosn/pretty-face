import React from 'react';
import { Dimensions, StyleSheet, TextInput, View } from 'react-native';
import { observer } from 'mobx-react';
import { useStores } from '@store';
import { Translate } from '@translations';
import { RectangleButton } from '@components';

const { width } = Dimensions.get('window');

const SignupTab = () => {
    const { SignUpStore } = useStores();
    const { paramsUpdate, handleSignUp,phone, email, password } = SignUpStore;
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
                    value={email}
                    style={styles.input}
                    placeholder="Email"
                    onChangeText={(value) => {
                        paramsUpdate('email', value);
                    }}
                    underlineColorAndroid="transparent"
                />
            </View>
            <View style={[styles.searchSection, { marginTop: 15 }]}>
                <TextInput
                    style={styles.input}
                    placeholder="Phone"
                    value={phone}
                    autoCorrect={false}
                    onChangeText={(value) => {
                        paramsUpdate('phone', value);
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
                        handleSignUp();
                    }}>
                    {Translate.register}
                </RectangleButton>
            </View>
        </View>
    );
};

export default observer(SignupTab);
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
