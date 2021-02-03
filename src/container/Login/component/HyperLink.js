import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

const HyperLink = ({ onPress, text }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{ borderBottomWidth: 2, borderBottomColor: 'blue' }}>
                <Text style={{ fontSize: 16, color: 'blue' }}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default HyperLink;
