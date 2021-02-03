import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ImageBackground } from 'react-native';
import { CircleButton, RectangleButton, Header } from '@components';
import { useStores } from '@store';
import Page from '@components/Page/Page';
import { observer } from 'mobx-react';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { restaurantSample } from '@image';

const Profile = () => {
    const { ShopStore, LoginStore } = useStores();

    const { handleSignOut } = LoginStore;
    const { getShopInfo } = ShopStore;
    return (
        <Page>
            <Header headerText={"個人檔案"} />
            <ImageBackground source={restaurantSample} style={{ flex: 1 }}>
                <View style={{ ...styles.rowStyle, marginHorizontal: 15 }}>

                </View>
                <View
                    style={{
                        ...styles.signboardStyle,
                        alignSelf: 'center',
                        borderRadius: 15,
                        backgroundColor: 'white',
                        position: 'relative',
                        top: 120,
                    }}>

                </View>
            </ImageBackground>
            <View style={styles.container}>

                <View style={{ alignItems: 'center' }}>
                    <CircleButton>
                    </CircleButton>
                    <Text style={{ fontSize: 20, marginTop: 20 }}>姓名</Text>

                    <View style={{ marginVertical: 20 }}>
                        {/*<Text style={styles.descriptionStyle}>網站</Text>*/}
                        <Text style={styles.descriptionStyle}>個人簡介</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            getShopInfo();
                            Actions.push('Shop');
                        }}>
                        <Text style={{ fontSize: 20, marginVertical: 20 }}>
                            我的餐廳
                        </Text>
                    </TouchableOpacity>

                </View>


            </View>
            <View style={{ alignItems: 'center' }}>
                <RectangleButton
                    buttonColor={'black'}
                    textColor={'white'}
                    onPress={() => {
                        handleSignOut();
                    }}>
                    登出
                </RectangleButton>
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
