import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    rateBoxContainer: {
        width: '50%',
    },
    exchangeRateBox: {
        marginHorizontal: 4,
        marginVertical: 5,
        borderWidth: 1,
        padding: 10,
        borderColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rateText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    rate: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red',
    },
    promptText: {
        color: 'blue',
        marginBottom: 20,
    },
    container: {
        marginHorizontal: 30,
        marginTop: 30,
        flex: 1,
    },
    headerStyle: {
        color: '#555555',
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    contentStyle: {
        borderWidth: 2,
        marginTop: 15,
        marginBottom: 5,
        padding: 20,
        borderTopColor: 'gray',
        borderBottomColor: 'gray',
        borderRightColor: 'gray',
        borderLeftColor: 'gray',
    },
    descriptionStyle: {
        fontSize: 16,
        paddingVertical: 5,
        color: '#7F7F7F',
    },
    rowStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
