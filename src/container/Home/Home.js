import React, { useEffect } from 'react';
import styles from './Home.styles';
import Page from '@components/Page/Page';
import { useStores } from '@store';
import { observer } from 'mobx-react';
import { Button, TextButton, Text, RectangleButton } from '@components';
import { Image, View, FlatList } from 'react-native';

const Home = () => {
    const { HomeStore } = useStores();
    const { init, userList } = HomeStore;
    useEffect(() => {
        init();
    }, []);
    const { container } = styles;
    const renderItem = ({ item }) => (
        <View style={container}>
            <View>
                <Text style={{ fontSize: 30 }}>{item.publicId}</Text>
            </View>
            <Image
                source={{
                    uri: item.avatarUrl,
                    // uri:
                    //     'https://miro.medium.com/max/683/0*JQGt5cN0oZbo4uLV.jpg',
                }}
                style={{ width: '100%', height: 400 }}
            />
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

export default observer(Home);
