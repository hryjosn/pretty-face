import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import Text from '../Text';
import { observer } from 'mobx-react';
const Input = ({ label, containerStyle, ...props }) => {
    return (
        <View>
            <Text>{label ?? ''}</Text>
            <View style={styles.inputStyle}>
                <TextInput style={{ fontSize: 16 }} {...props} />
            </View>
        </View>
    );
};

export default observer(Input);
const styles = StyleSheet.create({
    inputStyle: {
        width: '100%',
        borderBottomWidth: 0.5,
        paddingBottom: 5,
        paddingLeft: 3,
    },
});
