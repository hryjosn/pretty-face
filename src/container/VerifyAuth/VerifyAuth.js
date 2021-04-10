import React from 'react';
import { Page } from '@components';
import { View } from 'react-native';
import { observer } from 'mobx-react';
import CodeInput from './components/CodeInput';
import styles from './VerifyAuth.styles';
const VerifyAuth = () => {
    return (
        <Page>
            <View style={styles.container}>
                <CodeInput />
            </View>
        </Page>
    );
};

export default observer(VerifyAuth);
