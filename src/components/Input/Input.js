import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import Text from '../Text';
import { observer } from 'mobx-react';

const Input = ({ label, containerStyle, labelFontSize, ...props }) => {
    return (
        <View style={containerStyle}>
            {label && (
                <Text style={{ fontSize: labelFontSize || 18 }}>{label}</Text>
            )}
            <View style={styles.inputStyle}>
                <TextInput style={{ fontSize: 24 }} {...props} />
            </View>
        </View>
    );
};
export default observer(Input);
const styles = StyleSheet.create({
    inputStyle: {
        height: 30,
        width: '100%',
        borderBottomWidth: 1,
        paddingBottom: 10,
        marginTop: 10,
    },
});
