//import liraries
import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { observer } from 'mobx-react-lite';
import { useStores } from '@store';
import { Page, Input, Button, IconInput } from '@components';
import { launchImageLibrary } from 'react-native-image-picker';
import { gql, useMutation } from '@apollo/client';
import { SIGNUP } from '@container/SignUp/gql/mutation';
import { ReactNativeFile } from 'apollo-upload-client';

// create a component
const ChooseAvatar = () => {
    const {
        SignUpStore: { handleSignUp, paramsUpdate, params },
    } = useStores();
    const { password, userName, publicId, image } = params;
    const { container, button } = styles;
    const [signUp, { data, loading, error }] = useMutation(SIGNUP);
    console.log('error>', error);
    console.log('data>', data);
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
                    onPress={() => {
                        const { image, ...user } = params;
                        const portrait = new ReactNativeFile({
                            uri: image.uri,
                            name: image.fileName,
                            type: image.type,
                            ext: image.ext,
                        });
                        console.log('portrait>', portrait);
                        signUp({
                            variables: {
                                user: user,
                                portrait,
                            },
                        });
                    }}>
                    Next
                </Button>
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
