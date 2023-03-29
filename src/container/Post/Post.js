import React, { useEffect, useState } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
    FlatList,
    ActivityIndicator,
    TextInput,
} from 'react-native';
import { Header, Modal, Card, Button } from '@components';
import { useStores } from '@store';
import Page from '@components/Page/Page';
import { observer } from 'mobx-react-lite';
import { useMutation } from '@apollo/client';
import Icon from 'react-native-vector-icons/AntDesign';
import { launchImageLibrary } from 'react-native-image-picker';
import { CREAT_POST } from './gql';
import { ReactNativeFile } from 'apollo-upload-client';

import tw from 'twrnc';

const Post = () => {
    const {
        PostStore: { visible, closeModal },
    } = useStores();
    const [image, setImage] = useState();
    const [caption, setCaption] = useState();
    const [post, { loading, error }] = useMutation(CREAT_POST);
    console.log('error henry', error);
    const handleChoosePhoto = async () => {
        const options = {
            title: 'Select Image',
            type: 'library',
            options: {
                mediaType: 'photo',
            },
        };
        const response = await launchImageLibrary(options);

        setImage(response?.assets?.[0]);
    };

    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={visible}
            header={'Submit Post'}
            closeModal={() => {
                closeModal();
                setImage();
            }}>
            <View style={tw`grow bg-gray-100 mx-6`}>
                {image?.uri ? (
                    <Image
                        source={{
                            uri: image?.uri,
                        }}
                        style={tw`w-[100px] h-[100px] rounded-xl my-5`}
                    />
                ) : (
                    <TouchableOpacity onPress={handleChoosePhoto}>
                        <View
                            style={tw`w-[100px] h-[100px] bg-gray-300 rounded-xl my-5 flex items-center justify-center`}>
                            <Icon name="plus" size={70} color={'white'}></Icon>
                        </View>
                    </TouchableOpacity>
                )}
                <View style={tw`grow`}>
                    <Card>
                        <View style={tw`w-full h-40`}>
                            <TextInput
                                style={tw`text-[16px]`}
                                multiline={true}
                                numberOfLines={10}
                                placeholder="Type some text..."
                                onChangeText={text => {
                                    setCaption(text);
                                }}
                                value={caption}
                            />
                        </View>
                    </Card>
                </View>

                <Button
                    onPress={async () => {
                        const img = new ReactNativeFile({
                            uri: image.uri,
                            name: image.fileName,
                            type: image.type,
                            ext: image.ext,
                        });
                        post({
                            variables: { postCreateInput: { caption }, img },
                        });
                        closeModal();
                    }}>
                    Post
                </Button>
            </View>
        </Modal>
    );
};

export default observer(Post);
