import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import Text from '../Text';
import { observer } from 'mobx-react-lite';

const Input = ({ label, containerStyle, labelFontSize, ...props }) => {
    return (
        <View style={containerStyle}>
            {label && (
                <Text style={{ fontSize: labelFontSize || 18 }}>{label}</Text>
            )}
            <View style={styles.inputStyle}>
                <TextInput
                    style={{ fontSize: 16 }}
                    {...props}
                    autoCapitalize="none"
                />
            </View>
        </View>
    );
};
export default observer(Input);
const styles = StyleSheet.create({
    inputStyle: {
        backgroundColor: '#e9e9e9c5',
        borderRadius: 5,
        height: 40,
        width: '100%',
        borderWidth: 0.2,
        padding: 10,
        marginTop: 10,
    },
});
