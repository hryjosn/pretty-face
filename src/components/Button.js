import React from 'react';
import { TouchableOpacity, Dimensions } from 'react-native';
import { MyText } from './MyText';
const { width } = Dimensions.get('window');
export const Button = ({ onPress, children, style }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{ ...styles.buttonStyle, ...style }}>
            <MyText style={styles.buttonTextStyle}>{children}</MyText>
        </TouchableOpacity>
    );
};

export const TextButton = ({ onPress, color, children, fontSize }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <MyText style={[styles.textButtonTextStyle, { color, fontSize }]}>
                {children}
            </MyText>
        </TouchableOpacity>
    );
};
export const CircleButton = ({ onPress, children }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 100,
                height: 100,
                backgroundColor: 'black',
                borderRadius: 50,
            }}>
            {children}
        </TouchableOpacity>
    );
};

export const RectangleButton = ({
    onPress,
    children,
    buttonColor,
    textColor,
    disabled = false,
}) => {
    const { rectangleButtonStyle, rectangleButtonTextStyle } = styles;

    let backgroundColor = buttonColor;
    let borderColor = buttonColor;
    let color = textColor;

    return (
        <TouchableOpacity
            disabled={disabled}
            onPress={onPress}
            style={[rectangleButtonStyle, { backgroundColor, borderColor }]}>
            <MyText style={[rectangleButtonTextStyle, { color }]}>
                {children}
            </MyText>
        </TouchableOpacity>
    );
};

const styles = {
    buttonTextStyle: {
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
    textButtonTextStyle: {
        fontSize: 16,
        fontWeight: '600',
    },
    rectangleButtonTextStyle: {
        alignSelf: 'center',
        color: 'rgb(51, 51, 51)',
        fontSize: 16,
        // paddingVertical: 12,
        marginHorizontal: 50,
    },
    rectangleButtonStyle: {
        justifyContent: 'center',
        width: width / 2 + 20,
        height: 50,
        // alignSelf: 'stretch',
        backgroundColor: 'rgb(238, 238, 238)',
        borderRadius: 0,
        borderWidth: 0,
        borderColor: 'rgb(238, 238, 238)',
    },
};

export default Button;
