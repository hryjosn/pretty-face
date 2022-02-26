import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import Text from '../Text';
import { observer } from 'mobx-react-lite';

const IconInput = ({ label, containerStyle, icon, ...props }) => {
    const { style, ...rest } = props;
    return (
        <View
            style={{
                ...styles.containerInputStyle,
                ...props.containerStyle,
            }}>
            {icon && icon()}
            <View style={styles.inputStyle}>
                <TextInput style={{ fontSize: 20, marginLeft: 8 }} {...rest} />
            </View>
        </View>
    );
};

export default observer(IconInput);
const styles = StyleSheet.create({
    inputStyle: {
        width: '100%',
        paddingLeft: 2,
    },
    containerInputStyle: {
        paddingBottom: 15,
        paddingTop: 40,
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        borderColor: '#a8a8a8',
        alignItems: 'center',
    },
});
