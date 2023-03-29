import React, { useEffect, useState } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
    FlatList,
    ActivityIndicator,
} from 'react-native';
import { Button, Header } from '@components';
import { useStores } from '@store';
import Page from '@components/Page/Page';
import { observer } from 'mobx-react-lite';
import { useQuery, useMutation } from '@apollo/client';
import { GET_MY_POST_LIST, GET_POST_LIST } from './gql';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';
import Post from '@container/Post';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {
    const {
        PostStore: { openModal, visible },
    } = useStores();
    const { head, container, followText } = styles;

    // const {
    //     data: postList,
    //     loading: followedListLoading,
    //     refetch,
    // } = useQuery(GET_MY_POST_LIST);
    const { data: postList, error, loading, refetch } = useQuery(GET_POST_LIST);
    console.log('postList>', postList);
    useEffect(() => {
        if (error?.message === 'Context creation failed: jwt expired') {
            AsyncStorage.clear();
        }
    }, []);
    const renderItem = ({
        item: {
            img: { url },
            author: { userName },
            caption,
            id,
        },
    }) => {
        return (
            <View style={container}>
                <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                    <Text style={head}>{userName}</Text>
                </View>
                <View style={{ borderColor: 'gray', borderTopWidth: 0.3 }}>
                    <Image
                        source={{
                            uri:
                                url ||
                                'https://miro.medium.com/max/683/0*JQGt5cN0oZbo4uLV.jpg',
                        }}
                        style={{
                            width: '100%',
                            height: 400,
                        }}
                    />
                </View>
                <Text style={head}>{userName}</Text>
                <Text>{caption}</Text>
            </View>
        );
    };
    if (loading)
        return (
            <Page>
                <Text>Loading</Text>
            </Page>
        );
    return (
        <Page>
            <Header
                Right={() => (
                    <TouchableOpacity
                        onPress={() => {
                            openModal();
                        }}>
                        <Icon name="add" size={40} color="black" />
                    </TouchableOpacity>
                )}>
                Pretty Face
            </Header>

            <View style={tw`grow`}>
                <FlatList
                    data={postList.getPostList}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
            <Post />
        </Page>
    );
};

export default observer(Home);

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    head: {
        fontSize: 16,
        marginLeft: 20,
        marginRight: 15,
        marginBottom: 10,
    },
    followText: {
        fontSize: 14,
        marginBottom: 10,
        color: '#3782ec',
    },
    headerStyle: {
        color: '#555555',
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    contentStyle: {
        borderWidth: 2,
        marginTop: 15,
        marginBottom: 5,
        padding: 20,
        borderTopColor: 'gray',
        borderBottomColor: 'gray',
        borderRightColor: 'gray',
        borderLeftColor: 'gray',
    },
    descriptionStyle: {
        fontSize: 16,
        paddingVertical: 5,
        color: '#7F7F7F',
    },
    rowStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
