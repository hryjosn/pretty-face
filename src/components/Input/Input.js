import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import Text from '../Text';
import { observer } from 'mobx-react';

const Input = ({ label, containerStyle, ...props }) => {
    return (
        <View style={containerStyle}>
            {label && <Text>{label}</Text>}
            <View style={styles.inputStyle}>
                <TextInput style={{ fontSize: 20 }} {...props} />
            </View>
        </View>
    );
};

export default observer(Input);
const styles = StyleSheet.create({
    inputStyle: {
        width: '100%',
        paddingLeft: 2,
    },
});
