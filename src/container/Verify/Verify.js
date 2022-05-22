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
import {
    GET_VERIFY_USERS,
    FOLLOW,
    UNFOLLOW,
    GET_MY_INFO,
    GET_FOLLOWED_LIST,
} from './gql';
import tw from 'twrnc';
const Verify = () => {
    const { head, container, followText } = styles;
    const {
        loading: verifyUserLoading,
        error,
        data,
    } = useQuery(GET_VERIFY_USERS);
    console.log('data>', data);
    const {
        data: followedList,
        loading: followedListLoading,
        refetch,
    } = useQuery(GET_FOLLOWED_LIST);

    const [follow] = useMutation(FOLLOW);
    const [unfollow] = useMutation(UNFOLLOW);
    console.log('followedList>', followedList);
    const renderItem = ({
        item: {
            portrait: { url },
            userName,
            id,
        },
    }) => {
        const isFollow = followedList.getFollowedList.some(
            followed => followed.followedId === id,
        );
        return (
            <View style={container}>
                <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                    <Text style={head}>{userName}</Text>
                    <Text
                        style={followText}
                        onPress={async () => {
                            isFollow
                                ? await unfollow({
                                      variables: { followedId: id },
                                  })
                                : await follow({
                                      variables: { followedId: id },
                                  });

                            refetch();
                        }}>
                        {isFollow ? 'unfollow' : 'follow'}
                    </Text>
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
            </View>
        );
    };
    if (verifyUserLoading || followedListLoading)
        return <ActivityIndicator style={tw`pt-5`} size="large" />;

    return (
        <Page>
            <View>
                <FlatList
                    data={data.getVerifyUsers.filter(
                        item => !item.followed.length,
                    )}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </Page>
    );
};

export default observer(Verify);

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
