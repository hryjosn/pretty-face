import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const HyperLink = ({ onPress, children }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View>
                <Text style={{ color: 'blue' }}>{children}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default HyperLink;
