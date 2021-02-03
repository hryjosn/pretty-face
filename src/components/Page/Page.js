import React from 'react';
import { View, StatusBar, StyleSheet,SafeAreaView } from 'react-native';
import { isIphoneX } from '@helpers';
import { observer } from 'mobx-react';

const Page = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            {/*<StatusBar hidden />*/}
            {props.children}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6f6f6',
    },
});

export default observer(Page);
