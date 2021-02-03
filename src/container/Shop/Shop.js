import React from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    ScrollView,
    Image,
    ImageBackground,
} from 'react-native';
import Page from '@components/Page/Page';
import { observer } from 'mobx-react';
import { useStores } from '@store/store';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { restaurantSample } from '@image';
import ShopDetailModal from '@container/Shop/components/ShopDetailModal';


const Shop = () => {
    const { ShopStore, ShopDetailModalStore } = useStores();
    const { openModal, updateData } = ShopDetailModalStore;
    const { name, menuItems } = ShopStore;
    return (
        <Page>
            <ImageBackground source={restaurantSample} style={{ flex: 1 }}>
                <View
                    style={{
                        ...styles.rowStyle,
                        marginBottom: 20,
                        marginTop: 20,
                        marginHorizontal: 15,
                    }}>
                    <View>
                        <TouchableOpacity
                            onPress={() => {
                                Actions.pop();
                            }}>
                            <Text style={{ fontSize: 20, color: 'white' }}>
                                返回
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity
                            onPress={() => {
                                updateData('visible', true);
                            }}>
                            <Text style={{ fontSize: 20, color: 'white' }}>
                                新增菜單
                            </Text>
                        </TouchableOpacity>
                    </View>
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
                    <View
                        style={{
                            paddingTop: 15,
                            paddingHorizontal: 15,
                            alignItems: 'flex-end',
                        }}>
                        <TouchableOpacity onPress={() => {
                            openModal()
                        }}>
                            <Icon name={'edit'} size={20}/>
                        </TouchableOpacity>
                    </View>
                    <Text style={{ fontSize: 20, alignSelf: 'center' }}>
                        {name}
                    </Text>
                    <Text
                        style={{
                            ...styles.descriptionStyle,
                            marginBottom: 20,
                            marginHorizontal: 40,
                        }}>
                        可配送日 : 24h後，星期三 | 可外送
                    </Text>
                </View>
            </ImageBackground>
            <View style={{ flex: 2 }}>
                <ScrollView>
                    <View style={styles.container}>
                        {menuItems.map((item, index) => {
                            const { name, price, subtitle, photo_url } = item;
                            return (
                                <View key={`item_${index}`} style={{ ...styles.rowStyle, marginBottom: 10 }}>
                                    <View
                                        style={{
                                            ...styles.signboardStyle,
                                            height: 100,
                                            width: 100,
                                        }}>
                                        <Image source={{ uri: photo_url }} style={{ flex: 1 }}/>
                                    </View>
                                    <View style={{ alignSelf: 'center' }}>
                                        <Text
                                            style={{ fontSize: 20, textAlign: 'left' }}>
                                            {name}
                                        </Text>
                                        <Text style={styles.descriptionStyle}>
                                            {subtitle}
                                        </Text>
                                    </View>
                                    <View style={{ alignSelf: 'center' }}>
                                        <Text style={styles.descriptionStyle}>
                                            ${price}
                                        </Text>
                                    </View>
                                </View>
                            );
                        })}

                    </View>
                </ScrollView>
            </View>
            <ShopDetailModal/>
        </Page>
    );
};

export default observer(Shop);

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 30,
        marginTop: 30,
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
        borderColor: 'gray',
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
    signboardStyle: {
        borderColor: 'gray',
        borderWidth: 1,
    },
    image: {
        flex: 1,
    },
});
