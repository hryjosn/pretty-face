import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { Text, Input, Page, Button } from '@components';
import { observer } from 'mobx-react-lite';
import { useStores } from '@store';

const SignUp = () => {
    return (
        <Page>
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={{ textAlign: 'center', fontSize: 30 }}>
                        Create Username
                    </Text>
                </View>
                <Text style={styles.description}>
                    Pick a username for your new account. You can always change
                    it later.
                </Text>
                <Input placeholder="Username" />
                <Button style={styles.button}>Next</Button>
            </View>
        </Page>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 40,
        textAlign: 'center',
    },
    title: {
        paddingVertical: 20,
    },
    description: {
        textAlign: 'center',
        marginBottom: 20,
    },
    button: {
        marginTop: 30,
    },
});

export default observer(SignUp);
