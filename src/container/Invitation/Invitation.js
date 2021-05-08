import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Header, Input, Text } from '@components';
import { useStores } from '@store';
import Page from '@components/Page/Page';
import { observer } from 'mobx-react';
import { Actions } from 'react-native-router-flux';

const Invitation = () => {
    const { InvitationStore } = useStores();
    const { sendInvitation, updateData } = InvitationStore;
    useEffect(() => {
        console.log('Invitation');
    }, []);
    return (
        <Page>
            <Header headerText={'Invitation'} />

            <View style={styles.container}>
                <Input
                    label={"Your firiend's Email"}
                    placeholder={'Email'}
                    onChangeText={(text) => {
                        console.log('text>', text);
                        updateData('email', text);
                    }}
                />
                <Button
                    style={{ marginTop: 30 }}
                    onPress={() => {
                        sendInvitation();
                    }}>
                    Send
                </Button>
            </View>
        </Page>
    );
};

export default observer(Invitation);

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        justifyContent: 'center',
        flex: 1,
    },
});
