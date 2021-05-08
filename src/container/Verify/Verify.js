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
    const { HomeStore } = useStores();
    const { init, userList } = HomeStore;
    useEffect(() => {
        init();
    }, []);
    const { head, container, follow } = styles;

    const renderItem = ({ item }) => (
        <View style={container}>
            <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                <Text style={head}>{item.publicId}</Text>
                <Text style={follow}>follow</Text>
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
                    data={userList}
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
    follow: {
        fontSize: 14,
        marginBottom: 10,
        color: '#77a6f1',
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
