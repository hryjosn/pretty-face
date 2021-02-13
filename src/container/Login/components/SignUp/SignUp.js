import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Page, Input, Button, IconInput } from '@components';
import { observer } from 'mobx-react';
import { useStores } from '@store';
import style from '@styles/globalStyle';
import { Actions } from 'react-native-router-flux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const { container } = style;

const SignUp = () => {
    const { handleSignUp, paramsUpdate, params } = useStores().SignUpStore;
    const { email, password } = params;
    return (
        <Page>
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                }}>
                <IconInput
                    placeholder={'Name'}
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
                    icon={() => (
                        <MaterialIcons
                            name={'mail-outline'}
                            size={30}
                            color={'#a8a8a8'}
                        />
                    )}
                />
                <IconInput
                    placeholder={'email'}
                    icon={() => (
                        <MaterialIcons
                            name={'mail-outline'}
                            size={30}
                            color={'#a8a8a8'}
                        />
                    )}
                />
            </View>
            <View style={{ paddingHorizontal: 70 }}>
                <Button onPress={() => {}}>Send</Button>
            </View>
        </Page>
    );
};
export default observer(SignUp);
// const styles = StyleSheet.create({});
