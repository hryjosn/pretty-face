import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
const Card = ({ onPress, children, style }) => {
    return (
        <View
            style={tw`shadow-xl bg-gray-100 rounded-3 flex justify-center items-center py-5 px-4`}>
            {children}
        </View>
    );
};

export default Card;
