import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Input, Page } from '@components';
import { observer } from 'mobx-react';
import { useStores } from '@store';
import CountryPicker, {
    getAllCountries,
} from 'react-native-country-picker-modal';

const Login = () => {
    const [countryCode, setCountryCode] = useState('TW');
    const [callingCode, setCallingCode] = useState('886');
    const onSelect = (country) => {
        setCountryCode(country.cca2);
        setCallingCode(country?.callingCode);
    };
    return (
        <Page>
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
                    <Input style={{ flex: 1, marginHorizontal:10 }} />
                </View>
            </View>
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
