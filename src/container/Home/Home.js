import React, { useEffect } from 'react';
import styles from './Home.styles';
import Page from '@components/Page/Page';
import { useStores } from '@store';
import { observer } from 'mobx-react-lite';
import { Button, TextButton, Text, RectangleButton } from '@components';
import { Image, View, FlatList, ActivityIndicator } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_MY_INFO } from './gql';
import tw from 'twrnc';

const Home = () => {
    const { loading, error, data } = useQuery(GET_MY_INFO);

    const { HomeStore } = useStores();

    useEffect(() => {}, []);
    const { container } = styles;
    const renderItem = ({ item }) => (
        <View style={container}>
            <View>
                <Text style={{ fontSize: 30 }}>{item.publicId}</Text>
            </View>
            <Image
                source={{
                    uri: url,
                    // uri:
                    //     'https://miro.medium.com/max/683/0*JQGt5cN0oZbo4uLV.jpg',
                }}
                style={{ width: '100%', height: 400 }}
            />
        </View>
    );
    if (loading) return <ActivityIndicator style={tw`pt-5`} size="large" />;
    // if (error) return `Error! ${error.message}`;
    return (
        <Page>
            <View>
                <Image
                    source={{
                        uri: data.me.portrait.url,
                        // uri:
                        //     'https://miro.medium.com/max/683/0*JQGt5cN0oZbo4uLV.jpg',
                    }}
                    style={{ width: '100%', height: 400 }}
                />
                {/* <FlatList
                    data={[]}
                    renderItem={renderItem}
                    keyExtractor={item => item._id}
                /> */}
                <Text>Hi {data.me.userName}</Text>
            </View>
        </Page>
    );
};

export default observer(Home);
