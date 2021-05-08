import React, { useEffect } from 'react';
import { Button, Page, Text } from '@components';
import { View } from 'react-native';
import { observer } from 'mobx-react';
import styles from './Pending.styles';
import { useStores } from '@store';
const Pending = () => {
    const { SignUpStore } = useStores();
    const {
        handleSignOut,
        checkFollower,
        demandAmount,
        followers,
    } = SignUpStore;
    useEffect(() => {
        checkFollower();
    }, []);
    return (
        <Page>
            <View style={styles.container}>
                <Text fontSize={20}>Be patient</Text>
                <Text>
                    You still need more than {demandAmount} people like you,
                    then you will be part of us :)
                </Text>
                {!!followers.length && (
                    <Text>
                        You have received {followers.length} like already.
                    </Text>
                )}
            </View>
            <Button
                style={{ marginVertical: 20 }}
                onPress={() => {
                    handleSignOut();
                }}>
                Sign Out
            </Button>
        </Page>
    );
};

export default observer(Pending);
