import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

const MyText = ({ fontSize, ...props }) => {
    return (
        <Text
            style={{ fontSize: fontSize, ...props.style, ...styles.fontStyle }}
            {...props}>
            {props.children}
        </Text>
    );
};
export default MyText;
const styles = StyleSheet.create({
    fontStyle: {
        ...Platform.select({
            ios: { fontFamily: 'PingFang TC' },
            android: { fontFamily: 'sans-serif' },
        }),
    },
});
