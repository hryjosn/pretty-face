import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { Button, Header } from '@components';
import { useStores } from '@store';
import Page from '@components/Page/Page';
import { observer } from 'mobx-react-lite';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { restaurantSample } from '@image';

const Profile = () => {
    const { SignUpStore } = useStores();
    const { handleSignOut, userName, avatarUrl, phone, publicId } = SignUpStore;

    return (
        <Page>
            <Header headerText={'個人檔案'} />
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    source={{
                        uri: avatarUrl,
                    }}
                    style={{ width: '100%', height: 400 }}
                />
            </View>
            <View style={styles.container}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, marginTop: 20 }}>
                        {publicId}
                    </Text>
                    <Text style={{ fontSize: 20, marginTop: 20 }}>
                        Name : {userName}
                    </Text>
                    <Text style={{ fontSize: 20, marginTop: 20 }}>
                        Phone :{phone}
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
                    onPress={() => {
                        handleSignOut();
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
