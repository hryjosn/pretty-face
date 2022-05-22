//import liraries
import React, { Component } from 'react';
import { StyleSheet, View, Image, ActivityIndicator } from 'react-native';
import { observer } from 'mobx-react-lite';
import { useStores } from '@store';
import { Page, Input, Button, IconInput } from '@components';
import { launchImageLibrary } from 'react-native-image-picker';
import { gql, useMutation } from '@apollo/client';
import { SIGNUP } from '@container/SignUp/gql/mutation';
import { ReactNativeFile } from 'apollo-upload-client';
import { Actions } from 'react-native-router-flux';

// create a component
const ChooseAvatar = () => {
    const {
        SignUpStore: { handleSignUp, paramsUpdate, params },
    } = useStores();
    const { password, userName, publicId, image } = params;
    const { container, button } = styles;
    const [signUp, { loading, error }] = useMutation(SIGNUP);

    const handleChoosePhoto = async () => {
        const options = {
            title: 'Select Image',
            type: 'library',
            options: {
                mediaType: 'photo',
            },
        };
        const response = await launchImageLibrary(options);

        paramsUpdate('image', response?.assets?.[0]);
    };

    return (
        <Page>
            <View style={container}>
                <Image
                    source={{
                        uri: image?.uri,
                    }}
                    style={{ width: '100%', height: 400 }}
                />
                <Button
                    style={button}
                    onPress={() => {
                        handleChoosePhoto();
                    }}>
                    Select Avatar
                </Button>
                <Button
                    style={button}
                    onPress={async () => {
                        const { image, ...user } = params;
                        const portrait = new ReactNativeFile({
                            uri: image.uri,
                            name: image.fileName,
                            type: image.type,
                            ext: image.ext,
                        });
                        try {
                            const data = await signUp({
                                variables: {
                                    user,
                                    portrait,
                                },
                            });
                            if (data.data.signUp.user.id) {
                                alert('Sign Up successfully!');
                                Actions.push('Login');
                            }
                        } catch (e) {
                            alert(e);
                        }
                    }}>
                    Next
                </Button>
                {loading && <ActivityIndicator style={button} size="large" />}
            </View>
        </Page>
    );
};

//make this component available to the app
export default observer(ChooseAvatar);
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
