import React, { useEffect } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
    FlatList,
} from 'react-native';
import { Button, Header } from '@components';
import { useStores } from '@store';
import Page from '@components/Page/Page';
import { observer } from 'mobx-react';

const Verify = () => {
    const { VerifyStore } = useStores();
    const {
        getList,
        list,
        getUserIFollowed,
        usersIFollowed,
        unFollowUser,
        followUser,
    } = VerifyStore;
    useEffect(() => {
        getList();
        getUserIFollowed();
    }, []);
    const { head, container, followText } = styles;

    const renderItem = ({ item }) => (
        <View style={container}>
            <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                <Text style={head}>{item.publicId}</Text>
                <Text
                    style={followText}
                    onPress={() => {
                        console.log(
                            "usersIFollowed[item['_id']]>",
                            usersIFollowed[item['_id']],
                        );
                        if (usersIFollowed[item['_id']]) {
                            unFollowUser(item['_id']);
                        } else {
                            followUser(item['_id']);
                        }
                    }}>
                    {usersIFollowed[item['_id']] ? 'followed' : 'follow'}
                </Text>
            </View>
            <View style={{ borderColor: 'gray', borderTopWidth: 0.3 }}>
                <Image
                    source={{
                        uri:
                            item.avatarUrl ||
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
    return (
        <Page>
            <View>
                <FlatList
                    data={list}
                    renderItem={renderItem}
                    keyExtractor={(item) => item._id}
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
