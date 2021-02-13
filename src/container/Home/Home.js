import React, { useEffect } from 'react';
import styles from './Home.styles';
import { View } from 'react-native';
import Page from '@components/Page/Page';
import { useStores } from '@store';
import { observer } from 'mobx-react';
import { Button, TextButton, Text, RectangleButton } from '@components';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

const Home = () => {
    return (
        <Page>
            <View style={styles.container}>
                <Text>123</Text>
            </View>
        </Page>
    );
};

export default observer(Home);
