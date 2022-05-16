import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { Text, Input, Page, Button } from '@components';
import auth from '@react-native-firebase/auth';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import { useStores } from '@store';
import CountryPicker, {
    getAllCountries,
} from 'react-native-country-picker-modal';
import { observer } from 'mobx-react-lite';
import { callLoginUser } from '@api';

import { gql, useLazyQuery } from '@apollo/client';
import { CHECK_USER_NAME } from '../gql';

const PhoneAuthentication = () => {
    const [countryCode, setCountryCode] = useState('TW');
    const [callingCode, setCallingCode] = useState('886');
    const [phoneNumber, setPhoneNumber] = useState('');
    const { SignUpStore } = useStores();
    const { assignData, login } = SignUpStore;
    const onSelect = country => {
        setCountryCode(country.cca2);
        setCallingCode(country?.callingCode);
    };
    // Handle the button press
    const Login = async () => {
        // const confirmation = await auth().signInWithPhoneNumber(
        //     '+886 989-807-329',
        // );
        // setConfirm(confirmati
    };
    const [checkUsername, { loading, error, data }] =
        useLazyQuery(CHECK_USER_NAME);

    const {
        SignUpStore: { updateData, userName },
    } = useStores();

    return (
        <Page>
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={{ textAlign: 'center', fontSize: 30 }}>
                        Verify Phone
                    </Text>
                </View>
                <Text style={styles.description}>
                    You will receive a SMS message to verify your phone number.
                </Text>
                <View
                    style={{
                        alignItems: 'center',
                        flexDirection: 'row',
                        // borderBottomWidth: 2,
                        // borderColor: 'black',
                        // padding: 20,
                    }}>
                    <CountryPicker
                        withEmoji={true}
                        fullWidth
                        withCloseButton
                        onSelect={onSelect}
                        withFilter
                        withAlphaFilter
                        countryCode={countryCode}
                    />
                    <Text style={{ fontSize: 20 }}>+{callingCode}</Text>
                    <Input
                        containerStyle={{ flex: 1, marginLeft: 10 }}
                        maxLength={15}
                        value={phoneNumber}
                        onChangeText={value => {
                            setPhoneNumber(value);
                        }}
                    />
                </View>

                <Button
                    style={styles.button}
                    onPress={() => {
                        // login(
                        //     `+${callingCode}${phoneNumber.replace(/^0+/, '')}`,
                        // );
                        Actions.push('CodeInput');
                    }}>
                    Next
                </Button>
            </View>
        </Page>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 40,
        textAlign: 'center',
    },
    title: {
        paddingVertical: 20,
    },
    description: {
        textAlign: 'center',
        marginBottom: 20,
    },
    button: {
        marginTop: 30,
    },
});

export default observer(PhoneAuthentication);
