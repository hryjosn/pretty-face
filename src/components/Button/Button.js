import React from 'react';
import { TouchableOpacity } from 'react-native';
import Text from './../Text';

export const Button = ({ children, style, ...props }) => {
    return (
        <TouchableOpacity
            {...props}
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
        borderRadius: 40,
    },
};

export default Button;
