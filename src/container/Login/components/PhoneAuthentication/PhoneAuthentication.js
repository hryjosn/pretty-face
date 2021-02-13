import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { Text, Input, Page, Button } from '@components';
import auth from '@react-native-firebase/auth';
import PropTypes from 'prop-types';
import { useStores } from '@store';
import CountryPicker, {
    getAllCountries,
} from 'react-native-country-picker-modal';
const PhoneAuthentication = (props) => {
    const [countryCode, setCountryCode] = useState('TW');
    const [callingCode, setCallingCode] = useState('886');
    const [phoneNumber, setPhoneNumber] = useState('');
    const { LoginStore } = useStores();
    const { updateData } = LoginStore;
    const onSelect = (country) => {
        setCountryCode(country.cca2);
        setCallingCode(country?.callingCode);
    };
    // Handle the button press
    const signInWithPhoneNumber = async () => {
        // const confirmation = await auth().signInWithPhoneNumber(
        //     '+886 989-807-329',
        // );
        // setConfirm(confirmation);
        updateData('currentStep', 'SignUp');
    };
    return (
        <View style={{ flex: 1 }}>
            <View
                style={{
                    alignItems: 'center',
                }}>
                <Text
                    style={{
                        fontSize: 36,
                        fontWeight: '900',
                        letterSpacing: 3,
                    }}>
                    Pretty face
                </Text>
            </View>
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <View
                    style={{
                        alignItems: 'center',
                        flexDirection: 'row',
                        marginHorizontal: 20,
                        borderWidth: 2,
                        borderColor: 'black',
                        borderRadius: 10,
                        padding: 20,
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
                        style={{ flex: 1, marginHorizontal: 10 }}
                        value={phoneNumber}
                        onChangeText={(value) => {
                            setPhoneNumber(value);
                        }}
                    />
                </View>
            </View>
            <View style={{ flex: 1, paddingHorizontal: 70 }}>
                <Button
                    onPress={() => {
                        signInWithPhoneNumber();
                    }}>
                    Send
                </Button>
            </View>
        </View>
    );
};

PhoneAuthentication.propTypes = {};

export default PhoneAuthentication;