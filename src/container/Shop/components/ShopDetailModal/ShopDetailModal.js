import React from 'react';
import {
    Modal,
    StyleSheet,
    TouchableOpacity,
    Text,
    ImageBackground,
    View,
    SafeAreaView,
} from 'react-native';
import Page from '@components/Page/Page';
import { Input } from '@components';
import { foodSample } from '@image';
import { useStores } from '@store';
import { observer } from 'mobx-react';
import Icon from 'react-native-vector-icons/FontAwesome';

const ShopDetailModal = () => {
    const {
        updateData,
        visible,
        paramsUpdate,
        params,
    } = useStores().ShopDetailModalStore;
    const { name, price, introduction, keyWord } = params;

    return (
        <Modal visible={visible}>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#ddd' }}>
                <ImageBackground source={foodSample} style={styles.image}>
                    <TouchableOpacity
                        onPress={() => {
                            updateData('visible', false);
                        }}>
                        <Text
                            style={{
                                marginBottom: 20,
                                marginHorizontal: 15,
                                fontSize: 20,
                                color: 'white',
                            }}>
                            返回
                        </Text>
                    </TouchableOpacity>
                </ImageBackground>
                {/*<View*/}
                {/*    style={{*/}
                {/*        ...styles.signboardStyle,*/}
                {/*        padding: 10,*/}
                {/*        alignSelf: 'center',*/}
                {/*        marginTop: 250,*/}
                {/*        backgroundColor: 'white',*/}
                {/*        flexDirection: 'row',*/}
                {/*    }}>*/}
                {/*    <View style={{ justifyContent: 'center' }}>*/}
                {/*        <TouchableOpacity onPress={() => {*/}
                {/*        }}>*/}
                {/*            <Icon name={'edit'} size={20}/>*/}
                {/*        </TouchableOpacity>*/}
                {/*    </View>*/}
                {/*    <Text style={{ ...styles.descriptionStyle, marginLeft: 10 }}>*/}
                {/*        編輯圖片*/}
                {/*    </Text>*/}
                {/*</View>*/}
                {/*<View style={styles.container}>*/}
                {/*    <View style={{ marginBottom: 10 }}>*/}
                {/*        <Text style={styles.descriptionStyle}>餐點名稱</Text>*/}
                {/*        <Input*/}
                {/*            value={name}*/}
                {/*            maxLength={25}*/}
                {/*            placeholder={'請輸入菜名'}*/}
                {/*            onChangeText={(text) => {*/}
                {/*                paramsUpdate('name', text);*/}
                {/*            }}*/}
                {/*        />*/}
                {/*    </View>*/}
                {/*    <View style={{ marginBottom: 10 }}>*/}
                {/*        <Text style={styles.descriptionStyle}>單價</Text>*/}
                {/*        <Text style={{ fontSize: 20 }}>$ 200</Text>*/}
                {/*    </View>*/}
                {/*    <View style={{ marginBottom: 10 }}>*/}
                {/*        <Text style={styles.descriptionStyle}>簡介</Text>*/}
                {/*        <Text style={{ fontSize: 20 }}>好吃義式香料雞肉</Text>*/}
                {/*    </View>*/}
                {/*    <View style={{ marginBottom: 10 }}>*/}
                {/*        <Text style={styles.descriptionStyle}>分類關鍵字</Text>*/}
                {/*        <View style={{ flexDirection: 'row' }}>*/}
                {/*            <View*/}
                {/*                style={{*/}
                {/*                    ...styles.signboardStyle,*/}
                {/*                    padding: 3,*/}
                {/*                    marginRight: 10,*/}
                {/*                }}>*/}
                {/*                <Text>中式</Text>*/}
                {/*            </View>*/}
                {/*            <View style={{ ...styles.signboardStyle, padding: 3 }}>*/}
                {/*                <Text>西式</Text>*/}
                {/*            </View>*/}
                {/*        </View>*/}
                {/*    </View>*/}
                {/*    <View*/}
                {/*        style={{*/}
                {/*            ...styles.signboardStyle,*/}
                {/*            padding: 10,*/}
                {/*            alignSelf: 'center',*/}
                {/*            backgroundColor: 'white',*/}
                {/*            flexDirection: 'row',*/}
                {/*        }}>*/}
                {/*        <View style={{ justifyContent: 'center' }}>*/}
                {/*            <TouchableOpacity onPress={() => {*/}
                {/*            }}>*/}
                {/*                <Icon name={'plus'} size={20}/>*/}
                {/*            </TouchableOpacity>*/}
                {/*        </View>*/}
                {/*        <Text style={{ ...styles.descriptionStyle, marginLeft: 10 }}>*/}
                {/*            規格選項*/}
                {/*        </Text>*/}
                {/*    </View>*/}
                {/*</View>*/}
            </SafeAreaView>
        </Modal>
    );
};

export default observer(ShopDetailModal);
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 50,
        marginTop: 50,
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
    image: {
        resizeMode: 'cover',
        width: '100%',
        height: '50%',
        flex: 1,
    },
    signboardStyle: {
        borderColor: 'gray',
        borderWidth: 2,
    },
});
