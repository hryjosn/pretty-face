import React from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
    ActivityIndicator,
} from 'react-native';
import { Button, Header } from '@components';
import { useStores } from '@store';
import Page from '@components/Page/Page';
import { observer } from 'mobx-react-lite';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { restaurantSample } from '@image';
import { useQuery } from '@apollo/client';
import { GET_MY_INFO } from './gql';
import tw from 'twrnc';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = () => {
    const { loading, error, data } = useQuery(GET_MY_INFO);
    const { SignUpStore } = useStores();
    const { handleSignOut, avatarUrl, publicId } = SignUpStore;
    if (loading) return <ActivityIndicator style={tw`pt-5`} size="large" />;
    return (
        <Page>
            <Header headerText={'Profile'} />
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    source={{
                        uri: data.me.portrait.url,
                    }}
                    style={{ width: '100%', height: 400 }}
                />
            </View>
            <View style={styles.container}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, marginTop: 20 }}>
                        Name : {data.me.userName}
                    </Text>
                    <Text style={{ fontSize: 20, marginTop: 20 }}>
                        Phone :{data.me.phone}
                    </Text>
                </View>
            </View>
            <View style={{ paddingHorizontal: 70 }}>
                <Button
                    onPress={() => {
                        Actions.push('Invitation');
                    }}>
                    Invite your Friend
                </Button>
                <Button
                    style={{ marginVertical: 20 }}
                    onPress={async () => {
                        await AsyncStorage.clear();
                        Actions.replace('Login');
                    }}>
                    Sign Out
                </Button>
            </View>
        </Page>
    );
};

export default observer(Profile);

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 30,
        flex: 1,
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
