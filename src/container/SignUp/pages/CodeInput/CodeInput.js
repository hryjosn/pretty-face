import {
    Animated,
    SafeAreaView,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { observer } from 'mobx-react-lite';
import styles from './CodeInput.style';
import { useStores } from '@store';
import { Actions } from 'react-native-router-flux';

const { Text: AnimatedText } = Animated;
const CELL_COUNT = 6;

const CodeInput = () => {
    const { SignUpStore } = useStores();
    const { verifyAuth } = SignUpStore;
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    const renderCell = ({ index, symbol, isFocused }) => (
        <AnimatedText
            key={index}
            style={[styles.cell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
        </AnimatedText>
    );

    return (
        <SafeAreaView style={styles.root}>
            <Text style={styles.title}>Verification</Text>
            <Text style={styles.subTitle}>
                Please enter the verification code{'\n'}
                we send to your email address
            </Text>

            <CodeField
                ref={ref}
                {...props}
                value={value}
                onChangeText={setValue}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={renderCell}
            />
            <TouchableOpacity
                style={styles.nextButton}
                onPress={() => {
                    Actions.push('ChooseAvatar');
                }}>
                <Text style={styles.nextButtonText}>Verify</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default observer(CodeInput);
