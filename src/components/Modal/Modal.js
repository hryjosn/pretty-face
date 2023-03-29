import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/AntDesign';
import Page from '@components/Page/Page';

export const MyModal = ({ children, header, Right, closeModal, ...props }) => {
    return (
        <Modal {...props}>
            <Page>
                <View
                    style={tw`flex-row justify-between items-center px-5 pb-3 border-b-2 border-gray-200`}>
                    <TouchableOpacity onPress={closeModal}>
                        <Icon name="close" size={30} color="black" />
                    </TouchableOpacity>

                    {header && (
                        <View style={{ justifyContent: 'center' }}>
                            <Text
                                style={{
                                    fontSize: 20,
                                    fontWeight: '500',
                                }}>
                                {header}
                            </Text>
                        </View>
                    )}
                    {Right ? <Right /> : <View style={tw`w-[50px]`} />}
                </View>
                {children}
            </Page>
        </Modal>
    );
};

export default MyModal;
