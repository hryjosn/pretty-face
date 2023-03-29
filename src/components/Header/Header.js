import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { observer } from 'mobx-react-lite';
import { useStores } from '@store';
import { Actions } from 'react-native-router-flux';
import Text from '../Text';
import tw from 'twrnc';

const Header = ({ headerText, Right, Left, children }) => {
    return (
        <View
            style={tw`flex-row justify-between items-center px-3 border-b-2 border-gray-200`}>
            <View style={styles.emptyBox} />

            {children && (
                <View style={{ justifyContent: 'center' }}>
                    <Text
                        style={{
                            fontSize: 20,
                            fontWeight: '500',
                        }}>
                        {children}
                    </Text>
                </View>
            )}
            {Right ? <Right /> : <View style={styles.emptyBox} />}
        </View>
    );
};
export default observer(Header);

const styles = StyleSheet.create({
    emptyBox: {
        width: 45,
    },
});
