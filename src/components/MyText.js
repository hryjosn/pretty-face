import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

export const MyText = (props) => {
    return (
        <Text style={{ ...props.style, ...styles.fontStyle }} {...props}>
            {props.children}
        </Text>
    );
};

const styles = StyleSheet.create({
    fontStyle: {
        ...Platform.select({
            ios: { fontFamily: 'PingFang TC' },
            android: { fontFamily: 'sans-serif' },
        }),
    },
});
