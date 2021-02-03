import React from 'react';
import { TouchableOpacity } from 'react-native';
import Text from './../Text';

export const Button = ({ onPress, children, style }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{ ...styles.buttonStyle, ...style }}>
            <Text style={styles.textStyle}>{children}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
    },
    buttonStyle: {
        borderWidth: 1,
        borderRadius: 20,
        marginHorizontal: 10,
        flex: 1,
    },
};

export default Button;
