import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { observer } from 'mobx-react';
import { useStores } from '@store';
import { Actions } from 'react-native-router-flux';

import Text from '../Text';

const Header = ({ headerText, Right, Left }) => {
    return (
        <View style={styles.container}>
            {!Actions.state.index ? (
                <TouchableOpacity
                    onPress={() => {
                        Actions.pop();
                    }}>
                    <View style={{ paddingLeft: 10 }}>
                        <Icon name="left" size={30} color="black" />
                    </View>
                </TouchableOpacity>
            ) : (
                <View style={styles.emptyBox} />
            )}

            {headerText && (
                <View style={{ justifyContent: 'center' }}>
                    <Text
                        style={{
                            fontSize: 20,
                            fontWeight: '500',
                        }}>
                        {headerText}
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
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        alignItems: 'center',
    },
});
